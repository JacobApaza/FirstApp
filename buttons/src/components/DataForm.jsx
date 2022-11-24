import React from "react";

class DataForm extends React.Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.state = {
            name: ""
        };
    }

    onChangeName(event){
        this.setState({
            name: event.target.value
        });
    }

    onChangeTelefono(event){
        this.setState({
            name: event.target.value
        });
    }

    onChangeDireccion(event){
        this.setState({
            name: event.target.value
        });
    }

    onChangeEmail(event){
        this.setState({
            name: event.target.value
        });
    }
    submit(){
        //alert
        console.log(this.state);
    }

    render (props) {
        return(
            <div>
                <thead>
                <table>
                    <tr>
                        <td>
                        <label>Nombres y Apellidos:</label>
                        </td>
                        <td>
                        <input 
                        name="NombreApellido" 
                        type="text"
                        value={this.state.name}     
                        onChange={this.onChangeName}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label>Telefono:</label>
                        </td>
                        <td>
                        <input name="telefono"></input>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <label>Direccion:</label>
                        </td>
                        <td>
                            <input name="direccion"></input>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <label>email:</label>
                        </td>
                        <td>
                            <input name="email"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Sexo:</label>
                        </td>
                        <td>
                            <label>M</label><input type="checkbox" value="true"></input>
                            <label>F</label><input type="checkbox" value="false"></input>
                        </td>
                    </tr>          
                </table>
                </thead>
                <button onClick={this.submit}>Submit</button>
            </div>
        );

    }
}

export default DataForm;