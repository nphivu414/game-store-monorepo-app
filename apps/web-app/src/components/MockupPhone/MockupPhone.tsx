import * as React from 'react';

const MockupPhone: React.FC = ({ children }) => {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="relative flex flex-col overflow-hidden shadow rounded-box artboard phone-x">{children}</div>
      </div>
    </div>
  );
};

export default MockupPhone;
