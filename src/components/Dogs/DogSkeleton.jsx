import React from 'react';
import ContentLoader from 'react-content-loader';

const DogSkeleton = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="120" rx="3" ry="3" width="178" height="6" />
    <rect x="7" y="131" rx="3" ry="3" width="178" height="6" />
    <rect x="5" y="142" rx="3" ry="3" width="178" height="6" />
    <rect x="6" y="1" rx="0" ry="0" width="176" height="111" />
    <rect x="239" y="158" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
);

export default DogSkeleton;
