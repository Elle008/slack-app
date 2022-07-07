import LoginForm from "../components/LoginForm"
import FeaturesSlider from "../components/FeaturesSlider"

const LoginPage = () => {
  return ( 
    <div className="flex-row">
      <FeaturesSlider/>
      <LoginForm/>
    </div>
   );
}
 
export default LoginPage;