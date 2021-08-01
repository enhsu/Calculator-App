import styled from "styled-components";
import Keys from 'assets/keypad';

const Container = styled.div`
  background: ${props => props.theme.background.keypad};
`;

const KeyBtn = styled.button`
  color: ${props => {
    switch(props.type) {
      case "DEL":
      case "RESET":
        return props.theme.text["function-color"];
      case "=":
        return props.theme.text["equal-color"];
      default:
        return props.theme.text["digit-color"];
    }
  }};
  background: ${props => {
    switch(props.type) {
      case 'DEL':
      case "RESET":
        return props.theme.key["function-bg"];
      case '=':
        return props.theme.key["equal-bg"];
      default:
        return props.theme.key["digit-bg"];;
    }
  }};
  box-shadow: 0 0.25rem ${props => {
    switch(props.type) {
      case "DEL":
      case "RESET":
        return props.theme.key["function-shadow"];
      case "=":
        return props.theme.key["equal-shadow"];
      default:
        return props.theme.key["digit-shadow"];
    }
  }};
  &:active {
    box-shadow: 0 0.2rem ${props => {
      switch(props.type) {
        case "DEL":
        case "RESET":
          return props.theme.key["function-shadow"];
        case "=":
          return props.theme.key["equal-shadow"];
        default:
          return props.theme.key["digit-shadow"];
      }
    }};
  }
`;

const Keypad = (props) => {
  return (
    <Container
      className="keypad">
      { Keys.map(k => {
        return (
          <KeyBtn
            key={k}
            type={k}
            onClick={() => props.updateResult(k)}>
            {k}
          </KeyBtn>
        )
      }) }
    </Container>
  );
}

export default Keypad;