import React from 'react';

const InventarioItem = (props) => {
    const { titulo, genero, autor, imagen } = props;

    return (
        <div clasName="inventario">
            <br></br>
            <h2>Titulo: {titulo}</h2>
            <h2>Genero: {genero}</h2>
            <h2>Autor: {autor}</h2>
            <img src={imagen} />
            <hr />
            <hr />
        </div>
    );
}

export default InventarioItem;