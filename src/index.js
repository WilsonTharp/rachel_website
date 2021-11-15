import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
    Routes
} from 'react-router-dom';
import {
    Home,
    Header,
    About,
    Resume
  } from './components';

const App = () => {
    return (
        <>
        <Header/>
  
				<Routes>
		
					<Route exact path="/" element={<Home />}/>
					

					<Route path="/about" element={<About />}/>

                    <Route path="/resume" element={<Resume />}/>


                 </Routes>	
				
                
                </>
    )
  }

  ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))

