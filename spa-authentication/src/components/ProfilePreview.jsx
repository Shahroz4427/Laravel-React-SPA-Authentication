import { useState, useEffect } from "react";

const ProfilePreview = ({ error, image, setValue, name, id }) => {
  const [imageState, setImageState] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }

      const objectURL = URL.createObjectURL(file);

      // Set the image URL directly
      setImageState(objectURL);
      setValue("profile", file);
    } else {
      alert("No file selected.");
    }
  };

  // Cleanup object URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (imageState) {
        URL.revokeObjectURL(imageState);
      }
    };
  }, [imageState]);

  return (
    <div>
      {imageState ? (
        <img
          src={imageState}
          className="w-px-100 h-auto rounded-circle"
          alt="Profile Preview"
        />
      ) : image ? (
        <img
          src={`/storage/users/${image}`}
          className="w-px-100 h-auto rounded-circle"
          alt="Profile"
        />
      ) : (
        <img
          src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          className="w-px-100 h-auto rounded-circle"
          alt="Placeholder"
        />
      )}
      <input
        name={name}
        id={id}
        type="file"
        className="form-control mt-3"
        onChange={handleFileSelect}
      />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default ProfilePreview;
