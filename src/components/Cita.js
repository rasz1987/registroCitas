import React from 'react';

export default function Cita({cita,index,eliminarCita}) {

    const {mascota,propietario,fecha,hora,sintomas} = cita;

    return (
        <div className="cita">
            <p>Mascota: <span> {mascota} </span> </p>
            <p>Propietario: <span> {propietario} </span></p>
            <p>Fecha: <span> {fecha} </span></p>
            <p>Hora: <span> {hora} </span></p>
            <p>Sintomas: <span> {sintomas} </span></p>
            <button 
                onClick = { ()=> eliminarCita(index) }
                type="button" className="button eliminar u-full-width" >Delete X</button>
        </div>
    )
}
