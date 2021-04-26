import React,{Component} from 'react'
import {Media} from 'reactstrap';


class User extends Component{
    
    constructor(props){
        super(props);

        this.state ={
            users:[
                
            ]
        }
        
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch("http://localhost:3001/users/")
          .then(response => response.json())
          .then(data => {
            this.setState({
              users: data
            })
          })
      }

    render(){
        const usersProfile=this.state.users.map((user)=>{

            return(
                <div key={user._id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media body className="ml-5">
                            <Media heading>
                                {user.name}
                                
                            </Media>
                            <p>{user.email}</p>

                        </Media>
                    </Media>
                </div>
            );
        })

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {usersProfile}
                    </Media>

                </div>
            </div>
        
            );
    }
    

}

export default User;