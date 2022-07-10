import logo from '../assets/logo.png'

const LoginForm = () => {
  return ( 
    <div className="col">
      <img src={logo} alt="logo" className="logo"/>
      <form action="">
        <input type="email" placeholder="alternate_email"/>
        <input type="password" placeholder="lock"/>
        <button type="submit">Sign In</button>
        <a href="">Don't have an account? Sign Up</a>
      </form>
    </div>
   );
}
 
export default LoginForm;