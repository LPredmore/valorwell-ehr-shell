import React, { Suspense } from 'react';

const RemoteProfileApp = React.lazy(() => import('staffProfile/ProfileApp'));

export const ProfileMF: React.FC = () => (
  <div className="h-full">
    <Suspense fallback={<div>Loading Profile...</div>}>
      <RemoteProfileApp />
    </Suspense>
  </div>
);

export default ProfileMF;
