import { useState, useEffect } from "react";
import { SelectRole } from "../../styles/componentStyles/Admin/AdminStyles";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ChangeCourseStatus = ({ courseId, initialStatus, fetchCourses }) => {
  const [courseStatus, setCourseStatus] = useState(initialStatus);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeStatus = async () => {
    if (courseStatus !== initialStatus) {
      confirmAlert({
        title: "Confirm Status Change",
        message: "Are you sure you want to change the course status?",
        buttons: [
          {
            label: "Yes",
            onClick: async () => {
              try {
                setIsLoading(true); // Disable the selection dropdown

                // Send the updated status to the server
                await axios.patch(
                  `http://localhost:8800/api/courses/${courseId}/changeStatus`,
                  { status: courseStatus=== "suspended"},
                  { withCredentials: true }
                );

                // Handle success or update the course list accordingly
                console.log("Course status changed successfully");
                fetchCourses();
              } catch (error) {
                // Handle error
                console.log(error);
              } finally {
                setIsLoading(false); // Enable the selection dropdown
              }
            },
          },
          {
            label: "No",
            onClick: () => {
              // Reset the selected status to the initial value
              setCourseStatus(initialStatus);
            },
          },
        ],
      });
    }
  };

  useEffect(() => {
    handleChangeStatus();
  }, [courseStatus]);

  return (
    <div>
      <SelectRole>
        <select
          value={courseStatus}
          onChange={(e) => setCourseStatus(e.target.value)}
          disabled={isLoading} // Disable the selection dropdown when isSaving is true
        >
          <option value="">-select-</option>
          <option value="active">Active</option>
          <option value="suspended">Suspended</option>
        </select>
      </SelectRole>
    </div>
  );
};

export default ChangeCourseStatus;
