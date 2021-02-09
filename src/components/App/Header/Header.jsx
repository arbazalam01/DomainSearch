import React from 'react'
import './Header.css'

function Header({headerTitle,headerExpanded}){

    return(
        <div className="head-container">
            <img className={`head-image ${
                        headerExpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                }`} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="NameIt"/>
            <h1>{headerTitle}</h1>
        </div>
        
    );
}
export default Header;