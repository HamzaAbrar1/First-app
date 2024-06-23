import React,{useContext} from 'react'
import UserContext from './Context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
    if(!user){
        return <h1>You are not logged in</h1>
    }
  return (
    <div>
        
      Profile page name: {user.name}
      <br />
      profile page password :{
        user.email
      }
    </div>
  )
}

export default Profile
