import React, { Component } from 'react'

class Clima extends Component {

    mostrarResultado = () => {

        //Obtener datos de la consulta
        console.log('variable resultado del prop ' + this.props.resultado)
        const { name, main, weather } = this.props.resultado;


        if (!name) return null;

        const kelvin = 273.15;
        const urlIcon = `http://openweathermap.org/img/w/${weather[0].icon}.png`;


        return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">

                            <h2>  {name}</h2>
                            <p className="temperatura">
                                Actual: {(main.temp - kelvin).toFixed(2)} &deg;C
                                <img src={urlIcon} alt="`clima de ${name}`" />
                            </p>
                            <p>Max. {(main.temp_max - kelvin).toFixed(2)} &deg;</p>
                            <p>Min. {(main.temp_min - kelvin).toFixed(2)} &deg;</p>
                        </span>
                    </div>
                </div>
            </div>

        )
    }

    render() {
        return (
            <div className="container">
                {this.mostrarResultado()}
            </div>
        )
    }
}

export default Clima;
