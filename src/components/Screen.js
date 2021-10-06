import { Component } from 'react';
import styled from 'styled-components';

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

const EquationWraper = styled.div`
  font-size: 20px;
  width: 371%;
  position: relative;
  right: 265%;
  font-weight: bold;
  color: #008cdd;
`;


class Equation extends Component {
  render() {
    const l = this.props.value.length;
    const size = (l >= 35 && l <= 44) ? 14 : (l >= 45) ? 12 : 20; 
    return <EquationWraper style={{ fontSize: size }}>{this.props.value}</EquationWraper>
  }
}

export default Screen;
