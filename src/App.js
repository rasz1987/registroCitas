import React, { useState, Fragment, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

    let citasIniciales = JSON.parse( localStorage.getItem('citas') );

    if (!citasIniciales) {
        citasIniciales = [];
    }

    const [citas, setCitas] = useState(citasIniciales);

    const crearCitas = cita => {
        const nuevasCitas = [...citas, cita];
        setCitas(nuevasCitas);
    };

    const eliminarCita = index => {
        const nuevasCitas = [...citas];

        nuevasCitas.splice(index,1);
        setCitas(nuevasCitas);
    };

    useEffect(
        () => {
            let citasIniciales = JSON.parse( localStorage.getItem('citas') );

            if (citasIniciales) {
                localStorage.setItem('citas', JSON.stringify(citas))
            } else {
                localStorage.setItem('citas', JSON.stringify([]));
            }
        }, [citas]
    );
    
    // Cargar condicionalmente un titulo
    const titulo = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administrar las Citas';
    
    return (
        <Fragment>
            <h1>Administrador de Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario 
                            crearCitas={crearCitas}
                        />
                    </div>

                    <div className="one-half column">
                        <h2>{titulo}</h2>

                        {citas.map((cita,index) => {
                            return (
                                <Cita 
                                    key          = {index}
                                    index        = {index}
                                    cita         = {cita}
                                    eliminarCita = {eliminarCita}
                                />
                            )
                        })}
                        

                    </div>
                </div>
            </div>
        </Fragment>
        
    );
}

export default App;
