import React from 'react'
import './styles1.css';

const NuevoAcordeon = ({title, children, active, setActive}) => {
    return (
        <div className="accordion">
            <div onClick={() => setActive(title)} className="accordionHeading">
                <div className="container">
                    <p>{title}</p>
                    <span >
                        {active === title ? "X" : "|||"}
                    </span>
                </div>
            </div>

            <div className={(active === title ? "show" : "") + " accordionContent"}>
                <div className="container">
                        <p>
                            {children}
                        </p>
                </div>

            </div>
        </div>
    )
}

export default NuevoAcordeon
