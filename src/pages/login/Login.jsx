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
            alert('Invalid Email or password')
        }
    }

  return (
    <>
    <div className={`${classes.container}`}>
        <section className={`${classes.section1}`}>
            <h1>
                StudyBuddy
            </h1>
            <div>
                <p>Need a StudyBuddy Account</p>
            </div>

        </section>
        <section className={`${classes.section2}`}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Email</label><br />
                <input className={`${classes.formInput}`} type="text" onChange={e => setEmail(e.target.value)} placeholder='Enter Email'/>
            </div>
            <div>
                <label htmlFor="password">Password</label><br />
                <input className={`${classes.formInput}`} type="password" onChange={e => setPassword(e.target.value)} placeholder='Enter Password'/>
            </div>
            <section className={`${classes.section3}`}>
                <div>
                    <input type="checkbox" name="stay" id="" />
                    <label htmlFor="stay">Stay signed in</label>
                    <a href="#">Forgot Password</a>
                </div>
                <div>
                    <button className={`${classes.loginBtn}`} type='submit'>Log In</button>
                </div>
            </section>
        </form>
        </section>
    </div>
    </>
  )
}

export default Login