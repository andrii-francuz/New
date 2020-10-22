import React from 'react'
import "./css_components/Navigationonpage.css"

export const Navigationonpage = () => {
    return (
        <div>
            <nav className = "navigation">
                <div className = "main_text">
                    <h1>New</h1>
                </div>
            </nav>
            <article className = "content">
                <h1>Hello, it`s just some code.</h1>
            </article>
        </div>
    )
}

export default Navigationonpage;