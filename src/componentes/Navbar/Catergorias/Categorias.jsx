 
import { Link } from "react-router-dom";
import React from "react";
const Categorias = React.memo(() => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Categorias</button> 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/Burger"}>Burger</Link></li>
            <li><Link className="dropdown-item" to={"/category/HotDog"}>HotDog</Link></li>
            <li><Link className="dropdown-item" to={"/category/Wrap"}>Wrap</Link></li>
            <li><Link className="dropdown-item" to={"/category/MilkShake"}>MilkShake</Link></li>
          </ul>
        </li>
    );
})

export default Categorias;