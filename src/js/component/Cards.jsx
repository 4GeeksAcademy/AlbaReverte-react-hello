import PropTypes from "prop-types";
import React from "react";
export default function Cards({titulo, contenido}) {
    return (
        <div className="card mt-4" style={{ width: "18rem" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s" className="card-img-top" alt="..." />
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
}