import React from 'react';
import "./App.css";

export default function DemoComponent() {

    return (
        <div className="demo-component">
            <form>
                <input placeholder = "What needs to be done?">
                    <ul>
                        <li>Item One</li>
                        <li>Item Two</li>
                        <li>Item Three</li>
                        <li>Item Four</li>
                        <li>Item Five</li>
                    </ul>
                </input>
            </form>
        </div>


    )
}
