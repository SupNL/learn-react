import React from 'react'

import headerImage from '../assets/analise.jpg'

function Header(){
    return(
        <header>
            <img src={headerImage} alt="Analise" />
            <p>Meme generator</p>
        </header>
    )
}

export default Header;