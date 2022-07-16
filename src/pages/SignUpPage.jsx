import { useState } from "react";
import SignUpForm from "../components/Login/SignUpForm";
import FeaturesCarousel from "../components/Login/FeaturesCarousel";

const SignUpPage = ({user, setUser}) => {
  return (
    <div className="flex-row">
      <FeaturesCarousel/>
      <SignUpForm user={user} setUser={setUser}/>
    </div>
  );
}
 
export default SignUpPage;