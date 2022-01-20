const Login = () => {
    return (
        <div className="container">
            <form>
                <div className="form-control">
                    <label htmlFor="text">Username</label>
                    <input type="text" placeholder="Enter username..." required />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Password</label>
                    <input type="text" placeholder="Enter password..." required />
                </div>
                <button className="btn">Login</button>
            </form>
        </div>
    )
}

export default Login;
