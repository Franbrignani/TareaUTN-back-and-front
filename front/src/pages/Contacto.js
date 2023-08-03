import React from "react";

const Contacto = (props) => {
    return(
        <div><main>
           
        <h2 className="mensaje">Mensajes:</h2>
    
        <form>
            <label for="nombre">Nombre:</label>
            <input id="nombre" type="text" className="entrada" />
    
            <label for="apellido">Apellido:</label>
            <input id="apellido" type="text" className="entrada" />
    
            <label for="email">Email:</label>
            <input id="email" type="text" className="entrada" />
    
            <label for="mensaje">Mensaje:</label>
            <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Mensaje..." className="entrada"></textarea>
            <input className="enviar" type="submit" value="Enviar" />
    
        </form>
    
    </main></div>
    )
}

export default Contacto;