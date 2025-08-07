import React from 'react';
import { IframeContainer } from '@/components/IframeContainer';

export const EditTemplatePage: React.FC = () => {
  return (
    <IframeContainer 
      title="Edit Template" 
      initialSrc="https://placeholder-edit-template.example.com" 
    />
  );
};