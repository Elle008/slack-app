import LoginForm from "../components/Login/LoginForm";
import FeaturesCarousel from "../components/Login/FeaturesCarousel"

const LoginPage = () => {
  return ( 
    <div className="flex-row">
      <FeaturesCarousel/>
      <LoginForm/>
    </div>
   );
}
 
export default LoginPage;