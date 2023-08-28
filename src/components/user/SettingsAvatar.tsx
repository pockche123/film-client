import React, { useState } from "react";
import "./SettingsAvatar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SettingsAvatar = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };

  return (
    <div className="settings-avatar">
      <h4>Avatar</h4>

      {selectedFile == null && (
        <label htmlFor="avatarInput" className="settings-avatar-container">
          <div className="settings-avatar-icon">
            <FontAwesomeIcon icon={faUser} id="settings-avatar-user" />
          </div>
        </label>
      )}

      {selectedFile !== null && (
        <div className="settings-avatar-image">
          <img
            src={URL.createObjectURL(selectedFile)} // Convert File to data URL
            alt="file"
          />

          <div>
            <button onClick={() => setSelectedFile(null)}> Cancel </button>
          </div>
        </div>
      )}

      <div className="settings-avatar-button">
        <input
          type="file"
          accept="image/*"
          id="avatarInput"
          onChange={handleFileChange}
        />
        {/* <button className="btn btn-secondary" >Select Avatar</button> */}
      </div>
    </div>
  );
};

export default SettingsAvatar;
