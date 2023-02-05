import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic4 from './pic4.avif'

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    useEffect(() => {
        localStorage.setItem('JWTAuthenticateToken', '')
    }, [])

    const handleSubmit = (e) => {
        const data = { email, password };
        localStorage.setItem('JWTAuthenticateToken', JSON.stringify(data))
        console.log(data);
        window.open('/');
    }

    return (
        <div className="Signin">
            <div className="d-flex">
                <div className="p-2 justify-content-center flex-grow-1">
                    <div className="signIn-pic">
                        <img src={pic4} alt="morning coffee" />
                    </div>
                </div>
                <div className="p-2 align-self-center flex-grow-1">
                    <div className='Signin-Heading'>
                        <h2>Sign In</h2>
                    </div>
                    <div className="SignIn-body">
                        <form onSubmit={handleSubmit}>
                            <div class="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                    <h6>OR</h6>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-primary" type="button">Log in with Google</button>
                        <button class="btn btn-primary" type="button">Log in with Facebook</button>
                        <Link class="btn btn-primary" type="button" to="/signup">Create new Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;