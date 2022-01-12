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
    Cv,
    Teaching,
    Research,
    Dissertation
  } from './components';

const App = () => {
    return (
        <>
        <Header/>
  
				<Routes>
		
					<Route exact path="/" element={<Home />}/>
					

					<Route path="/about" element={<About />}/>

          <Route path="/cv" element={<Cv />}/>

          <Route path="/teaching" element={<Teaching  />}/>

          <Route path="/research" element={<Research />}/>

          <Route path="/dissertation" element={<Dissertation />}/>


                 </Routes>	
				
                
                </>
    )
  }

  ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))

