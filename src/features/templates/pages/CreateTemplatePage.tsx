import React from 'react';
import { IframeContainer } from '@/components/IframeContainer';

export const CreateTemplatePage: React.FC = () => {
  return (
    <IframeContainer 
      title="Create New Template" 
      initialSrc="https://placeholder-create-template.example.com" 
    />
  );
};