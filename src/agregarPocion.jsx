import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AgregarPocion = () => {
  

 

  return (
 // formulario para agregar pociones
    <>
  
    <h2>Formulario para cargar pociones</h2>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    value={nuevaPocion}
                    onChange={(e) => setNuevaPocion(e.target.value)}
                    placeholder='Escribe la nueva poción' />
                <button type='submit'>AGREGAR POCIÓN</button>
            </form>

            </>
  );


}
export default AgregarPocion