import LoginForm from "../components/Login/LoginForm";
import FeaturesCarousel from "../components/Login/FeaturesCarousel"

const LoginPage = ({user, setUser}) => {
  return ( 
    <div className="flex-row">
      <FeaturesCarousel/>
      <LoginForm user={user} setUser={setUser}/>
    </div>
   );
}
 
export default LoginPage;