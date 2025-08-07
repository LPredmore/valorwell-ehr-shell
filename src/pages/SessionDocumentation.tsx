
import React from 'react';
import { IframeContainer } from '@/components/IframeContainer';

export const SessionDocumentation: React.FC = () => {
  return (
    <IframeContainer 
      title="Session Documentation" 
      initialSrc="https://placeholder-session-docs.example.com" 
    />
  );
};
