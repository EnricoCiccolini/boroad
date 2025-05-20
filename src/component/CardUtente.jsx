import React, { useState } from "react";


export default function CardUtente({ utente, handleRemoveUser, handleAddUser, slug }) {

    const { id, nome, cognome, email, telefono, codiceFiscale } = utente;

    return <div>

        <div className="container mt-3">
            <div className="accordion" id={`accordionExample-${id}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`heading-${id}`}>
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${id}`}
                            aria-expanded="false"
                            aria-controls={`collapse-${id}`}
                        >
                            {nome} {cognome}
                        </button>
                    </h2>
                    <div
                        id={`collapse-${id}`}
                        className="accordion-collapse collapse"
                        data-bs-parent={`#accordionExample-${id}`}
                    >
                        <div className="accordion-body d-flex justify-content-between">
                            <div>
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Telefono:</strong> {telefono}</p>
                                <p><strong>Codice Fiscale:</strong> {codiceFiscale}</p>
                                {handleAddUser ? utente.slugViaggio.includes(slug) ? (
                                    <button className="btn btn-danger ms-3" onClick={() => handleRemoveUser(utente)}>
                                        Rimuovi
                                    </button>
                                ) : (
                                    <button className="btn btn-custom ms-3" onClick={() => handleAddUser(utente)}>
                                        Aggiungi
                                    </button>
                                ) : ""}
                            </div>
                            <div>
                                <img
                                    src="../../public/image-profile.png"
                                    alt="foto-profilo"
                                    className="foto-profilo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

};


