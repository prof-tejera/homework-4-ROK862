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
    const { utilities:mathUtil } = this.props;

    const getEquation = () => {
      const value = mathUtil.GetPrintValue();
      return value;
    }

    const equation = <Equation value={getEquation()} />

    return <Container>{equation} {this.props.value}</Container>;
  }
}



Screen.propTypes = {
  action: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func
};

export default Screen;
