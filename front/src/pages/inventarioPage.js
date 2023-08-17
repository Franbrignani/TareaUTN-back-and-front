import { useState, useEffect } from 'react';
import axios from 'axios';
import inventarioItem from '../components/inventarioItem';

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
            <h2>Inventario</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    inventario.map(item => <inventarioItem key={item.id}
                        titulo={item.titulo} genero={item.genero}
                        body={item.autor} imagen={item.img_id} />)
                )
            }
        </section>
    );
}

export default InventarioPage;