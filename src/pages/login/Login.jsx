import axios from 'axios'
import { useState } from 'react'
import classes from './Login.module.css'



function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const params = new URLSearchParams()
            params.append('username',email)
            params.append('password',password)
            const res = await axios.post('http://127.0.0.1:8000/login', params)
            console.log(res.data)

        }catch(err){
            console.error(err)
        }
    }

  return (
    <>
    <div className={`${classes.container}`}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Email</label>
                <input type="text" onChange={e => setEmail(e.target.value)} placeholder='Enter Email'/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} placeholder='Enter Password'/>
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
    </>
  )
}

export default Login