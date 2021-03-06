import React from 'react';
import ReactDOM from 'react-dom';

// Components
import { Layout } from './components/layout/Layout';

class App extends React.Component {
  render() {
    return <Layout />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
