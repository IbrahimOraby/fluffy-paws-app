import { Outlet } from "react-router";
import Heading from "../../ui/Typography/Heading/Heading";
import ActionLink from "../../ui/Links/ActionLink";

const Root = () => {
  
  return (
    
    <>
    <Heading type="h1" className="text-header-md">This is from Root page</Heading>
    <div className="flex justify-evenly my-5">
      <ActionLink path={'/'} >Home</ActionLink>
      <ActionLink path={'/shelters'} >Shelters</ActionLink>
      <ActionLink path={'/shelter'} >Shelter</ActionLink>
      <ActionLink path={'/profile'} >Profile</ActionLink>
      <ActionLink path={'/signin'} >Signin</ActionLink>
      <ActionLink path={'/signup'} >Signup</ActionLink>

      <ActionLink path={'/skjdanjskahas'} className="text-error-color hover:text-red-700 font-bold" >Error</ActionLink>

      {/* <ActionLink path={'/'} >Home</ActionLink> */}

    </div>
      <Outlet />
    </>
  );
};

export default Root;
