import React, { useState } from "react";

export default function CardUtente({ utente }) {
    const { id, nome, cognome, email, telefono, codiceFiscale } = utente;
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div key={id}>
            <div onClick={toggleAccordion}>
                <div className="card-body bg-secondary-subtle">
                    <h3 className="card-title text-center mt-2 mb-2 fw-bold">{nome} {cognome}</h3>


                    {isOpen && (
                        <>
                            <p>Email: {email}</p>
                            <p>Telefono: {telefono}</p>
                            <p>Codice Fiscale: {codiceFiscale}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};


