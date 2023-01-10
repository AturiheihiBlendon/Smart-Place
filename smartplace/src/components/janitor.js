import React from "react";
import './janitor.css'


const Janitor = ({ Username, Contact, Description, Location, Rate }) => {
    return (
            <div className="janitor">
                <div className="janitor-header">
                    <div>
                        <p className="janitor-name">{ Username }</p>
                    </div>
                </div>
                <div className="price">
                    <div className="price-t">Rate(Ugx)</div>
                    <div className="price-f">{ Rate }</div>
                </div>
                <div className="janitor-desc">
                    <p>{ Description }</p>
                </div>

                <div className="reach-out">
                    <div>
                        <p>{ Location }</p>
                    </div>
                    <div>
                        <a href="/message">{ Contact }</a>
                    </div>
                </div>
            </div>
    )
}

export default Janitor