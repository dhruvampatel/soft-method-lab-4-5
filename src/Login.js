import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, logError] = useState("");
  const [user, setUser] = useState()
  
  const handleSubmit = async e => {
    e.preventDefault();
    const res = validation();
    if(!res)
    {
        logError('');
        const loginData = {
                email: email,
                password: password
            }
        setUser(loginData);
        localStorage.setItem('user', JSON.stringify(loginData));
        console.log(loginData);
    } else {
        logError('LOGIN ERROR OCCURED!');
        return <span style={{color:'red'}}>LOGIN ERROR</span>
    }       
  };

  
  const validation = () =>{
    if(email == "" || password == ""){
        return [false, "LOGIN ERROR OCCURED!"];
    }
}
  return (
    <div className="container" style={{backgroundColor:'whitesmoke', display:'flex', 
    flexDirection: 'column',
    width:'50%',
    height:'50%',
    justifyContent:'center',
    alignItems:'center',
    margin:'auto',
    marginTop:'100px',
    borderRadius:'10px'
    }}>
    <form onSubmit={handleSubmit} style={{backgroundImage:`url('https://media.gettyimages.com/photos/futuristic-security-padlock-and-data-protection-picture-id1286601829?s=612x612')`,width:'613px',
        height:'330px' }}>
    <h1 style={{ 
        textAlign:'center',
        color: 'white',
    }}> Login </h1>
    <div style={{
        boxSizing:"border-box",
        alignContent:'center',
    }}>
    <table style={{marginLeft:'137px'}}>
        <tbody>
            <tr>
                <td><label style={{fontWeight:'bold', color:'white'}} htmlFor="email">Email:</label></td>
                <td><input type="text" value={email} style={{height:'20px',width:'200px'}} placeholder="Enter Email" onChange={({ target }) => setEmail(target.value)}/></td>
            </tr>
            <tr>
            <td><label style={{fontWeight:'bold', color:'white'}} htmlFor="email">Password:</label></td>
                <td><input type="password" value={password} style={{height:'20px',width:'200px'}} placeholder="Enter Email" onChange={({ target }) => setPassword(target.value)}/></td>
            </tr>
            <tr>
                <td></td>
                <td><button type="submit" style={{backgroundColor:'grey', color:'white',fontWeight:'bold', height:'30px', width:'210px'}}>Login</button></td>
            </tr>
        </tbody>
    </table> 
    
    </div> 
    </form>
    <span style={{
                marginTop: '10px',
                color: 'red',
                fontSize: '15px',
                fontWeight:'bold'
            }}>{error}</span>
    </div>
  );
};

export default Login;
