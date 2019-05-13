import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <ul className="gnb">
                <li><NavLink exact to="/" activeClassName="on">메인</NavLink></li>
                <li><NavLink to="/training" activeClassName="on">교육일정</NavLink></li>
                <li><NavLink to="/seminar" activeClassName="on">세미나일정</NavLink></li>
            </ul>
        </>
    )
}

export default Menu;