import React, {Component} from 'react';
import cinepolisL from '../Imagenes/cinepolis-logo.png';
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-xl navbar-light bg-primary">		
				<button className="btn btn-default" >
					<img className="img-fluid" alt="cinepolis-logo" height="150" width="150"  href="http://localhost:3000/cinepolis-web" src={cinepolisL}/> 
				</button>
			</nav>
        );
    }
}
export default Navbar;