import React from "react";

class ButtonIncreaseDecrease extends React.Component {
    
    constructor (){
        super();
        this.click1 = this.click1.bind(this);
        this.click2 = this.click2.bind(this);
    }
    
    click1 () {
        alert ("Incrementando");
    }

    click2 () {
        alert ("Decrementando");
    }
    
    render (props) {
        return(
        <div>
                <button onClick={this.click1}>+1</button>                
                <button onClick={this.click2}>-1</button>
        </div>
            
        );
    }
}
export default ButtonIncreaseDecrease;