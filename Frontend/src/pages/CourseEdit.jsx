import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Container,
  FieldWrapper,
  ImageWrapper,
  StyledButton,
  StyledErrorMessage,
  StyledField,
  StyledLabel,
  SubmitButton,
} from "../styles/pageStyles/CreateCourseStyles";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router";
import MuiAlert from "@mui/material/Alert";
import { useLocation } from "react-router";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditCourse = () => {
  const [query, setQuery] = useState("Edit Course");
  const [courseCoverUrl, setCourseCoverUrl] = useState("");
  const [courseCoverPublicId, setCourseCoverPublicId] = useState("");
  const [submitButton, setSubmitButton] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState("");
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [courseNames, setCourseNames] = useState();
  const [course, setCourse] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/courses/${path}`
        );
        const data = response.data;
        console.log("courseDetails", data);
        setCourse(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  //Snackbar Functions
  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const { user, dispatch } = useContext(AuthContext);

  const initialValues = {
    courseName: course.courseName,
    description: course.description,
    courseCategory: course.courseCategory,
    instructor: "",
    instructorName: "",
    courseCover: [],
    lessons: [{ title: "", description: "", material: [] }],
  };

  const onSubmit = async (values) => {
    // console.log("Form data", values);
    try {

      const isCourseNameExist = await checkCourseNames(values.courseName);
      if (isCourseNameExist) {
        setSnackbarType("error");
        setSnackbarMsg("Course Name already exists");
        handleOpenSnackbar();
        return;
      }

      const response = await axios.put(
        "http://localhost:8800/api/courses",
        values
      );
      console.log(response.data);
      setSubmitButton(true);
      setSnackbarType("success");
      setSnackbarMsg("Created Successfully");
      handleOpenSnackbar();
      setTimeout(() => {
        navigate("/courses");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    courseName: Yup.string().required("Course Name is Required"),
    courseCategory: Yup.string().required("Course Category is Required"),
    description: Yup.string().required("Course Description is Required"),
  });

  initialValues.instructor = user._id;
  initialValues.instructorName = user.username;

  console.log(user._id);

  function showWidgetCover(setFieldValue) {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "srilankan-cloudname",
        uploadPreset: "aonqrjz7",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          const image = {
            url: result.info.url,
            public_id: result.info.public_id,
          };
          setFieldValue("courseCover", [image]);
          setCourseCoverUrl(result.info.url);
          setCourseCoverPublicId(result.info.public_id);
        }
      }
    );
    widget.open();
  }

  function handleRemoveImg(courseCoverPublicId, setFieldValue) {
    console.log(courseCoverPublicId);

    axios
      .delete(`http://localhost:8800/api/images/${courseCoverPublicId}`)
      .then((res) => {
        const image = null;
        setFieldValue("courseCover", [image]);
        setCourseCoverUrl(null);
      })
      .catch((e) => console.log(e));
  }

  const checkCourseNames = (enteredValue) => {
    axios.get("http://localhost:8800/api/courses/names/all")
    .then((res) => {
      console.log(res.data);
      setCourseNames(res.data);
    })
    .catch((e) => console.log(e));
    return courseNames.some((item) => item === enteredValue);
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <Sidebar setQuery={setQuery} />
      console.log(setQuery);
      <Navbar query={query} />
      <Container>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarType}
            sx={{ width: "100%" }}
          >
            {snackbarMsg}
          </Alert>
        </Snackbar>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "70%",
              }}
            >
              <FieldWrapper>
                <StyledLabel htmlFor="courseName">Course Name</StyledLabel>
                <StyledField type="text" id="courseName" name="courseName" />
                <StyledErrorMessage component="span" name="courseName" />
              </FieldWrapper>

              <FieldWrapper>
                <StyledLabel htmlFor="description">Description</StyledLabel>
                <StyledField type="text" id="description" name="description" />
                <StyledErrorMessage component="span" name="description" />
              </FieldWrapper>

              <FieldWrapper>
                <StyledLabel htmlFor="courseCategory">
                  Course Category
                </StyledLabel>
                <StyledField
                  type="text"
                  id="courseCategory"
                  name="courseCategory"
                />
                <StyledErrorMessage component="span" name="courseName" />
              </FieldWrapper>

              <FieldWrapper>
                <StyledLabel htmlFor="courseCover">
                  Course Cover Image
                </StyledLabel>
                {!courseCoverUrl && (
                  <StyledButton
                    type="button"
                    name="courseCover"
                    onClick={() => showWidgetCover(setFieldValue)}
                  >
                    Upload Course Cover
                  </StyledButton>
                )}
              </FieldWrapper>
              {courseCoverUrl && (
                <ImageWrapper>
                  <img src={courseCoverUrl} alt="" width="400" height="200" />
                  <CancelIcon
                    onClick={() =>
                      handleRemoveImg(courseCoverPublicId, setFieldValue)
                    }
                  />
                </ImageWrapper>
              )}
              
              <SubmitButton type="submit" disabled={submitButton}>
                Submit
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default EditCourse;