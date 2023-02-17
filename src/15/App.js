import { Component, createContext, createRef, useState } from 'react';

const Theme = createContext({
  mode: 'dark'
});

export default function App() {
  const [ shouldRender, setShouldRender ] = useState(false);
 
  return (
    <>
      <Theme.Provider value={{mode: 'dark'}}>
        <Counter startingCount={10} />
        <hr />
        {shouldRender && <Counter />}
        <button onClick={() => setShouldRender(!shouldRender)}>
          Toggle Counter 
        </button>
        </Theme.Provider>
    </>
  );
}

class Counter extends Component {
  static contextType = Theme;

  constructor(props) {
    super(props);
    this.state = {
      count: props.startingCount ?? 0
    };
    this.buttonRef = createRef();
  }

  componentDidMount() {
    console.log('mounted');
    console.log('buttonRef in componentDidMount():');
    console.log(this.buttonRef);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('unmounting')
  }

/*
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count < 3;
  }
*/

  render() {
    console.log('buttonRef in render() method:')
    console.log(this.buttonRef);
    return (
      <>
        <button ref={this.buttonRef} onClick={() => {
          this.setState({
            count: this.state.count + 1
          });
        }}>
          Increment
        </button>
        <p>Count: {this.state.count}</p>
        {
          /* <p>Theme: {this.context.mode}</p> */
        }
        <Theme.Consumer>
          {
            context => <p>Theme: {context.mode}</p>
          }
        </Theme.Consumer>
      </>
    );
  }
}
