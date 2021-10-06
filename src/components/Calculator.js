import { Component } from "react";

import MathUtil from "../utilities/Math";
import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";


class Calculator extends Component {
  state = {
    first: null,
    operator: null,
    second: null,
    mathUtil: null,
  };

  special = {
    sqRoot: 'sq',
    qbRoot: 'qb',
    pi: 'pi',
  }

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      this.setState({ first: `${this.state.first || ""}${number}` });
    } else {
      this.setState({ second: `${this.state.second || ""}${number}` });
    }
  };

  handleOperatorClick = (operator) => {
    const first = parseFloat(this.state.first);
    MathUtil.AddOperator(operator);

    if (operator === "=") {
      const second = parseFloat(this.state.second);
      MathUtil.AddNumber(first);
      MathUtil.AddNumber(second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
      } else if (this.state.operator === this.special.sqRoot) {
        this.setState({ operator: null, first: Math.sqrt(first), second: null });
      } else if (this.state.operator === this.special.qbRoot) {
        this.setState({ operator: null, first: Math.cbrt(first), second: null });
      } 
    } else if (operator === "clear") {
      MathUtil.Clear();
      this.setState({ first: null, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second || this.state.first;

  render() {
    return (
      <>
        <Screen utilities={MathUtil} value={this.getScreenValue()} />
        <div style={{ display: "flex" }}> 
          <div style={{ width: 145 }} className='Calculator-Number-Section'>
            <Number value={0} onClick={this.handleNumberClick} />
            <Number value={1} onClick={this.handleNumberClick} />
            <Number value={2} onClick={this.handleNumberClick} />
            <Number value={3} onClick={this.handleNumberClick} />
            <Number value={4} onClick={this.handleNumberClick} />
            <Number value={5} onClick={this.handleNumberClick} />
            <Number value={6} onClick={this.handleNumberClick} />
            <Number value={7} onClick={this.handleNumberClick} />
            <Number value={8} onClick={this.handleNumberClick} />
            <Number value={9} onClick={this.handleNumberClick} />
          </div>
          <div style={{ paddingLeft: 10 }} className='Calculator-Operator-Section'>
            <Operator value="&#8730;" action="sq" onClick={this.handleOperatorClick} />
            <Operator value="&#8731;" action="qb" onClick={this.handleOperatorClick} />
            <Number value="&#960;" action='pi' onClick={this.handleNumberClick} />
          </div>
          <div style={{ paddingLeft: 10 }} className='Calculator-Operator-Section'>
            <Operator value="+" onClick={this.handleOperatorClick} />
            <Operator value="/" onClick={this.handleOperatorClick} />
            <Operator value="x" onClick={this.handleOperatorClick} />
            <Operator value="-" onClick={this.handleOperatorClick} />
            <Operator value="=" onClick={this.handleOperatorClick} />
            <Operator value="clear" onClick={this.handleOperatorClick} />
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
