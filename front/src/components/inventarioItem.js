import React from 'react';

const inventarioItem = (props) => {
    const {titulo, genero, autor, imagen} = props;

    return (
        <div clasName="inventario">
            <h1>{titulo}</h1>
            <h2>{genero}</h2>
            <h2>{autor}</h2>
            <img src={imagen} />
            
            <hr />
        </div>
    );
}

export default inventarioItem;