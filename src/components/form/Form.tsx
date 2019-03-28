import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface FormProps {
  label: string;

}

export interface FormState {
  name: string;
}

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: event.target.value,
    });
  }

  public render() {
    return (
      <div className="Form">
        <TextField
          id="outlined-name"
          label={this.props.label}
          value={this.state.name}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <br />
        {this.state.name}
      </div>
    );
  }

}

export default Form;
