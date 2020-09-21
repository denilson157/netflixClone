import React from 'react'
import './index.css'

export default ({ black }) =>
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/375px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            </a>
        </div>
        <div className="header--user">
            <img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png" alt="Usuário" />
        </div>
    </header>