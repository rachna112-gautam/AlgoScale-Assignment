import React, {useState} from 'react'

function Login() {
    const [state, setState] = useState({
        username: "",
        password: ""
          })
        
          const handleInput = (e) => {
           setState({
            ...state,
            [e.target.name] : e.target.value
           })
          }
        
          const handleSubmit = async () => {
            if(!state.username || !state.username?.trim())
            {
              alert("Enter Username")
              return;
            }
        
             if(!state.password || !state.password?.trim())
            {
              alert("Enter Password")
              return;
            }
            console.log("State" ,state)
             try{ const res = await  fetch('https://dummyjson.com/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                
                username: state.username,
                password: state.password,
                // expiresInMins: 60, // optional
              })
            })
            const result = await res.json();
            localStorage.setItem("token", result.token);
            alert("Logged in Successfully")
            console.log("Result" ,result)
            window.location.href = "/products"
        }catch (error){
              console.log("error", error)
            }
                    
          }
  return (
    <div> <div className='form'>
    <input type="text" value={state.username} name="username" onChange={(e) => handleInput(e)} placeholder='Enter Username'></input>
    <input type="password" value={state.password}  name="password" onChange={(e) => handleInput(e)} placeholder='Enter Password'></input>
    <button onClick={handleSubmit}>Submit</button>
  </div></div>
  )
}

export default Login