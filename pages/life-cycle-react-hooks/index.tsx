import React, { Component } from 'react';

type StateType = {
    counter: number;
}

export default class MyClass extends Component<any, StateType> {
    // state = {
    //     isReal: true,
    //     content: "i love u so mush!!!"
    // }

    constructor(props: number) {
        super(props)
        this.state = {
            counter: 0
        }
        console.log("constructor run...");
    }

    componentDidMount() { // run after render
        console.log("componentDidMount run...");
    }

    componentDidCatch() {
        console.log("componentDidCatch run...");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate run...");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount run...");
    }
    render() {
        console.log("render is run...");

        return (
            // <div className="container">Content: {this.state.content}</div>
            <div className="container">
                this is

                <button onClick={() => {
                    const counter = this.state.counter;
                    this.setState({
                        counter: counter + 1
                    })
                }}>{this.state.counter}</button>
            </div>
        )
    }
}
