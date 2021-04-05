import React from "react";
import Counter from "./pages/Counter";
import Heading from "./pages/Heading";


const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

class App extends React.Component<object, CounterState> {
  readonly state: CounterState = initialState;

  increment = (isShift: boolean) => {
    const inc = isShift ? 10 : 1;

    return this.setState({ count: this.state.count + inc });
  };

  render() {
    return (
      <>
        <Heading />

        <Counter
          label={`Current`}
          count={this.state.count}
          onCounterIncrease={this.increment}
        />
      </>
    );
  }
}

export default App;
