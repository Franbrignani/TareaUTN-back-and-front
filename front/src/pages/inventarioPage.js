import { useState, useEffect } from 'react';
import axios from 'axios';
import InventarioItem from '../components/InventarioItem';

const InventarioPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [inventario, setinventario] = useState([]);

    useEffect(() => {
        const cargarinventario = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/inventario');
            setinventario(response.data);
            setLoading(false);
        };

        cargarinventario();
    }, []);

    return (
        <section className="holder">
            <h2>Inventario: </h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    console.log(InventarioItem),
                    inventario.map(item => <InventarioItem key={item.id}
                        titulo={item.titulo} genero={item.genero}
                        autor={item.autor} imagen={item.imagen} />)
                )
            }
        </section>
    )
};

export default InventarioPage;