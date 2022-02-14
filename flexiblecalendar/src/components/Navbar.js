import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='./entryform'>Entry Form</Link></li>
                    <li><Link to='/dataform'>Data Form</Link></li>
                    <li><Link to='/allentries'>All Entries</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar