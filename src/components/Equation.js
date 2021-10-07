import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

Equation.propTypes = {
    value: PropTypes.number,
  };

export default Equation;