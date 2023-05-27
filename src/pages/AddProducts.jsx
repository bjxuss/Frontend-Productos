import React, { useState } from "react";
import "../style/AddProducts.css";

import { v4 as uuidv4 } from 'uuid';


const AddProducts = ({crearProductos}) => {
  
  const [products, setProducts] = useState({
    nombre: "",
    precio: "",
    cantidad: "",
    descripcion: "",
  });
   console.log("Producto sin cambios"+ products);
  const [error, setError] = useState(false);

  const actualizarEstado = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value
    });
  }

  const {nombre, precioU, cantidad, precio,descripcion} = products;

  const submitProducto = (e) =>{
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      precio.trim() === "" ||
      cantidad.trim() === "" ||
      descripcion.trim() === ""
    ) {
      setError(true);
      return;
    }

    //Eliminar el mensaje previo
    setError(false);

    products.id = uuidv4();

    crearProductos(products);


    //Reiniciar el form
    setProducts({
      nombre: "",
      precio: "",
      cantidad: "",
      descripcion: "",
    });

  }

  

    return (
            <form onSubmit={submitProducto}>
              <div>
                <label>
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Coca-Cola"
                  className="input input-name"
                  value={nombre}
                  onChange={actualizarEstado}
                  required
                />

                <br />

                <label>Precio *</label>
                <input
                  type="text"
                  name="precio"
                  placeholder="$ 0"
                  value={precio}
                  onChange={actualizarEstado}
                  required
                />
                <br />


                <label htmlFor="cantidad">Cantidad</label>
                <input
                  type="number"
                  name="cantidad"
                  placeholder="0"
                  value={cantidad}
                  onChange={actualizarEstado}
                  required
                />
                <br />

             
                <label>Descripción</label>
                <input
                  type="text"
                  name="descripcion"
                  value={descripcion}
                  onChange={actualizarEstado}
                />

                <br />
              </div>

              <button type="submit" className="btn btn-outline-success">
                CREAR
              </button>
            </form>
    );
  };

export default AddProducts;
