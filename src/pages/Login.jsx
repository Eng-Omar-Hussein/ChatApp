import { useNavigate } from "react-router-dom"
import styles from "./styles/SignIn.module.css"
import { useState } from "react";

function Login({ ...props }) {
  const { usersList } = props
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checks, setChecks] = useState(false)
  const navigate = useNavigate();
  localStorage.setItem("isAuthenticated", false)

  const handleLogin = (event) => {
    event.preventDefault()
    if (usersList.filter(value => value.email === email && value.password === password ? true : "").length) {
      navigate("/chat")
      if (document.getElementById("exampleCheck1").checked) {
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        localStorage.setItem("Remember", true)
      } else {
        localStorage.removeItem("email", email)
        localStorage.removeItem("password", password)
        localStorage.setItem("Remember", false)
      }
      localStorage.setItem("isAuthenticated", true)
      setChecks(false)

    } else setChecks(true)
  }

  return (
    <>
      <form onSubmit={handleLogin} className="d-flex flex-column align-items-center pt-5 mt-5 col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3">
        <picture className="row mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="72" height="72">
            <path fill="#ffffff" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z" /></svg>
        </picture>
        <h1 className="h3 mb-3 text-center">Please sign in</h1>
        <div className="form-group col-12">
          <label htmlFor="exampleInputEmail1" className={styles.sr_only}>Email address</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className={`form-control mb-1  ${styles.input_outline}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" autoFocus required />
        </div>
        <div className="form-group col-12">
          <label htmlFor="exampleInputPassword1" className={styles.sr_only}>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className={`form-control ${styles.input_outline}`} id="exampleInputPassword1" placeholder="Password" required />
        </div>
        <div className={`${checks ? styles.error : styles.sr_only} m-3`}>
          your email or password is wrong
        </div>
        <div className="form-check m-3">
          <input type="checkbox" className={`form-check-input ${styles.input_outline}`} id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me!</label>
        </div>
        <button type="submit" className="btn btn-outline-light col-12">Submit</button>
        <small className="col-12 mt-2" onClick={() => navigate("/reg")} style={{ cursor: "pointer" }} >Sign Up?</small>
      </form>
    </>
  )
}

export default Login