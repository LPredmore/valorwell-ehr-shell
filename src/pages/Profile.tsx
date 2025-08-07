
import React from 'react';

export const Profile: React.FC = () => {
  return (
    <div className="container mx-auto p-6 max-w-full h-full">
      <iframe
        src="https://valorwell-ehr-staff-profile.lovable.app/"
        title="User Profile Management"
        className="w-full h-full border-0 rounded-lg"
        allowFullScreen={true}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  );
};
