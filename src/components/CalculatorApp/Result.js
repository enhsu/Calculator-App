import styled from "styled-components";

const ResultPad = styled.input`
  color: ${props => props.theme.text["result-color"]};
  background: ${({theme}) => theme.background.screen};
`;

const Result = (props) => {
  return (
    <ResultPad
      type="text"
      disabled
      className="result"
      value={ props.result } />
  );
}

export default Result;