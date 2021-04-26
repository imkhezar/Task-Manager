import { Navbar, NavbarBrand } from 'reactstrap';
import {React,Component} from 'react'

class Header extends Component{

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
     
        
      </div>
    );
  }
}
export default Header;