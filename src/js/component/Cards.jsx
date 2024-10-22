import PropTypes from "prop-types";
import React from "react";
export default function Cards({titulo, contenido, imagen}) {
    return (
        <div className="card mt-4" style={{ width: "18rem" }}>
            <img src={imagen} className="cajon card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{titulo}</h5>
                <p className="card-text text-center">{contenido}</p>
                <div class="card-footer text-body-secondary text-center">
                     <a href="#" className="btn btn-primary">Find out more!</a>
                     <div className="p-2"></div>
                </div>
            </div>
        </div>
    )
}

Cards.propTypes = {
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
}