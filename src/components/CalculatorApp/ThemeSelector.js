import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'context/ThemeContextProvider';

const Container = styled.div`
  background: ${props => props.theme.background.keypad}
`;

const ThemeRadio = styled.input`
  &:checked {
    background: ${props => props.theme.key["equal-bg"]};
  }
  &::before {
    color: ${props => props.theme.text["theme-color"]};
  }
`;

const ThemeSelector = () => {
  const { themes, theme, changeTheme } = useContext(ThemeContext); 
  return (
    <Container className="theme-selector">
      { Object.keys(themes).map(t => {
        return (
          <ThemeRadio
            key={t}
            type="radio"
            name="thems"
            checked={t === theme}
            value={t}
            onChange={() => changeTheme(t)}>
          </ThemeRadio>
        );
      })}
    </Container>
  );
}

export default ThemeSelector;