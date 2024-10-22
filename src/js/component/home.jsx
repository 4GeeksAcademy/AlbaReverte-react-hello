import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
			<div class = "d-flex row justify-content-center d-grid gap-5">
				<Cards titulo={"Card Title"} imagen={"https://www.edigar.com.mx/wp-content/uploads/2014/10/Sandia-500x325.jpg"} contenido={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut deserunt pariatur laborum amet quibusdam, ducimus placeat voluptas incidunt, distinctio odio cumque totam repellendus quis quia, sed laboriosam voluptate iusto aliquid?"} />
				<Cards titulo={"Card Title 1"} imagen={"https://cpimg.tistatic.com/08808308/b/4/SSP-503215-500X325-Plastic-Crate.jpg?tr=w300"}
				 contenido={"En un lugar de la Mancha2, de cuyo nombre no quiero acordarme3, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor4. Una olla de algo más vaca que carnero."}/>
				<Cards titulo={"Card Title 2"} imagen={"https://www.oftalmicadelpacifico.com/wp-content/uploads/2018/08/shutterstock_101720998-500x325.jpg"} contenido={"El resto della concluían sayo de velarte10, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo11, y los días de entresemana se honraba con su vellorí de lo más fino12. Tenía en su casa una ama que pasaba de los cuarenta."}/>
				<Cards titulo={"Card Title 3"} imagen={"https://cookingacademy.es/wp-content/uploads/2021/02/frutas-exoticas-pitahaya.jpg"} contenido={"Y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza que así ensillaba el rocín como tomaba la podadera13. Frisaba la edad de nuestro hidalgo con los cincuenta años14. Era de complexión recia, seco de carnes, enjuto de rostro."}/>
			</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>

	);
};

export default Home;
