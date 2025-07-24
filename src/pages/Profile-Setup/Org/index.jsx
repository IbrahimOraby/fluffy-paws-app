import InfoForm from "./../Org/forms/InfoForm";
import OrganizationLicenseImg from "../../../assets/images/organization-license.png";
import PersonLicenseImg from "../../../assets/images/personal-license.png";
import PetLicenseImg from "../../../assets/images/pet-license.png";
import FilledButton from "../../../ui/Buttons/FilledButton";
const OrganizationSetup = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-10 font-bold text-2xl text-center text-primary-color-500 bg-light-color">
        Welcome to your organization's Fluffy Paw profile!
      </header>
      
      <div className="flex-1  flex justify-center items-center p-4">
        <img
          src={OrganizationLicenseImg}
          alt="Organization License"
          className="w-full max-w-96 object-contain"
        />
      </div>

      <footer className="p-4 bg-light-color text-primary-color-500 text-right">
      <FilledButton className="bg-primary-color hover:bg-primary-color-500  text-white rounded-4xl">Continue</FilledButton>

      </footer>
    </div>
  );
};
export default OrganizationSetup;
