import react,{useEffect, useState } from "react";
import { SelectRole } from "../../styles/componentStyles/Admin/AdminStyles";
import axios from 'axios';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ChangeRole = ({ userId, initialRole, fetchUsers }) => {
  const [userRole, setUserRole] = useState(initialRole);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleChangeRole();
  }, [userRole, initialRole]);

  const handleChangeRole = () => {
    if (userRole !== initialRole) {
      confirmAlert({
        title: "Confirm Role Change",
        message: "Are you sure you want to change the user's role?",
        buttons: [
          {
            label: "Yes",
            onClick: async () => {
              try {
                setIsLoading(true); // Disable the selection dropdown
                // Send the updated role to the server
                await axios.patch(`http://localhost:8800/api/users/${userId}/changeRole`, {
                  isAdmin: userRole === "Admin",
                  isTeacher: userRole === "Teacher",
                }, {
                  withCredentials: true,
                });
                fetchUsers();

                // Handle success or update the user list accordingly
              } catch (error) {
                // Handle error
                console.log(error);
              }finally {
                setIsLoading(false); // Enable the selection dropdown
              }
            },
          },
          {
            label: "No",
            onClick: () => {
              // Reset the selected role to the initial value
              setUserRole(initialRole);
            },
          },
        ],
      });
    }
  };

  return (
    <div>
      <SelectRole>
        <select value={userRole} onChange={(e) => setUserRole(e.target.value)} disabled={isLoading} // Disable the selection dropdown when isSaving is true
        >
          <option value="">-select-</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Admin">Admin</option>
        </select>
      </SelectRole>
    </div>
  );
};

export default ChangeRole;






