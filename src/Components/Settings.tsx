import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="settings-content">
            <h2>Profile Settings</h2>
            <div className="profile-section">
              <div className="profile-picture-section">
                <div className="profile-picture">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <button className="btn-change-photo">Change Photo</button>
              </div>

              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Sakshi Jain" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="sakshi@gmail.com" />
              </div>

              <div className="form-group">
                <label>Username</label>
                <input type="text" placeholder="@sakshijain" />
              </div>

              <div className="form-group">
                <label>Bio</label>
                <textarea
                  placeholder="Tell us about yourself..."
                  rows={2}
                ></textarea>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 234 567 8900" />
              </div>

              <button className="btn-save">Save Changes</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-main">{renderContent()}</div>
    </div>
  );
};

export default Settings;
