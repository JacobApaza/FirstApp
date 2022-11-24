import React from "react";

class DataForm extends React.Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTelefono = this.onChangeTelefono.bind(this);
        this.onChangeDireccion = this.onChangeDireccion.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSexo = this.onChangeSexo.bind(this);
        this.state = {name: "", fono: "",addressin: "",mail: "",sexo: ""};
        
    }

    onChangeName(event){
        this.setState({
            name: event.target.value
        });
    }

    onChangeTelefono(event){
        this.setState({
            fono: event.target.value
        });
    }

    onChangeDireccion(event){
        this.setState({
            addressin: event.target.value
        });
    }

    onChangeEmail(event){
        this.setState({
            mail: event.target.value
        });
    }
    
    onChangeSexo(event){
        this.setState({
            sexo: event.target.value
        });
    }

    submit(){
        alert(JSON.stringify(this.state));
    }

    render (props) {
        return(
            <table>
                <tbody>
                
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
                        <input 
                            name="telefono"
                            type="text"
                            value={this.state.fono}
                            onChange={this.onChangeTelefono}></input>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <label>Direccion:</label>
                        </td>
                        <td>
                            <input 
                            name="direccion"
                            type="text"
                            value={this.state.addressin}
                            onChange={this.onChangeDireccion}></input>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <label>email:</label>
                        </td>
                        <td>
                            <input 
                            name="email"
                            type="text"
                            value={this.state.mail}
                            onChange={this.onChangeEmail}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Sexo:</label>
                        </td>
                        <td>
                            <label>M</label><input name="sx" type="radio" value="m" onChange={this.onChangeSexo}></input>
                            <label>F</label><input name="sx" type="radio" value="f" onChange={this.onChangeSexo}></input>
                        </td>
                    </tr>          
                </tbody>
               <button onClick={this.submit}>Submit</button>
            </table>
        );

    }
}

export default DataForm;