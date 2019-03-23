import * as React from 'react';
import Form from '../../components/form/Form';

class Submit extends React.Component {
  public render() {
    return (
      <div className="Submit">
        <h2>Form Test</h2>
        <Form label="name"/>
      </div>
    );
  }
}

export default Submit;
