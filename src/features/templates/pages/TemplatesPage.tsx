import React from 'react';
import { IframeContainer } from '@/components/IframeContainer';

export const TemplatesPage: React.FC = () => {
  return (
    <IframeContainer 
      title="Template Management" 
      initialSrc="https://placeholder-templates.example.com" 
    />
  );
};