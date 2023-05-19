import React from 'react';
import { Link } from 'react-router-dom';
import './menu_entry.css';

/*
    Oikean yläkulman menun yksittäinen kohta
*/

function MenuEntry(props) {
  return (
    <>
        <li key={props.title} className ='entry' onClick={props.onClick}>
            <Link to={props.pathname}>
                <div className = 'entry-icon'>{props.icon}</div>
                <span className = 'entry-text'>{props.title}</span>
            </Link>
        </li>
    </>
  );
}

export default MenuEntry;

