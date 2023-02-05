import { useState } from "react"

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [mobile, setMobile] = useState("")

    const handleSubmit = (e) => {
        const data = { name, email, password, confirm, mobile };
        console.log(data);
        window.open('/');
    }

    return (
        <div className="Signup">
            <div className="Signup-Heading">
                <h2>Sign Up</h2>
            </div>
            <div className="Signup-Body">
                <form onSubmit={handleSubmit}>
                    <div class="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Firstname Lastname" value={name} onChange={(e) => setName(e.target.value)} required />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingInput" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        <label htmlFor="floatingInput">Mobile Number</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;