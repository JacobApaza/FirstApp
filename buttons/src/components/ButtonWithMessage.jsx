import React from "react";

class ButtonWithMessage extends React.Component {
    constructor() {
        super();
        this.click = this.click.bind(this);
    }

    click() {
        alert("Hola choche");
    }

    render(props) {
        return (
            <div>
                <button onClick={this.click}>Hola Mundo</button>
            </div>
        );
    }
}

export default ButtonWithMessage;