import ThemeContextProvider from "context/ThemeContextProvider";
import { GlobalStyles } from "components/GlobalStyles";
import CalculatorApp from "components/CalculatorApp";

function App() {
  return (
    <ThemeContextProvider className="App">
      <GlobalStyles />
      <CalculatorApp />
    </ThemeContextProvider>
  );
}

export default App;
