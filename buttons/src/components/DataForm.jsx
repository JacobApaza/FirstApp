import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            <Form>
                <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombres y Apellidos:</Form.Label>
                <Form.Control type="text" placeholder="Nombres y apellidos" value={this.state.name} onChange={this.onChangeName}/>
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="fono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="999999999"value={this.state.fono} onChange={this.onChangeTelefono}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="addressin">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" placeholder="Direccion R-123"value={this.state.addressin} onChange={this.onChangeDireccion}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="email" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="aaa@aaaa.com" value={this.state.mail} onChange={this.onChangeEmail}/>
                <Form.Text className="text-muted">
                Ingrese direccion de correo valido.
                </Form.Text>
            </Form.Group>
                
                <Button variant="primary" type="submit" onClick={this.submit}>
                Submit
                </Button>
            </Form>   
        );

    }
}

export default DataForm;