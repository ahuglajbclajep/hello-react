import React from "react";
import ReactDOM from "react-dom";

type Theme = {
  color: string;
  backgroundColor: string;
};
const themes: Record<"light" | "dark", Theme> = {
  light: {
    color: "#000000",
    backgroundColor: "#eeeeee"
  },
  dark: {
    color: "#ffffff",
    backgroundColor: "#222222"
  }
};
const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
});

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  context!: React.ContextType<typeof ThemeContext>;

  render() {
    return (
      <button
        {...this.props}
        style={this.context.theme}
        onClick={this.context.toggleTheme}
      />
    );
  }
}

type State = React.ContextType<typeof ThemeContext>;
class App extends React.Component<{}, State> {
  state = { theme: themes.light, toggleTheme: this.toggleTheme.bind(this) };

  toggleTheme() {
    this.setState(({ theme }) => ({
      theme: theme === themes.dark ? themes.light : themes.dark
    }));
  }

  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state}>
          <ThemedButton>Inside of Provider</ThemedButton>
          <ThemedButton>Inside of Provider</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton>Outside of Provider</ThemedButton>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
