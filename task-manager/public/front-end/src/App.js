import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import {React,Component} from 'react'



//how to fetch data from express api in react
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
}

callAPI() {
    fetch("http://localhost:3001/users")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

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
        {this.state.apiResponse}
      </div>
    );
  }
}

export default App;
