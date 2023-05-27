import React from "react";

import BotonAgregarProductos from "../components/BotonAgregarProductos";
import { useState } from "react";
import { Table,Button } from "reactstrap";

const Header = () => {

   //Crear State de productos
   const [productos,setProductos] = useState([]);

   //Funcion que toma los productos actuales y agregue uno nuevo
   const agregarProducto = (producto) =>{
    setProductos([
      ...productos,
      producto
    ]);
   }

   
   const titulo = productos.length === 0 ? 'No hay Productos' : '';
    return (
        <>
        
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Inventario</a>
          <nav className="navbar bg-body-tertiary">
            <div>
              <BotonAgregarProductos agregarProducto={agregarProducto} />
              
            </div>
          </nav>
        </div>
      </nav>

      <hr />
      
    <div className="box-container">
          <div className="search-container ">
          <form>
            <input type="text" required/>
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form> 
        </div>
    </div>

<div className="card-1">
  <h3>Total de productos <i className="fa-solid fa-boxes-stacked"></i></h3>
  <p className="card-info"><i className="fas fa-2x fa-shopping-cart"></i>{productos.length}</p>
</div>

<div className="card-2 ">
  <h3>Costo total de productos <i className="fas fa-dollar-sign"></i></h3>
  <p className="card-info"><i className="fa-sharp fa-solid fa-sack-dollar"></i>$200.00</p>
</div>

     
    <div className="grilla">
      
    <Table> 
        <thead>
          <tr>
            <th data-titulo="nombre">Nombre del Producto</th>
            <th data-titulo="Precio">Precio</th>
            <th data-titulo="Cantidad">Stock</th>
            <th data-titulo="Descripcion">Descripción</th>
          </tr>

        </thead>
        <tbody>
        
          {productos.map((elemento) =>(
            
    <tr key={elemento.id}>
            <td>{elemento.nombre}</td>
            <td>{elemento.precio}</td>
            <td>{elemento.cantidad}</td>
            <td>{elemento.descripcion}</td>

            <td><Button color="primary">Editar</Button>
            <Button color="danger">Eliminar</Button></td>
    </tr>))}


        </tbody>
        
</Table>

    </div>

      </>
       
    );
}

export default Header;