import React, { Component, createContext } from 'react';
import { ThemeProvider } from "styled-components";
import * as themes from 'assets/schema.json';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    themes: {
      ...themes.default.data,
    },
    theme: 'dark'
  }
  changeTheme = (theme) => {
    this.setState({theme: theme});
  }
  render() {
    return (
      <ThemeContext.Provider value={{...this.state, changeTheme:this.changeTheme}}>
        <ThemeProvider theme={this.state.themes[this.state.theme]}>
          { this.props.children }
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
