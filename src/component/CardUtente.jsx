import React, { useState } from "react";

export default function CardUtente({ utente }) {

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
                            </div>
                            <div>
                                <img
                                    src="image-profile.png"
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


