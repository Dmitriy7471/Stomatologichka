import './header.css';
import React from 'react';


function Header() {
    return (
        <header className="header">
            <h1 className='address'> <a href='https://yandex.ru/maps/213/moscow'>Москва, метро Водный стадион, пулковская 4</a></h1>

            <nav>
                <ul className='horizontal-list'>
                    <li> <b>Часы работы:</b> </li>
                    <li className='days'> пн-пт </li>
                    <li className='hours'>9:00 - 21:00 </li>
                    <li className='days'> сб-вс </li>
                    <li className='hours'>13:00 - 19:00 </li>
                    <li> +7 (977) 123 44-15 </li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;