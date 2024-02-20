import React, { useContext, useState } from "react";
import "../index.css";
import notecontext from "./context/notes/notecontext";

const AddNote = (props) => {
  const context = useContext(notecontext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    tag: "",
    description: "",
  });
  // Function to upload image to Cloudinary
  const uploadFile = (file, isVideo) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "chikan");
    data.append("cloud_name", "diex70uhw");

    const uploadUrl = isVideo
      ? "https://api.cloudinary.com/v1_1/diex70uhw/video/upload"
      : "https://api.cloudinary.com/v1_1/diex70uhw/image/upload";

    return fetch(uploadUrl, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
        throw err; // Re-throw the error to handle it in the calling function
      });
  };

  const uploadFileAndSetUrl = (file) => {
    if (file) {
      const isVideo = file.type.includes("video");
      return uploadFile(file, isVideo)
        .then((data) => {
          setNote({ ...note, description: data.url });
        })
        .catch((err) => {
          console.error("Error uploading file:", err);
        });
    } else {
      console.log("No file selected");
    }
  };

  const uploadimg = (e) => {
    uploadFileAndSetUrl(e);
  };

  // function ctb64(e) {
  //   var r = new FileReader();
  //   r.readAsDataURL(e.target.files[0]);
  //   r.onload = () => {
  //     setNote({...note ,description:r.result});
  //     // e.target.value = "";
  //   };
  //   r.onerror = (error) => {
  //     console.log("Error", error);
  //   };
  // }

  const handleClick = (e) => {
    try {
      e.preventDefault();
      addNote(note.title, note.tag, note.description);
      setNote({ title: "", tag: "", description: "" });
      props.showAlert("File Added", "success");
    } catch {
      console.log("something went wrong");
    }
  };

  return (
    <>
      <div className="container my-5">
        <h1 className="heading">
          <b>
            <i className="bi bi-file-richtext mx-1"></i> Upload New Meme{" "}
            <i className="bi bi-file-richtext mx-1"></i>
          </b>
        </h1>
      </div>
      <div className="container">
        <form id="form">
          <div className="col-sm-6 mx-1">
            <label id="sr-only" htmlFor="title">
              <i className="bi bi-badge-cc mx-2"></i>Caption
            </label>
            <textarea
              className="form-control"
              id="title"
              value={note.title}
              rows="4"
              placeholder=""
              onChange={(e) => setNote({ ...note, title: e.target.value })}
              required
            ></textarea>
          </div>
          <div className="col-sm-4 mx-1 my-4">
            <label id="sr-only" htmlFor="tag">
              <i className="bi bi-tags mx-2"></i> Tags
            </label>
            <textarea
              className="form-control"
              value={note.tag}
              id="tag"
              rows="2"
              placeholder="#"
              onChange={(e) => setNote({ ...note, tag: e.target.value })}
            ></textarea>
          </div>
          <div className="form-group col-sm-4 my-4">
            <label id="descriptionLabel" htmlFor="description">
              <i className="bi bi-image mx-2"></i> File
            </label>
            <input
              className="photo my-2"
              accept="image/*,video/*"
              type="file"
              name="description"
              onChange={(e) => {
                uploadimg(e.target.files[0]);
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-1"
            onClick={handleClick}
          >
            Post <i className="bi bi-plus-circle"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
