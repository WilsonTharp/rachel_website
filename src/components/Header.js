import React from 'react';
import {Link} from 'react-router-dom';



const Header = () => {
	
    
	return (
        <React.Fragment>
		<header className="header">
			<Link to="/">Rachel Tharp</Link>
			<ul className="menu">
				<li><Link to="/cv" className="navItem">CV</Link></li>
				<li><Link to="/dissertation" className="navItem">Dissertation Abstract</Link></li>
				<li><Link to="/research" className="navItem">Research Statement</Link></li>
				<li><Link to="/teaching" className="navItem">Teaching Statements</Link></li>
				<li><Link to="/about" className="navItem">About</Link></li>
				
			</ul>
		</header>
        </React.Fragment>
	)
	
}


export default Header;