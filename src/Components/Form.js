import React, { Component } from 'react'

export class Form extends Component {
    
    //Ref del formulario
        cuidadRef = React.createRef();
        paisRef =  React.createRef();

    //crear el objeto a partir de los ref


    
    buscarClima = (e) =>{
        e.preventDefault();

        //creo el objeto 
        const respuesta = {
            ciudad:this.cuidadRef.current.value,
            pais: this.paisRef.current.value
        }

        //enviar props
        this.props.datosConsulta(respuesta);

    }
    
    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.cuidadRef} id="ciudad" type="text" />
                                <label htmlFor="ciudad">Ciudad: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef}> 
                                    <option value="" defaultValue>Elige un pais</option>
                                    <option value="AR" >Argentina</option>
                                    <option value="CO" >Colombia</option>
                                    <option value="CR" >Costa rica</option>
                                    <option value="ES" >Espana</option>
                                    <option value="US" >Argentina</option>
                                    <option value="SV" >El Salvador</option>

                                </select>
                                <label htmlFor="pais">Pais: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2 buscador" >
                            <input  type="submit" className="waves-effect waves-light
                             btn-large yellow accent-4 " value="Buscar" />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
