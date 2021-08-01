import { Component } from 'react';
import ThemeSelector from './CalculatorApp/ThemeSelector';
import Result from './CalculatorApp/Result';
import Keypad from './CalculatorApp/Keypad';
import Footer from 'components/CalculatorApp/Footer'
import getRestul from 'utils/getResult';
import 'styles/App.scss';

class CalculatorApp extends Component {
  state = {
    result: ''
  };

  componentDidMount = () => {
    window.addEventListener('keydown', (e) => {
      this.handleKeyDown(e);
    });
  }

  handleKeyDown = (e) => {
    // eslint-disable-next-line
    const avaliableKey = /[\d\+\-\*\/\.]/;
    if (e.key.match(avaliableKey)) {
      this.updateResult(e.key);
    } else if (e.key === "Backspace") {
      this.updateResult("DEL");
    } else if (e.key === "Escape") {
      this.updateResult("RESET");
    } else if (e.key === "Enter") {
      this.updateResult("=");
    }
  }

  updateResult = (k) => {
    switch(k) {
      case "DEL":
        this.setState({result: this.state.result.slice(0, -1)});
        break;
      case "RESET":
        this.setState({result: ""});
        break;
      case "+":
      case "-":
      case "x":
      case "/":
      case ".":
        if (k === 'x') {
          k = '*';
        }
        // eslint-disable-next-line
        const reg = /[\+\-\*\/\.]$/;
        if (this.state.result.match(reg)) {
          this.setState({result: this.state.result.slice(0, -1) + k});
        } else {
          this.setState({result: this.state.result + k});
        }
        break;
      case '=':
        this.setState({result: getRestul(this.state.result)});
        break;
      default:
        this.setState({result: this.state.result + k})
    }
  }

  render() { 
    return (
      <main className="calculator">
        <div className="title">
          <h1>calc</h1>
          <div className="theme">
            <h2 className="theme-title">
              THEME
            </h2>
            <ThemeSelector />
          </div>
        </div>
        <Result result={this.state.result} />
        <Keypad updateResult={(k) => this.updateResult(k)} />
        <Footer />
      </main>
    );
  }
}

export default CalculatorApp;