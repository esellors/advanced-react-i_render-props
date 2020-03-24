import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    increase = num => {
        if (this.props.children) console.log(this.props.children.consoleThis)
        this.setState({counter: this.state.counter + num});
    }

    decrease = num => {
        this.setState({counter: this.state.counter - num});
    }

    render() {
        const api = {
            counter: this.state.counter,
            increase: this.increase,
            decrease: this.decrease
        }
        return (
          <>
            { this.props.render(api) }
            { this.props.children }
          </>
        )
    }
}

export default Counter;