import React from 'react';
import {Link} from 'react-router-dom';



const Header = () => {
	
    
	return (
        <React.Fragment>
		<header className="header">
			<Link to="/">Rachel Tharp</Link>
			<ul className="menu">
				<li><Link to="/about" className="navItem">About</Link></li>
				<li><Link to="/resume" className="navItem">Resume</Link></li>
				
			</ul>
		</header>
        </React.Fragment>
	)
	
}


export default Header;