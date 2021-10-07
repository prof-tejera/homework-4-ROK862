import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Equation from './Equation';

const Container = styled.div`
  overflow: hidden;
  font-size: 20px;
  padding: 20px;
  background: #f3f3f3;
  border: 1px solid #cfcfcf;
  border-radius: 15px;
  width: 270px;
  height: 60px;
  text-align: right;
  margin-bottom: 10px;
  color:black;
`;

class Screen extends Component {
  render() {
    // distructure top level utilities component from props.
    const { utilities:mathUtil } = this.props;

    // Get latest printable value to display on screen.
    const getEquation = () => mathUtil.GetPrintValue();

    const equation = <Equation value={getEquation()} />

    return <Container>{equation} {this.props.value}</Container>;
  }
}


// Declare PropTypes.
Screen.propTypes = {
  utilities: PropTypes.object,
  action: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func
};

export default Screen;
