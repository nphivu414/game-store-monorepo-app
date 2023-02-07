import React from 'react';

type MockupPhoneProps = {
  children?: React.ReactNode;
};

export const MockupPhone: React.FC<MockupPhoneProps> = ({ children }) => {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="relative flex flex-col overflow-hidden shadow rounded-box artboard phone-x">{children}</div>
      </div>
    </div>
  );
};
