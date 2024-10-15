import React from 'react';
import './Security.css'; // Import your CSS file

const Security = () => {
  return (
    <div className="security-container">
      <form className="formStyle">
        <label htmlFor="password" className="labelStyle">Security</label>
        <div className="input-container">
          <input type="password" id="password" className="inputStyle" placeholder="Update password" />
          <i className="fa fa-edit iconStyle"></i> {/* Font Awesome icon */}
        </div>
      </form>
    </div>
  );
};

export default Security;
