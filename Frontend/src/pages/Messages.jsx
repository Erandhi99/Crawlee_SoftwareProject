import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Container } from "../styles/pageStyles/CoursesStyles";
import { Button } from "@mui/material";
import axios from "axios";

const Messages = () => {
  const [query, setQuery] = useState("Messages");
  
  const [images, setImages] = useState([]);
  const [imgToRemove, setImgToRemove] = useState(null);

  function handleRemoveImg(imgObj) {
    setImgToRemove(imgObj.public_id);
    axios
      .delete(`http://localhost:8800/images/${imgObj.public_id}/`)
      .then((res) => {
        setImgToRemove(null);
        setImages((prev) =>
          prev.filter((img) => img.public_id !== imgObj.public_id)
        );
      })
      .catch((e) => console.log(e));
  }

  function showWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "srilankan-cloudname",
        uploadPreset: "aonqrjz7",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImages((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
            
          ]);
        }
      }
    );
    widget.open();
  }

  

  return (
    <div>
      <Sidebar setQuery={setQuery} />
      console.log(setQuery);
      <Navbar query={query} />
      <Container>
        <Button type="button" onClick={showWidget}>
          Upload Images
        </Button>
        <div className="images-preview-container">
          {images.map((image) => (
            <div className="image-preview">
              <img src={image.url} alt={image.url} />
              {/* <video width="320" height="240" controls>
                <source src={image.url} type="video/mp4" />
              </video> */}
              {imgToRemove !== image.public_id && (
                <i
                  className="fa fa-times-circle"
                  onClick={() => handleRemoveImg(image)}
                ></i>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Messages;
