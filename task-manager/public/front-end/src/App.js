import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import {React,Component} from 'react'
import User from './components/header'



//how to fetch data from express api in react
class App extends Component {


  render() {
    //var jsonData=JSON.parse(this.state.apiResponse)
    //console.log(jsonData)
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Task Manager</NavbarBrand>
            
            
          </div>
        </Navbar>
        <User/>
        
      </div>
    );
  }
}

export default App;
