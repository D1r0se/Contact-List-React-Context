import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = (props) => {

    const { store, actions } = useContext(Context);
    const { id, name, address, email, phone } = props.contact;

    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        actions.delContact(id);
        setShowModal(false);
    };

    return (
        <article className="card my-3">
            <div className="d-flex my-3">
                <figure>
                    <img
                        className="rounded img-fluid"
                        src="https://imgs.search.brave.com/JAHeWxUYEwHB7KV6V1IbI9oL7wxJwIQ4Sbp8dHQL09A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAx/MzkxNTc2NC9waG90/by91c2VyLWljb24t/aW4tZmxhdC1zdHls/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UEotMnZvUWZh/Q3hhZUNsdzZYYlVz/QkNaT3NTTjlIVWVC/SUg1Qk82VmRScz0"
                        alt={name}
                        width={'200px'}
                        height={'200px'}
                    />
                </figure>
                <div className="container text-center">
                    <p className="fs-4">
                        {name}
                    </p>
                    <p>
                        {address}
                    </p>
                    <p>
                        {email}
                    </p>
                    <p>
                        {phone}
                    </p>
                    <div>
                        <Link
                            className="btn btn-outline-primary me-2"
                            onClick={() => actions.selectContact(props.contact)}
                            to={'/contacto/' + id}
                        >
                            Editar
                        </Link>
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => setShowModal(true)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
                {showModal && (
                    <div className="modal fade show d-block" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Confirmar eliminación</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ¿Estás seguro de que deseas eliminar este contacto?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
