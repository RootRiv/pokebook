import * as React from 'react';

interface SfcProps {
  label: string;
}

const Sfc: React.SFC<SfcProps> = ({ label }) => {
    return (
      <div className="sfc">
        { label }
      </div>
    );
};
  
Sfc.defaultProps = {
    label: 'React.SFC',
};
  
export default Sfc;
