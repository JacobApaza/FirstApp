import React from "react";
class ButtonIncreaseDecrease extends React.Component() {
    constructor ();
    this.ButtonIncreaseDecrease = this.click.bind(this);

    click1 () {
        alert ("incrementando");
    }
    click2 () {
        alert ("decrementando");
    }
    render (props){
        return(
            <div>
                <button onClick={this.click1}>+1</button>
            </div>
            <div>
                <button onClick={this.click2}>-1</button>
            </div>
        );
    }
}
return default ButtonIncreaseDecrease;