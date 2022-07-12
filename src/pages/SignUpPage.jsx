import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import FeaturesCarousel from "../components/FeaturesCarousel"

const SignUpPage = () => {
  return (
    <div className="flex-row">
      <FeaturesCarousel/>
      <SignUpForm/>
    </div>
  );
}
 
export default SignUpPage;