import React from "react";
import { Link } from "react-router-dom";

const Sinopsis = (props) => {
    return(
        <div>
          <main>

<section class="sinopsis">
  <h3>El Hobbit:</h3>
  <img class="portada"
        src="https://covers.alibrate.com/b/59872e93cba2bce50c1ba0a4/b74b7142-315a-483b-8d48-c3c1f4c230ea/share"
        alt="portada-el-hobbit"/>
        <dl class="row">
        <dt class="col-sm-3">Sinopsis:</dt>
        <dd class="col-sm-9">El Hobbit es una novela de fantasía escrita por J.R.R. Tolkien, publicada en 1937. La
          historia sigue las aventuras del hobbit Bilbo Bolsón, quien es reclutado por un mago llamado Gandalf para
          ayudar a un grupo de enanos liderados por Thorin Escudo de Roble a recuperar su tesoro robado por un dragón
          llamado Smaug.

          Bilbo se une al grupo de enanos y juntos viajan hacia las Montañas Solitarias, donde se encuentra la guarida
          de Smaug. En el camino, enfrentan numerosos peligros, como trolls, trasgos, arañas gigantes y elfos malvados.

          Finalmente, llegan a la Montaña Solitaria y, después de un feroz combate, matan a Smaug. Sin embargo, los
          enanos deben luchar contra una fuerza de orcos y trasgos que han venido a reclamar el tesoro de la montaña.

          En la Batalla de los Cinco Ejércitos, los enanos, los hombres, los elfos y los trasgos se enfrentan en una
          lucha épica. Finalmente, los buenos triunfan y los enanos recuperan su tesoro. Bilbo regresa a su hogar en la
          Comarca, rico y famoso, pero también cambiado por las aventuras que ha vivido.</dd>
          <dt class="col-sm-3">Genero: </dt>
          <dd class="col-sm-9">Novela, Literatura fantástica.</dd>
          <dt class="col-sm-3">Cantidad de paginas: </dt>
        <dd class="col-sm-9">316.</dd>
        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">1937.</dd>
        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"> <Link to="/autores">J.R.R. Tolkien.</Link></dd>
          </dl>
    </section>

    <section class="sinopsis">
      <h3>El hombre en busca de sentido: </h3>
      <img class="portada" src="https://http2.mlstatic.com/D_NQ_NP_816926-MLA49100730533_022022-O.webp"
        alt="portada-el-hombre-en-busca-de-sentido"/>
      <dl class="row">
        <dt class="col-sm-3">Sinopsis:</dt>
        <dd class="col-sm-9">El hombre en busca del sentido (título original: "Man's Search for Meaning") es un libro
          escrito por el psiquiatra austriaco Viktor E. Frankl, en el que relata su experiencia como prisionero en
          campos de concentración nazis durante la Segunda Guerra Mundial.

          El libro está dividido en dos partes. En la primera, Frankl describe su experiencia en los campos de
          concentración y la lucha constante por la supervivencia en un ambiente hostil y cruel. A través de anécdotas y
          reflexiones personales, el autor muestra cómo encontró sentido en la vida, incluso en las situaciones más
          difíciles, y cómo logró mantener su dignidad y su humanidad a pesar de las condiciones extremas.

          En la segunda parte del libro, Frankl presenta su teoría de la logoterapia, una corriente psicológica que
          enfatiza la importancia del sentido de la vida y la búsqueda de un propósito para superar los obstáculos y las
          dificultades. Según Frankl, la logoterapia se basa en la idea de que el ser humano tiene una necesidad innata
          de encontrar un significado en su vida, y que esta búsqueda puede ser una fuente de motivación y de
          resiliencia.

          En resumen, "El hombre en busca del sentido" es una obra conmovedora y reflexiva que muestra cómo el ser
          humano puede encontrar sentido y propósito incluso en las situaciones más extremas y desesperadas. La obra de
          Viktor Frankl ha sido muy influyente en el campo de la psicología y ha inspirado a muchas personas a buscar un
          sentido en sus vidas.</dd>


        <dt class="col-sm-3">Genero: </dt>
        <dd class="col-sm-9">Narrativa personal, Autobiografia.</dd>

        <dt class="col-sm-3">Cantidad de paginas: </dt>
        <dd class="col-sm-9">125.</dd>

        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">1946.</dd>

        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"><Link to="/autores">Viktor Frankl.</Link></dd>
      </dl>
    </section>

    <section class="sinopsis">
      <h3>Pajaro blanco: </h3>
      <img class="portada" src="https://image.cdn1.buscalibre.com/5deeb7880cf0b59a618b4567.RS500x500.jpg"
        alt="portada-pajaro-blanco"/>
      <dl class="row">
        <dt class="col-sm-3">Sinopsis:</dt>
        <dd class="col-sm-9">En esta historia la abuela de Julian le cuenta cómo ella, Sara, fue acogida por una familia
          en un pueblo francés ocupado por los nazis durante la Segunda Guerra Mundial.

          Le explica cómo fue perseguida por ser judía y cómo el niño al que todos rechazaban se convirtió en su
          salvador y mejor amigo.

          Esta desgarradora y conmovedora experiencia demuestra el poder de la amabilidad para cambiar corazones,
          construir puentes e incluso salvar vidas. Como su abuela le dice a Julian: «Siempre se necesita valor para ser
          amable, pero en aquellos tiempos esa amabilidad podía costarte todo».</dd>


        <dt class="col-sm-3">Genero: </dt>
        <dd class="col-sm-9">Novela grafica, Historieta.</dd>

        <dt class="col-sm-3">Cantidad de paginas: </dt>
        <dd class="col-sm-9">226.</dd>

        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">2019.</dd>

        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"><Link to="/autores">Raquel Palacio.</Link></dd>
      </dl>
    </section>

    <section class="sinopsis">
      <h3>Momo: </h3>
      <img class="portada" src="https://i.pinimg.com/736x/b8/83/1c/b8831c4a450e88a27dc12ab812749cc3.jpg"
        alt="portada-momo"/>
      <dl class="row">
        <dt class="col-sm-3">Sinopsis: </dt>
        <dd class="col-sm-9">"Momo" es una novela escrita por el autor alemán Michael Ende y publicada por primera vez
          en 1973. La historia sigue a una niña llamada Momo que vive en un anfiteatro abandonado en las afueras de una
          ciudad. Momo es una niña muy especial y sabia que tiene la habilidad de escuchar y comprender a la gente en un
          nivel profundo, lo que le permite ayudar a los demás a resolver sus problemas y encontrar la felicidad.

          Un día, Momo se da cuenta de que la ciudad está siendo afectada por la llegada de unos extraños seres llamados
          los Hombres Grises, quienes convencen a las personas para que ahorren tiempo. Con la ayuda de sus amigos, Momo
          se embarca en una aventura para detener a los Hombres Grises y salvar a la ciudad.

          Durante su viaje, Momo y sus amigos descubren que los Hombres Grises son en realidad criaturas malvadas que se
          alimentan del tiempo que las personas han ahorrado. Momo y sus amigos deben enfrentar muchos obstáculos para
          derrotar a los Hombres Grises y salvar a la ciudad de la tristeza y la desesperación.

          En resumen, "Momo" es una historia sobre el valor del tiempo, la importancia de la amistad y el poder del amor
          y la sabiduría para superar el mal. La novela ha sido muy popular en todo el mundo por su mensaje inspirador y
          sus personajes entrañables.</dd>


        <dt class="col-sm-3">Genero: </dt>
        <dd class="col-sm-9">Literatura fantástica, literatura infantil.</dd>

        <dt class="col-sm-3">Cantidad de paginas: </dt>
        <dd class="col-sm-9">178.</dd>

        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">1973.</dd>

        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"><Link to="/autores">Michael Ende.</Link></dd>
      </dl>
    </section>

    <section class="sinopsis">
      <h3>El princiito: </h3>
      <img class="portada"
        src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/029/689/products/78321423_2667428979981701_1469574183322124288_o1-0278b16767d76dca9615744382996329-640-0.webp"
        alt="portada-el-principito"/>
      <dl class="row">
        <dt class="col-sm-3">Sinopsis:</dt>
        <dd class="col-sm-9">"El Principito" es una novela corta escrita por Antoine de Saint-Exupéry y publicada en
          1943. La historia comienza con un narrador que se encuentra varado en el desierto del Sahara después de que su
          avión se estrellara. Allí, conoce a un niño extraño y curioso llamado "el Principito", quien viene de un
          pequeño asteroide llamado B 612.

          A medida que el Principito y el narrador pasan tiempo juntos, el Principito comparte sus aventuras y
          encuentros con otros planetas y personajes peculiares, incluyendo a un rey vanidoso, un hombre de negocios
          obsesionado con contar estrellas y una rosa coqueta y engreída.

          A través de estas historias, el Principito explora temas importantes como la amistad, el amor, la soledad y el
          significado de la vida. Finalmente, el Principito decide regresar a su asteroide y el narrador se da cuenta de
          la importancia de las personas y las conexiones que hacemos a lo largo de nuestra vida.

          "El Principito" es un libro conmovedor y con una escritura poética que ha sido amado por generaciones y
          considerado un clásico de la literatura universal.</dd>


        <dt class="col-sm-3">Genero: </dt>
        <dd class="col-sm-9">Ficción especulativa.</dd>

        <dt class="col-sm-3">Cantidad de paginas: </dt>
        <dd class="col-sm-9">124.</dd>

        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">1943.</dd>

        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"><Link to="/autores">Antoine de Saint-Exupéry.</Link></dd>
      </dl>
    </section>

    <section class="sinopsis">
      <h3>Rebelion en la granja: </h3>
      <img class="portada" src="https://www.tematika.com/media/catalog/Ilhsa/Imagenes/693089.jpg"
        alt="portada-rebelion-en-la-granja"/>
      <dl class="row">
        <dt class="col-sm-3">Sinopsis:</dt>
        <dd class="col-sm-9">"Rebelión en la granja" es una novela de George Orwell publicada en 1945. La historia se
          centra en un grupo de animales de una granja que, cansados de las injusticias y la explotación por parte de
          los seres humanos, se rebelan y toman el control de la granja para establecer una sociedad igualitaria.

          Los animales crean una serie de mandamientos para asegurarse de que la granja permanezca libre de la opresión
          humana. Sin embargo, a medida que el tiempo avanza, algunos animales comienzan a asumir más poder que otros, y
          la granja comienza a reflejar las mismas desigualdades y corrupciones que se suponía que debían erradicar.

          La novela es una alegoría política que representa los eventos que llevaron a la Revolución Rusa de 1917 y la
          posterior dictadura de Stalin. Orwell utiliza la novela para criticar el totalitarismo y el abuso de poder,
          así como para explorar temas como la corrupción, la manipulación y la manipulación de la verdad.</dd>


        <dt class="col-sm-3">Genero: </dt>
        <dd class="col-sm-9">Sátira.</dd>

        <dt class="col-sm-3">Cantidad de paginas: </dt>
        <dd class="col-sm-9">110.</dd>

        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">1945.</dd>

        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"><Link to="/autores">George Orwell.</Link></dd>
      </dl>
    </section>

    <section class="sinopsis">
      <h3>Diez negritos: </h3>
      <img class="portada"
        src="https://images.cdn1.buscalibre.com/fit-in/360x360/a7/d8/a7d89ddf2190116895b8396f91d85993.jpg"
        alt="portada-diez-negritos"/>
      <dl class="row">
        <dt class="col-sm-3">Sinopsis:</dt>
        <dd class="col-sm-9">"Diez negritos" es una novela de misterio escrita por Agatha Christie, publicada
          originalmente en 1939 bajo el título "And Then There Were None". La trama sigue a diez extraños que son
          invitados a una isla aislada en la costa de Devon, Inglaterra, por un anfitrión misterioso que nunca aparece.
          Una vez allí, los huéspedes comienzan a ser asesinados uno por uno, de acuerdo con una canción infantil sobre
          diez negritos que cuelgan en una pared en la casa. A medida que los supervivientes tratan de descubrir al
          asesino, se dan cuenta de que no pueden confiar en nadie, y que pueden ser las próximas víctimas.

          La trama se desarrolla en un ambiente claustrofóbico y tenso, con los personajes luchando por sus vidas
          mientras intentan descubrir quién está detrás de los asesinatos. A medida que se van eliminando sospechosos,
          los supervivientes comienzan a sospechar de los demás, lo que aumenta la tensión y el suspense. El final del
          libro es sorprendente e inesperado, y se ha convertido en uno de los giros más famosos y conocidos en la
          literatura de misterio. "Diez negritos" es una de las novelas más vendidas de todos los tiempos y ha sido
          adaptada a varias películas, obras de teatro y series de televisión.</dd>


        <dt class="col-sm-3">Genero: </dt>
        <dd class="col-sm-9">Novela policíaca.</dd>

        <dt class="col-sm-3">Cantidad de paginas: </dt>
        <dd class="col-sm-9">256.</dd>

        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">1939.</dd>

        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"><Link to="/autores">Agatha Christie.</Link></dd>
      </dl>
    </section>

    <section class="sinopsis">
      <h3>Un mundo feliz: </h3>
      <img class="portada" src="https://i2.wp.com/laopinionsl.com.ar/wp-content/uploads/2022/07/Pag-35-3.jpg?ssl=1"
        alt="portada-un-mundo-feliz"/>
      <dl class="row">
        <dt class="col-sm-3">Sinopsis:</dt>
        <dd class="col-sm-9">"Un mundo feliz" es una novela de ciencia ficción escrita por Aldous Huxley y publicada en
          1932. La historia se desarrolla en un futuro distópico en el que la tecnología y la ciencia han avanzado tanto
          que la sociedad ha logrado eliminar la guerra, la pobreza y el sufrimiento, pero también ha perdido la
          libertad y la individualidad.

          El mundo descrito en la novela está organizado en castas, que determinan la posición social de cada individuo
          desde su nacimiento. Además, la reproducción humana se lleva a cabo mediante la ingeniería genética, y los
          niños son criados y condicionados para aceptar y amar su papel en la sociedad.

          La historia sigue a Bernard Marx, un miembro de la casta inteligente, que se siente insatisfecho con su vida y
          con el mundo en el que vive. En su búsqueda de significado y autenticidad, Bernard se encuentra con John, un
          hombre que ha crecido fuera de la sociedad controlada y que desafía las normas y los valores establecidos.

          A medida que la historia avanza, se revelan las sombrías realidades detrás de la aparente perfección del mundo
          feliz, incluyendo el uso de drogas para controlar a la población y el sacrificio de la libertad individual a
          cambio de la estabilidad social.

          En resumen, "Un mundo feliz" es una crítica social y política de la sociedad moderna y su obsesión por el
          progreso tecnológico a expensas de la libertad y la humanidad.</dd>


        <dt class="col-sm-3">Genero: </dt>
        <dd class="col-sm-9">Ciencia ficción.</dd>

        <dt class="col-sm-3">Cantidad de paginas: </dt>
        <dd class="col-sm-9">178.</dd>

        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">1932.</dd>

        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"><Link to="/autores">Aldous Huxley.</Link></dd>
      </dl>
    </section>

    <section class="sinopsis">
      <h3>Saga Harry Potter: </h3>
      <img class="portada" src="https://books2you.es/wp-content/uploads/2022/03/517DxWbJNZL.jpeg"
        alt="portada-harry-potter"/>
      <dl class="row">
        <dt class="col-sm-3">Sinopsis:</dt>
        <dd class="col-sm-9">"Harry Potter" es una serie de novelas escritas por la autora británica J.K. Rowling. Los
          libros siguen las aventuras de Harry Potter, un joven huérfano que descubre que es un mago y que es aceptado
          en la escuela de magia y hechicería de Hogwarts.

          A lo largo de los libros, Harry se hace amigo de Ron Weasley y Hermione Granger, y juntos enfrentan varios
          desafíos y peligros, incluyendo la amenaza del malvado mago Lord Voldemort, quien quiere conquistar el mundo
          mágico y subyugar a los magos y brujas no puros.

          Cada libro se centra en un año de la vida de Harry en Hogwarts, y a medida que avanza la serie, se va
          desarrollando una trama más compleja que involucra a diversos personajes y misterios. A través de la serie,
          los lectores descubren más sobre la historia del mundo mágico y la relación de Harry con su familia,
          especialmente con sus padres fallecidos.</dd>


        <dt class="col-sm-3">Genero: </dt>
        <dd class="col-sm-9">Ficcion, Realismo magico.</dd>

        <dt class="col-sm-3">Cantidad de libros: </dt>
        <dd class="col-sm-9">7.</dd>

        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">1997.</dd>

        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"><Link to="/autores">J. K. Rowling.</Link></dd>
      </dl>
    </section>

    <section class="sinopsis">
      <h3>El señor de los anillos: </h3>
      <img class="portada" src="https://medios.lamarmota.es/senor-de-los-anillos.jpeg"
        alt="portada-El-señor-de-los-anillos"/>
      <dl class="row">
        <dt class="col-sm-3">Sinopsis:</dt>
        <dd class="col-sm-9">La saga de libros "El Señor de los Anillos" es una obra de fantasía épica escrita por
          J.R.R. Tolkien. Se compone de tres libros: "La Comunidad del Anillo", "Las Dos Torres" y "El Retorno del Rey".
          La historia sigue a un hobbit llamado Frodo Bolsón, quien es elegido para llevar un anillo mágico al Monte del
          Destino para destruirlo y evitar que caiga en manos del malvado Sauron.

          En "La Comunidad del Anillo", Frodo se une a un grupo de compañeros que incluye a otros hobbits, un mago, un
          elfo, un enano y un hombre para formar la Comunidad del Anillo y llevar el anillo a través de la Tierra Media
          hasta su destrucción. En su viaje, enfrentan muchos peligros y enemigos, incluyendo a los terribles Nazgûl,
          los servidores más leales de Sauron.

          En "Las Dos Torres", la Comunidad del Anillo se separa después de ser atacada por un enemigo poderoso. Frodo y
          su fiel compañero Sam continúan su camino hacia el Monte del Destino, mientras que los otros miembros se unen
          a la lucha contra Sauron.

          En "El Retorno del Rey", la batalla final por el destino de la Tierra Media se desarrolla mientras Frodo y Sam
          se acercan a su objetivo final. La historia culmina en una lucha épica entre las fuerzas del bien y del mal, y
          la destrucción del Anillo.

          A lo largo de la saga, los personajes deben enfrentar muchos desafíos, superar sus miedos y demostrar su
          valentía. La historia también explora temas como la amistad, el sacrificio y la lucha contra el mal. "El Señor
          de los Anillos" es una obra maestra de la literatura fantástica y ha influido en la cultura popular en todo el
          mundo.</dd>


        <dt class="col-sm-3">Genero: </dt>
        <dd class="col-sm-9">Novela, Fantasia heroica.</dd>

        <dt class="col-sm-3">Cantidad de libros: </dt>
        <dd class="col-sm-9">3.</dd>

        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">1954.</dd>

        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"><Link to="/autores">J.R.R. Tolkien.</Link></dd>
      </dl>
    </section>

    <section class="sinopsis">
      <h3>Maze runner: </h3>
      <img class="portada" src="https://www.elsotano.com/imagenes_grandes/9786078/978607861480.JPG"
        alt="portada-maze-runner"/>
      <dl class="row">
        <dt class="col-sm-3">Sinopsis:</dt>
        <dd class="col-sm-9">La saga de libros "Maze Runner" es una serie de novelas de ciencia ficción escritas por
          James Dashner. La historia se desarrolla en un futuro post-apocalíptico y sigue a un grupo de adolescentes que
          son enviados a un laberinto mortal como parte de un experimento siniestro.

          El primer libro, "Correr o morir", comienza con Thomas, un adolescente que despierta en un ascensor en
          movimiento sin ningún recuerdo de su vida anterior, solo su propio nombre. Pronto descubre que ha sido enviado
          a un área conocida como "El Área", donde ha sido rodeado por un laberinto gigante y peligroso. Thomas se une a
          un grupo de otros jóvenes, todos los cuales han llegado al Área de la misma manera, y juntos intentan resolver
          el misterio del laberinto y encontrar una manera de escapar.

          El segundo libro, "Las pruebas", comienza justo después del final del primer libro. Thomas y sus amigos han
          escapado del laberinto, pero ahora están atrapados en un mundo desolado y peligroso. Descubren que el
          laberinto es solo una parte de un experimento más grande diseñado para encontrar una cura para una enfermedad
          conocida como la Llamarada. Para encontrar la cura, deben superar una serie de pruebas cada vez más difíciles
          y mortales.

          El tercer libro, "La cura mortal", comienza con el grupo de Thomas enfrentándose a su última prueba. Deben
          encontrar la cura para la Llamarada y liberar a los supervivientes del virus. Pero la verdad detrás de todo el
          experimento finalmente se revela, y Thomas debe enfrentar una elección imposible: salvar a sus amigos o salvar
          al mundo.

          En resumen, la saga de libros de Maze Runner es una emocionante historia de ciencia ficción sobre un grupo de
          jóvenes que luchan por sobrevivir en un mundo peligroso y descubrir la verdad detrás de su situación. La
          trilogía explora temas como la amistad, la lealtad, el sacrificio y la lucha por la libertad en una sociedad
          distópica.</dd>


        <dt class="col-sm-3">Genero: </dt>
        <dd class="col-sm-9">Drama, Ciencia ficción.</dd>

        <dt class="col-sm-3">Cantidad de libros: </dt>
        <dd class="col-sm-9">6.</dd>

        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">209.</dd>

        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"><Link to="/autores">James Dashner.</Link></dd>
      </dl>
    </section>

    <section class="sinopsis">
      <h3>Juego de tronos: </h3>
      <img class="portada" src="https://www.penguinlibros.com/ar/2384912/juego-de-tronos-cancion-de-hielo-y-fuego-1.jpg"
        alt="portada-juego-de-tronos"/>
      <dl class="row">
        <dt class="col-sm-3">Sinopsis:</dt>
        <dd class="col-sm-9">La saga de libros de "Juego de Tronos" (también conocida como "Canción de Hielo y Fuego")
          escrita por George R.R. Martin consta actualmente de 5 libros publicados, con dos más planeados.

          La historia se desarrolla en un mundo imaginario, principalmente en los siete reinos de Westeros. La trama
          principal sigue la lucha de poder entre varias casas nobles por el trono de hierro, que es el asiento del rey
          de los siete reinos.

          El primer libro, "Juego de Tronos", presenta a los personajes principales y comienza la historia con la
          misteriosa muerte del principal consejero del rey Robert Baratheon. Los personajes incluyen a los Stark de
          Winterfell, los Lannister de Casterly Rock, los Targaryen exiliados, los Baratheon, los Greyjoy y los Tyrell.

          A lo largo de la saga, las intrigas políticas y las batallas entre las casas nobles aumentan de intensidad,
          mientras que una amenaza sobrenatural, los caminantes blancos, se acerca desde el norte del muro de hielo que
          separa Westeros del territorio salvaje.

          Los personajes son complejos y se ven enfrentados a conflictos morales y emocionales, mientras que la
          traición, el amor, la lealtad, la venganza y la crueldad son temas recurrentes. La saga es conocida por la
          muerte de muchos personajes importantes e inesperados, lo que ha sorprendido a los lectores y a los
          espectadores de la serie de televisión basada en los libros.

          En resumen, la saga de libros de "Juego de Tronos" es una épica historia de fantasía que combina la lucha por
          el poder con la lucha por la supervivencia, con personajes complejos, un mundo imaginario detallado y una
          trama intrincada y emocionante.</dd>


        <dt class="col-sm-3">Genero: </dt>
        <dd class="col-sm-9">Novela, Alta fantasía.</dd>

        <dt class="col-sm-3">Cantidad de libros: </dt>
        <dd class="col-sm-9">5.</dd>

        <dt class="col-sm-3 text-truncate">Fecha de publiación: </dt>
        <dd class="col-sm-9">1996.</dd>

        <dt class="col-sm-3">Autor:</dt>
        <dd class="col-sm-8"><Link to="/autores">George R. R. Martin.</Link></dd>
      </dl>
    </section>
      </main>
        </div>
    )
}

export default Sinopsis;