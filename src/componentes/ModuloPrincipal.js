import React, {Component} from 'react';
import { Button, Container } from 'react-bootstrap';
import Navbar from './Navbar.js';
import axios from 'axios';
// import Row from './Row.js';


class ModuloPrincipal extends Component {
    constructor (props) {
        super (props);
        this.state = {nombre:[]};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleprobar = this.handleprobar.bind(this);
    };

    handleprobar = () => {
        console.log("si");
    }

    handleSubmit=(e)=>{
		e.preventDefault();
		console.log(this.state);
		axios.post("http://localhost:9000/cinepolis-web",this.state)
		.then(response => { 
      const cliente = response.data;
        this.setState({nombre:cliente})
        console.log(cliente);
      })
      .catch(error => console.log(error));
	}

    render () {
        return (
            <div onSubmit={this.handleSubmit}>
                <Navbar/>
                <form id = "form" onSubmit={this.handleSubmit}>
                    <Container className="container width=100 justify-content-center">
                        <Button type = "submit"  className="btn btn-secondary btn-block"> online</Button>
                    </Container>
                </form>            
            </div>
        );
    }
}
export default ModuloPrincipal;