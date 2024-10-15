import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const Notify = () => {
 
  const [dailyUpdate, setDailyUpdate] = useState(false);
  const [newEvent, setNewEvent] = useState(false);
  const [newMember, setNewMember] = useState(false);

 
  const [isToggled, setIsToggled] = useState(false);


  const handleCheckboxClick = (setter) => {
    setter(prevState => !prevState);
  };

  // Handler for toggling the switch
  const handleToggleClick = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <div className='notify'>
      <h4 style={{fontFamily:'sans-serif'}}>Notification Settings</h4>
      <p style={{color:'black'}}>Notify me when... 
        <span style={{color:'green', float:'right'}}>Allow Notification ?</span>
      </p>

      {/* Daily Productivity Update */}
      <p style={{color:'black', cursor: 'pointer'}} onClick={() => handleCheckboxClick(setDailyUpdate)}>
        <FontAwesomeIcon 
          icon={dailyUpdate ? faCheckSquare : faSquare} 
          style={{color: dailyUpdate ? 'green' : 'gray', fontSize:'30px'}} 
        /> 
        <span style={{ marginLeft:'5px'}}>Daily Productivity Update</span>
      </p>

     
      <p style={{color:'black', cursor: 'pointer'}} onClick={() => handleCheckboxClick(setNewEvent)}>
        <FontAwesomeIcon 
          icon={newEvent ? faCheckSquare : faSquare} 
          style={{color: newEvent ? 'green' : 'gray', fontSize:'30px'}} 
        /> 
        <span style={{ marginLeft:'5px'}}>New Event Created</span>
      </p>

     
      <p style={{color:'black', cursor: 'pointer'}} onClick={() => handleCheckboxClick(setNewMember)}>
        <FontAwesomeIcon 
          icon={newMember ? faCheckSquare : faSquare} 
          style={{color: newMember ? 'green' : 'gray', fontSize:'30px'}} 
        /> 
        <span style={{ marginLeft:'5px'}}>When a new team Member is added</span>
      </p>

      <div style={{marginTop:'30px'}}>
        <h4>Mobile push Notification</h4>
        <p className='big'>
          Receive push Notification whenever there is a new offer 
          <span onClick={handleToggleClick} style={{cursor: 'pointer'}}>
            <FontAwesomeIcon 
              icon={isToggled ? faToggleOn : faToggleOff} 
              style={{color: 'green', float:'right', fontSize:'30px'}} 
            />
          </span>
        </p>
         <div style={{marginTop:'10px'}}>
         <h4>Deskstop Push Notification</h4>
        <p className='big'>
          Receive push Notification whenever there is trending business around you 
          <span onClick={handleToggleClick} style={{cursor: 'pointer'}}>
            <FontAwesomeIcon 
              icon={isToggled ? faToggleOn : faToggleOff} 
              style={{color: 'green', float:'right', fontSize:'30px'}} 
            />
          </span>
        </p>
         </div>
         <div style={{marginTop:'10px'}}>
         <h4>Email Notification</h4>
        <p className='big'>
          Receive email for latest business around you
          <span onClick={handleToggleClick} style={{cursor: 'pointer'}}>
            <FontAwesomeIcon 
              icon={isToggled ? faToggleOn : faToggleOff} 
              style={{color: 'green', float:'right', fontSize:'30px'}} 
            />
          </span>
        </p>
         </div>
      </div>
    </div>
  );
};

export default Notify;
