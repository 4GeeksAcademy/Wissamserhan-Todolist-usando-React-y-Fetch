import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [nuevoTODO, setNuevoTODO] = useState ("Tarea de ejemplo");
	const [todos, setTODOS] = useState (["Hacer todos los proyectos","Hacer todos los proyectos","Hacer todos los proyectos"]);


	const handleClick = () => {
		console.log("Nueva tarea", nuevoTODO)	
		setTODOS([...todos, nuevoTODO])
	}


	const deleteTodo  = (indice) => {
		console.log(indice)
		const listaNueva = todos.filter((todo, i) => i !== indice)
		setTODOS(listaNueva);
	}



	const handleChange = (event) => {
		console.log(event.target.value);
		setNuevoTODO(event.target.value);
	}

	return (
		<div className="text-center">
			<div>

			<h1 className="text-center mt-5">TODO List Fetch</h1>
				<div className="container">
					<div className="d-flex gap-2">
					<input type="text" className="form-control" onChange={handleChange}/>
					<button onClick={handleClick} className="btn btn-primary">Aceptar</button>
					</div>
				

				<p>Nueva tarea: {nuevoTODO}</p>

			
			<ul className="list-group">
				{todos.map((todo, indice) => {
					return(
						<li className="list-group-item d-flex justify-content-between align-items-center"> 
							{todo} <button className="btn btn-danger" onClick={() => deleteTodo(indice)}>Borrar</button>
						</li>
					)
				})}
				
			</ul>
			</div>
			</div>
		</div>
	);
};

export default Home;
