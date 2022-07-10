import LoginForm from "../components/LoginForm"
import FeaturesCarousel from "../components/FeaturesCarousel"

const LoginPage = () => {
  return ( 
    <div className="flex-row">
      <FeaturesCarousel/>
      <LoginForm/>
    </div>
   );
}
 
export default LoginPage;