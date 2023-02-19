import { Component } from 'react';

export default function App() {
  // throw new Error('oh no');
  return (
    <>
      <h1>Hello World</h1>
      <ErrorBoundary fallback={<h1>There was an error.</h1>}>
        <Buggy />
      </ErrorBoundary>
    </>
  );
}

function Buggy() {
  throw new Error('error');
  return <h1>Buggy</h1>;
}

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // logErrorToServer(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    // throw new Error('oh no');
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

