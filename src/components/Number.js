import { Component } from 'react';
import styled from 'styled-components';
import audio from '../../src/audio/onclick_sound.mp3';
import {Howl} from 'howler';

const Container = styled.div`
  padding: 10px;
  border: 1px solid #bbbbbb;
  border-radius: 9px;
  width: 40px;
  text-align: center;
  float: right;
  margin: 5px;
  box-shadow: 3px 2px 15px 2px #00000021;
  background: #0088d7;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

class Number extends Component {
 
  togglePlay = () => {
    const sound = new Howl({src:audio});
    sound.play();
  }

  render() {
    const { action } = this.props;
    const value = (action !== 'pi') ? this.props.value : 3.141592653589793238;

    return (
      <Container onClick={() => {this.props.onClick(value); this.togglePlay(); }}>
        {this.props.value}
      </Container>
    );
  }
}

export default Number;
