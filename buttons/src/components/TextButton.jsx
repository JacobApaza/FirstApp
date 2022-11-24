import React from "react";

class TextButton extends React.Component{
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.state = {
            text: ""
        };
    }   

    onChangeText(event){
        this.setState({
            text: event.target.value
        });

    }

    submit(){
        alert( this.findMostRepeatedWord(this.state.text));
    }

    findMostRepeatedWord(text) {
        const arrayWords = text.split(" ");
        const counterMap = new Map();
        let maxTimesWord = "";
        for (let i = 0; i < arrayWords.length; i++) {
          const word = arrayWords[i];
          let times = counterMap.get(word);
          if (times === undefined) {
            times = 1;
          }
          else {
            times = times + 1; 
          }
          counterMap.set(word, times);
          
          const maxTimes = counterMap.get(maxTimesWord);
          if (maxTimes === undefined || maxTimes < times){
            maxTimesWord = word;
          }
       }
        return "word :" + maxTimesWord + " times: " + counterMap.get(maxTimesWord);
    }
   
    render(props){
        return(
            <div>
                <label>Ingrese Texto</label>
                <input 
                    type="text" 
                    value={this.state.text}
                    onChange={this.onChangeText}
                ></input>
                <button onClick={this.submit}>Submit</button>
            </div>
        );
    }
}

export default TextButton;