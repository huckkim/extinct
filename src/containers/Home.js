import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Home.css";

function ExtinctState(props){
  const state = props.state;
  return(
    <div>
      <p1>Status:</p1>
      {state === 'alive' &&
        <p2>Alive</p2>
      }
      {state === 'extinct' &&
        <p2>Extinct</p2>
      }
      {state === 'unknown' &&
        <p2>Unknown</p2>
      }
    </div>
  )
}

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const input = this.state.value;
    var array = input.split(" ");
    if (input === 'Burhinus grallarius') return 'alive';
    else if (input === 'Carex albida') return 'extinct';
    else if (input === 'Diceros bicornis') return 'extinct';
    else if (input === 'Ursus maritimus') return 'extinct';
    else if (input === 'Panthera tigris') return 'extinct';
    else if (input === 'Picidae') return 'extinct';
    return 'unknown';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Extinctathon</h1>
          <p>Monitored by MaddAddam. Adam named the living animals, MaddAddam names the dead ones.</p>
          {this.props.isAuthenticated && 
            <React.Fragment>
              <h2>Welcome Back Crake</h2>
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                  
                >
                  <ControlLabel>Species (Genus Species)</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                    bsSize="xs"
                  />
                  <ExtinctState state={this.getValidationState()} />
                  <FormControl.Feedback />
                </FormGroup>
              </form>
            </React.Fragment>
          }
        </div>
      </div>
    );
  }
}
