import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    return(
        <div><main>

        <div className="borde"></div>
        <section className="bienvenida">
          <h2>Bienvenidos a Bookland:</h2>
          <p className="descp">¡Bienvenido a Bookland! Nos complace tenerte aquí y compartir contigo nuestra pasión por los
            libros. En nuestra página encontrarás una amplia selección de títulos de diferentes géneros, desde novelas de
            ficción hasta libros de no ficción y mucho más.
    
            En Bookland, creemos que cada libro tiene una historia única que merece ser contada, y es por eso que hemos
            creado un espacio donde puedes encontrar no solo la sinopsis del libro, sino también reseñas detalladas y
            opiniones de otros lectores que te ayudarán a decidir si ese libro es para ti.
    
            Además, nuestro equipo se dedica a recopilar información detallada sobre los autores de cada libro que
            presentamos en nuestra página, para que puedas conocer más sobre sus vidas y su obra.
    
            Así que si eres un ávido lector, un amante de los libros o simplemente buscas nuevas lecturas para agregar a tu
            lista, ¡estás en el lugar correcto! ¡Bienvenido a Bookland!</p>
        </section>
    
        <div className="borde"></div>
    
        <section className="principales">
          <h3>Recomendaciones Principales:</h3>
          <div className="tarjeta">
            <div className="card">
              <img src="https://covers.alibrate.com/b/59872e93cba2bce50c1ba0a4/b74b7142-315a-483b-8d48-c3c1f4c230ea/share"
                className="card-img-top" alt="portada-hobbit"/>
              <div className="card-body">
                <h5 className="card-title">El Hobbit.</h5>
                <p className="card-text">"El Hobbit" es una novela de fantasía escrita por J.R.R. Tolkien. Fue publicada en
                  1937...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de paginas: 316.</li>
                <li className="list-group-item">Genero: Novela, Literatura fantástica.</li>
                <li className="list-group-item">Autor: Antoine de J. R. R. Tolkien.</li>
              </ul>
              <div className="card-body">
              
              <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
          <div className="tarjeta">
            <div className="card">
              <img src="https://http2.mlstatic.com/D_NQ_NP_816926-MLA49100730533_022022-O.webp" className="card-img-top"
                alt="portada-el-hombre-en-busca-de-sentido"/>
              <div className="card-body">
                <h5 className="card-title">El hombre en busca de sentido.</h5>
                <p className="card-text">"El hombre en busca de sentido" es un libro escrito por Viktor E. Frankl, fue publicado
                  el 1946...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de paginas: 125.</li>
                <li className="list-group-item">Genero: Narrativa personal, Autobiografia.</li>
                <li className="list-group-item">Autor: Viktor Frankl.</li>
              </ul>
              <div className="card-body">
                <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
          <div className="tarjeta">
            <div className="card">
              <img src="https://image.cdn1.buscalibre.com/5deeb7880cf0b59a618b4567.RS500x500.jpg" className="card-img-top"
                alt="portada-pajaro-blanco"/>
              <div className="card-body">
                <h5 className="card-title">Pajaro blanco.</h5>
                <p className="card-text">
                  "Pajaro blanco" es una novela grafica escrita por J.R.Palacio en 2019...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de paginas: 226.</li>
                <li className="list-group-item">Genero: Novela grafica, Historieta.</li>
                <li className="list-group-item">Autor: Raquel Palacio.</li>
              </ul>
              <div className="card-body">
                <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
          <div className="tarjeta">
            <div className="card">
              <img src="https://www.loqueleo.es/uploads/2023/01/resized/200_9788491225133-momo-ed-ilustrada.jpg"
                className="card-img-top" alt="portada-momo"/>
              <div className="card-body">
                <h5 className="card-title">Momo.</h5>
                <p className="card-text">"Momo" es una novela escrita por el autor alemán Michael Ende y publicada por primera
                  vez en 1973...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de paginas: 178.</li>
                <li className="list-group-item">Genero: Literatura fantástica, literatura infantil.</li>
                <li className="list-group-item">Autor: Michael Ende.</li>
              </ul>
              <div className="card-body">
                <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
        </section>
    
        <section className="cortas">
          <h3>Recomendaciones Cortas:</h3>
          <div className="tarjeta">
            <div className="card">
              <img
                src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/029/689/products/78321423_2667428979981701_1469574183322124288_o1-0278b16767d76dca9615744382996329-640-0.webp"
                className="card-img-top" alt="portada-el-principito"/>
              <div className="card-body">
                <h5 className="card-title">El principito.</h5>
                <p className="card-text">"El Principito" es una novela corta escrita por Antoine de Saint-Exupéry y publicada en
                  1943...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de paginas: 124.</li>
                <li className="list-group-item">Genero: Ficción especulativa.</li>
                <li className="list-group-item">Autor: Antoine de Saint-Exupéry.</li>
              </ul>
              <div className="card-body">
                <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
          <div className="tarjeta">
            <div className="card">
              <img src="https://www.tematika.com/media/catalog/Ilhsa/Imagenes/693089.jpg" className="card-img-top"
                alt="portada-rebelion-en-la-granja"/>
              <div className="card-body">
                <h5 className="card-title">Rebelión en la granja.</h5>
                <p className="card-text">"Rebelión en la granja" es una novela de George Orwell publicada en 1945...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de paginas: 110.</li>
                <li className="list-group-item">Genero: Sátira.</li>
                <li className="list-group-item">Autor: George Orwell.</li>
              </ul>
              <div className="card-body">
                <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
          <div className="tarjeta">
            <div className="card">
              <img src="https://images.cdn1.buscalibre.com/fit-in/360x360/a7/d8/a7d89ddf2190116895b8396f91d85993.jpg"
                className="card-img-top" alt="portada-diez-negritos"/>
              <div className="card-body">
                <h5 className="card-title">Diez negritos.</h5>
                <p className="card-text">
                  "Diez negritos" es una novela de misterio escrita por Agatha Christie, publicada en 1939...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de paginas: 256.</li>
                <li className="list-group-item">Genero: Novela policíaca.</li>
                <li className="list-group-item">Autor: Agatha Christie.</li>
              </ul>
              <div className="card-body">
                <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
          <div className="tarjeta">
            <div className="card">
              <img src="https://i2.wp.com/laopinionsl.com.ar/wp-content/uploads/2022/07/Pag-35-3.jpg?ssl=1"
                className="card-img-top" alt="portada-un-mundo-feliz"/>
              <div className="card-body">
                <h5 className="card-title">Un mundo feliz.</h5>
                <p className="card-text">"Un mundo feliz" es una novela de ciencia ficción escrita por Aldous Huxley y publicada
                  en 1932...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de paginas: 178.</li>
                <li className="list-group-item">Genero: Ciencia ficción.</li>
                <li className="list-group-item">Autor: Aldous Huxley.</li>
              </ul>
              <div className="card-body">
                <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
        </section>
    
    
        <section className="sagas">
          <h3>Sagas Recomendadas:</h3>
          <div className="tarjeta">
            <div className="card">
              <img src="https://books2you.es/wp-content/uploads/2022/03/517DxWbJNZL.jpeg" className="card-img-top"
                alt="portada-harry-potter"/>
              <div className="card-body">
                <h5 className="card-title">Harry Potter.</h5>
                <p className="card-text">"Harry Potter" es una serie de novelas fantásticas escrita por la autora británica J.
                  K. Rowling...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de lirbos: 7.</li>
                <li className="list-group-item">Genero: Ficcion, Realismo magico.</li>
                <li className="list-group-item">Autor: J. K. Rowling.</li>
              </ul>
              <div className="card-body">
                <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
          <div className="tarjeta">
            <div className="card">
              <img src="https://medios.lamarmota.es/senor-de-los-anillos.jpeg" className="card-img-top"
                alt="portada-El-señor-de-los-anillos"/>
              <div className="card-body">
                <h5 className="card-title">El señor de los anillos.</h5>
                <p className="card-text">"La saga de libros "El Señor de los Anillos" es una obra de fantasía épica escrita por
                  J.R.R. Tolkien...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de libros: 3.</li>
                <li className="list-group-item">Genero: Novela, Fantasia heroica.</li>
                <li className="list-group-item">Autor: J.R.R. Tolkien.</li>
              </ul>
              <div className="card-body">
                <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
          <div className="tarjeta">
            <div className="card">
              <img src="https://www.elsotano.com/imagenes_grandes/9786078/978607861480.JPG" className="card-img-top"
                alt="portada-maze-runner"/>
              <div className="card-body">
                <h5 className="card-title">Maze runner.</h5>
                <p className="card-text">
                  "Maze Runner" es una serie de novelas de ciencia ficción escritas por James Dashner..</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de lirbos: 6.</li>
                <li className="list-group-item">Genero: Drama, Ciencia ficción.</li>
                <li className="list-group-item">Autor: James Dashner.</li>
              </ul>
              <div className="card-body">
                <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
          <div className="tarjeta">
            <div className="card">
              <img src="https://www.penguinlibros.com/ar/2384912/juego-de-tronos-cancion-de-hielo-y-fuego-1.jpg"
                className="card-img-top" alt="portada-juego-de-tronos"/>
              <div className="card-body">
                <h5 className="card-title">Juego de tronos.</h5>
                <p className="card-text">"La saga de libros de "Juego de Tronos" escrita por George R.R. Martin...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cantidad de libros: 5.</li>
                <li className="list-group-item">Genero: Novela, Alta fantasía.</li>
                <li className="list-group-item">Autor: George R. R. Martin.</li>
              </ul>
              <div className="card-body">
                <Link to="/sinopsis" className="card-link">Leer más</Link>
              </div>
            </div>
          </div>
        </section>
    
      </main>
      </div>
    );
}

 export default HomePage;