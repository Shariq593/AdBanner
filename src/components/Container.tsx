// src/components/Container.tsx
import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {children}
    </div>
  );
};

export default Container;
