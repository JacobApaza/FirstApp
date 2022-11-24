import React from "react";

class TextButton extends React.Component{
    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }   

    submit(){
        alert("texto recibido");
    }

    render(props){
        return(
            <div>
                <label>Ingrese Texto</label>
                <input type="text"></input>
                <button onClick={this.submit}>Submit</button>
            </div>
        );
    }
}

export default TextButton;