import React,{Component} from 'react'
import {Media} from 'reactstrap';


class User extends Component{
    
    constructor(props){
        super(props);

        this.state ={
            users:[
                /* 1 */
{
    "_id" : 0,
    "age" : 0,
    "name" : "Muhammad Khezar",
    "email" : "salman@gmail.com",
    "password" : "$2a$08$OGm7DUzj9xZaMiwtREmfpuytnPsKvIanuhRlm/Q9CSbUGbDNLXDdO",
    "__v" : 0
},

/* 2 */
{
    "_id" : 1,
    "age" : 0,
    "name" : "Salman Khan",
    "email" : "salman123@gmail.com",
    "password" : "$2a$08$XxADA7PeqJ0D.DkhQJwKLOlQVKjCCtziIk5oUtcIa9QlRMM73aRMy",
    "__v" : 2,
    "tokens" : [ 
        
    ]
},

/* 3 */
{
    "_id" : 2,
    "age" : 0,
    "name" : "gulkhan",
    "email" : "gulkhan@gmail.com",
    "password" : "$2a$08$eQ2Kpl2L9owj9Ol39RNnrOxQpC4p8d8s6Sd.1q5JbLs6kV7dZ8ja2",
    "token" : [],
    "__v" : 0
},

/* 4 */
{
    "_id" : 3,
    "age" : 0,
    "name" : "gulkhan2",
    "email" : "gulkhan2@gmail.com",
    "password" : "$2a$08$utScD0Dhk4IruxnT5v3ooe2XkEaqQjbUXHMu07K5b3V.fjJ9wFx8W",
    "token" : [],
    "__v" : 0
},

/* 5 */
{
    "_id" : 4,
    "age" : 0,
    "name" : "gulkhan3",
    "email" : "gulkhan3@gmail.com",
    "password" : "$2a$08$81Ga5t6IUmOSUz.sUpc8GeY7jixPbxw4HyphEPDmRgBkSIWF2MHRK",
    "tokens" : [ 
        
    ],
    "__v" : 1
},

/* 6 */
{
    "_id" : 5,
    "age" : 0,
    "name" : "gulkhan4",
    "email" : "gulkhan4@gmail.com",
    "password" : "$2a$08$Z/LNcBis93xDOT2rd/w2QO09RHWV8YbjxM2px5gKE4Cj7N.5EBxT6",
    "tokens" : [ 
        
    ],
    "__v" : 1
}
,
/* 7 */
{
    "_id" : 6,
    "age" : 0,
    "name" : "gulkhan5",
    "email" : "gulkhan5@gmail.com",
    "password" : "$2a$08$MUIhd4ClzUC70sBSFeJbvek5.wvuxXtYXAPDsDpDAn8gJuT2er.0q",
    "tokens" : [ 
       
    ],
    "__v" : 1
},
            ]
        }
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