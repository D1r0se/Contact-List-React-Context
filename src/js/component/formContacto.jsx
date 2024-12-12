import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ContactoForm = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: store.selected?.name || '',
        email: store.selected?.email || '',
        address: store.selected?.address || '',
        phone: store.selected?.phone || ''
    })

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault();
        store.selected ?
            actions.UpdContact(id, formData)
            :
            actions.createContact(formData)
        navigate("/")
    }

    return (
        <>
            <form className="form-control my-3" onSubmit={handleSubmit}>
                <h3 className="mt-2">Nombre</h3>
                <input name="name" value={formData.name} onChange={handleChange} required className="form-control my-2" type="text" placeholder="name" />
                <h3>Email</h3>
                <input name='email' value={formData.email} onChange={handleChange} required className="form-control my-2" type="email" placeholder='email' />
                <h3>Edad</h3>
                <input name="address" value={formData.address} onChange={handleChange} required className="form-control my-2" type="text" placeholder='address' />
                <h3>Telefono</h3>
                <input name='phone' value={formData.phone} onChange={handleChange} required className="form-control mt-2 mb-4" type="number" placeholder='phone' />
                {store.selected ? <input className="mb-3" type="submit" value={'Editar'} /> : <input className="mb-3" type="submit" value={'Crear'} />}
            </form>
            <Link className="btn btn-outline-success mt-2 ms-2" to={'/'}>
                Volver a contactos
            </Link>
        </>
    )

}

