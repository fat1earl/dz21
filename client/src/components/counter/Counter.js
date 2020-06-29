import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    // this.count = 0;

    this.state = {
      count: this.props.initState,
    };
  }

  componentDidMount() {
    this._startTimer();
  }

  componentWillUnmount() {
    this._stopTimer();
  }

  // ---------------------------------------------------------

  _setCount() {
    this.setState({ count: this.state.count + 1 });
  }

  _startTimer() {
    this.timer = setInterval(() => {
      // this.count = this.count + 1;
      // this.state.count = this.state.count + 1;
      this._setCount();
      console.log();
    }, 1000);
  }

  _stopTimer() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div>
        {this.state.count > 30 ? (
          <button>Ok!!!</button>
        ) : (
          <h2>{this.state.count}</h2>
        )}
      </div>
    );
  }
}
