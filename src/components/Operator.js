import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import audio from '../../src/audio/onclick_sound.mp3';
import {Howl} from 'howler';

const Container = styled.div`
  padding: 10px;
  border: 1px solid #bbbbbb;
  border-radius: 9px;
  width: 40px;
  text-align: center;
  margin: 5px;
  box-shadow: 3px 2px 15px 2px #00000021;
  background: #000000;
  color: white;
  font-weight: bold;
`;

class Operator extends Component {
  togglePlay = () => {
    const sound = new Howl({src:audio});
    sound.play();
  }

  render() {
    const { action } = this.props;
    const value = (action) ? action : this.props.value;
    
    return (
      <Container onClick={() => { this.props.onClick(value); this.togglePlay(); }}>
        {this.props.value}
      </Container>
    );
  }
}

Operator.propTypes = {
  action: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func
};

export default Operator;
