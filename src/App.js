import React, { Component } from 'react';
import Header from './Components/Header'
import Form from './Components/Form'
import Error from './Components/Error'
import Clima from './Components/Clima'

class App extends Component {

  state = {
    error: false,
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('Provs previos ')
    // console.log( prevProps);
    // console.log('Provs Actuales')
    // console.log( prevState);
    if (prevState.consulta !== this.state.consulta) {
      this.consultarApi();
    }


  }

  componentDidMount() {
    this.setState({
      error: false
    })
  }

  consultarApi = () => {
    const { ciudad, pais } = this.state.consulta;
    if (!ciudad || !pais) return null;
    const appID = '23db8220a37b13843be613b467a6dcd6';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
    //query con fetch api
    fetch(url)
      .then(respuesta => {
        //console.log(respuesta)
        return respuesta.json();
      })
      .then(datos => {
        console.log(datos)
        this.setState({
          resultado: datos
        })
      }).catch(error => {
        console.log(error)
      })

    //leer la url y agregar la API key

  }

  datosConsulta = (respuesta) => {
    if (respuesta.ciudad === '' || respuesta.pais === '') {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        consulta: respuesta,
        error: false
      })

    }

  }


  render() {

    const error = this.state.error;
    //console.log(error);
    let resultado;

    if (error) {
      resultado = <Error mensaje="Ambos campos son obligatorios" />
    } else {
      resultado = <Clima resultado={this.state.resultado}/>
      console.log(resultado);
    }


    return (
      <div className="App">
        <Header
          title='Clima React'
        />
        <Form
          datosConsulta={this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
}

export default App;
