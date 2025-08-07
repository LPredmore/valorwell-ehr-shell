// Message handler for parent-child communication
export class IframeMessageHandler {
  private listeners: Map<string, Function[]> = new Map();

  constructor() {
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  private handleMessage(event: MessageEvent) {
    // Verify message is from trusted microfrontend
    if (event.data && 
        event.data.source === 'valorwell-microfrontend' &&
        event.origin === 'https://valorwell-ehr-staff-profile.lovable.app') {
      
      const { type, data } = event.data;
      const handlers = this.listeners.get(type) || [];
      handlers.forEach(handler => handler(data, event.origin));
    }
  }

  public on(messageType: string, handler: Function) {
    if (!this.listeners.has(messageType)) {
      this.listeners.set(messageType, []);
    }
    this.listeners.get(messageType)!.push(handler);
  }

  public sendMessage(iframe: HTMLIFrameElement, type: string, data?: any) {
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({
        target: 'valorwell-microfrontend',
        type,
        data
      }, 'https://valorwell-ehr-staff-profile.lovable.app');
    }
  }
}

// Singleton instance
export const messageHandler = new IframeMessageHandler();