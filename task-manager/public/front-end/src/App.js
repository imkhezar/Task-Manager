import './App.css';
import {React,Component} from 'react'
//import User from './components/Practice-header'
import Header from './components/Header'



//how to fetch data from express api in react
class App extends Component {


  render() {
    //var jsonData=JSON.parse(this.state.apiResponse)
    //console.log(jsonData)
    return (
     <Header/>
    );
  }
}

export default App;
