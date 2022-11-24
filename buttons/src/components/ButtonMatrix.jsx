import React from "react";

class ButtonMatrix extends React.Component{
    constructor(){
        super();
        this.click = this.click.bind(this);
        this.state = {
            value: 0
        }
    }
click(){
    this.setState({
            value: this.state.value + 1
    });
}
    render (props){
        return(
            <div>
                <button onClick={this.click} >{ this.state.value }</button>
            </div>
        );
    }
}
export default ButtonMatrix;