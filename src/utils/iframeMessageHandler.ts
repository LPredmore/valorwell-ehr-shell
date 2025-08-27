
// Message handler for parent-child communication
export class IframeMessageHandler {
  private listeners: Map<string, Function[]> = new Map();
  private trustedOrigins: Set<string> = new Set();

  constructor() {
    this.initializeTrustedOrigins();
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  private initializeTrustedOrigins() {
    // Get allowed origins from environment variable
    const allowedOrigins = import.meta.env.VITE_ALLOWED_IFRAME_ORIGINS;
    
    if (allowedOrigins) {
      allowedOrigins.split(',').forEach((origin: string) => {
        this.trustedOrigins.add(origin.trim());
      });
    }

    // Add default origins
    this.trustedOrigins.add('https://valorwell-ehr-staff-profile.lovable.app');
    
    // Add development origins
    const staffProfileUrl = import.meta.env.VITE_STAFF_PROFILE_URL;
    if (staffProfileUrl) {
      try {
        const url = new URL(staffProfileUrl);
        this.trustedOrigins.add(url.origin);
      } catch (error) {
        console.warn('[IframeMessageHandler] Invalid staff profile URL:', staffProfileUrl);
      }
    }

    // Add common development origins
    if (import.meta.env.DEV) {
      this.trustedOrigins.add('http://localhost:8081');
      this.trustedOrigins.add('http://127.0.0.1:8081');
      this.trustedOrigins.add('https://localhost:8081');
    }

    console.log('[IframeMessageHandler] Initialized with trusted origins:', Array.from(this.trustedOrigins));
  }

  private handleMessage(event: MessageEvent) {
    try {
      // Verify message structure
      if (!event.data || typeof event.data !== 'object') {
        console.debug('[IframeMessageHandler] Ignoring non-object message:', event.data);
        return;
      }

      // Verify message is from trusted microfrontend
      if (event.data.source === 'valorwell-microfrontend' && this.isTrustedOrigin(event.origin)) {
        const { type, data } = event.data;
        
        if (!type) {
          console.warn('[IframeMessageHandler] Message missing type field:', event.data);
          return;
        }

        console.log('[IframeMessageHandler] Processing message:', { type, origin: event.origin });
        
        const handlers = this.listeners.get(type) || [];
        handlers.forEach(handler => {
          try {
            handler(data, event.origin);
          } catch (error) {
            console.error('[IframeMessageHandler] Error in message handler:', error, { type, data });
          }
        });
      } else {
        console.debug('[IframeMessageHandler] Ignoring untrusted message from:', event.origin, event.data);
      }
    } catch (error) {
      console.error('[IframeMessageHandler] Error processing message:', error, event);
    }
  }

  private isTrustedOrigin(origin: string): boolean {
    return this.trustedOrigins.has(origin);
  }

  public addTrustedOrigin(origin: string) {
    this.trustedOrigins.add(origin);
    console.log('[IframeMessageHandler] Added trusted origin:', origin);
  }

  public removeTrustedOrigin(origin: string) {
    this.trustedOrigins.delete(origin);
    console.log('[IframeMessageHandler] Removed trusted origin:', origin);
  }

  public on(messageType: string, handler: Function) {
    if (!this.listeners.has(messageType)) {
      this.listeners.set(messageType, []);
    }
    this.listeners.get(messageType)!.push(handler);
    console.log('[IframeMessageHandler] Added listener for message type:', messageType);
  }

  public off(messageType: string, handler?: Function) {
    if (!handler) {
      this.listeners.delete(messageType);
      console.log('[IframeMessageHandler] Removed all listeners for message type:', messageType);
    } else {
      const handlers = this.listeners.get(messageType) || [];
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
        console.log('[IframeMessageHandler] Removed specific listener for message type:', messageType);
      }
    }
  }

  public sendMessage(iframe: HTMLIFrameElement, type: string, data?: any) {
    if (!iframe || !iframe.contentWindow) {
      console.error('[IframeMessageHandler] Invalid iframe or contentWindow:', iframe);
      return;
    }

    try {
      const message = {
        target: 'valorwell-microfrontend',
        type,
        data
      };

      // Try to determine the target origin from iframe src
      let targetOrigin = '*';
      if (iframe.src) {
        try {
          const url = new URL(iframe.src);
          targetOrigin = url.origin;
        } catch (error) {
          console.warn('[IframeMessageHandler] Could not parse iframe origin, using wildcard:', error);
        }
      }

      console.log('[IframeMessageHandler] Sending message:', { type, targetOrigin });
      iframe.contentWindow.postMessage(message, targetOrigin);
    } catch (error) {
      console.error('[IframeMessageHandler] Error sending message:', error, { type, data });
    }
  }

  public getTrustedOrigins(): string[] {
    return Array.from(this.trustedOrigins);
  }
}

// Singleton instance
export const messageHandler = new IframeMessageHandler();
