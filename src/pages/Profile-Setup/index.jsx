import { useNavigate } from "react-router";
import { updateUserRole } from "../../services/firestore_service";
import useUserStore from "../../store/useUserStore";

const SelectRole = () => {
  const currentUser = useUserStore((state) => state.user);
  console.log(currentUser)
  const navigate = useNavigate();
  const handleRoleSelect = async (role) => {
    await updateUserRole(currentUser.uid, role);
    navigate(`/select-role/${role}`);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Select Your Role</h1>
        <p className="text-lg mb-6">Please choose your role to continue:</p>
        <div className="flex space-x-4">
          <button
            className="btn btn-primary"
            onClick={() => handleRoleSelect("client", currentUser.uid)}
          >
            Client
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleRoleSelect("org", currentUser.uid)}
          >
            Organization
          </button>
          <button
            className="btn btn-tertiary"
            onClick={() => handleRoleSelect("personal", currentUser.uid)}
          >
            Pet Sitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
