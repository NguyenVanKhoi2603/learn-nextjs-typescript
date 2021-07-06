import React, { Component } from 'react';

type StateType = {
    counter: number;
    isReal: boolean;
}

export default class ClassHook extends Component<any, StateType> {
    // state = {
    //     isReal: true,
    //     content: "i love u so mush!!!"
    // }

    constructor(props: number) {
        super(props)
        this.state = {
            counter: 0,
            isReal: true
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
                    this.setState((prevState) => {
                        return {
                            counter: prevState.counter + 1
                        }
                    })
                }}>{this.state.counter}</button>
                {/* partial -> mot phan cua state  */}
            </div>
        )
    }
}
