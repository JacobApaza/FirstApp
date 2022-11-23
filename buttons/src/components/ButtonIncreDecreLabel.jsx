import React from "react";

class ButtonIncreDecreLabel extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }; 
        this.ClickDecrease = this.ClickDecrease.bind(this);
        this.ClickIncrease = this.ClickIncrease.bind(this);
    }

    ClickIncrease() {
        this.setState({
            value: this.state.value + 1
        });
    }

    ClickDecrease() { 
        this.setState({
            value: this.state.value - 1
        });    
    }

    render(props) {
        return (
            <div>
                <span>
                    { this.state.value }
                </span>
                <br></br>
                <button onClick={this.ClickIncrease}>Increase</button>
                <button onClick={this.ClickDecrease}>Decrease</button>
            </div>
        );
    }
}

export default ButtonIncreDecreLabel;