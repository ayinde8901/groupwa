
import React from 'react';
import './Directionpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faWalking } from '@fortawesome/free-solid-svg-icons';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Directionpage = () => {
  return (
    <div style={{width:'100%', height:'80vh', padding:'8px'}}>
      <iframe
        width="100%"
        height="222vh"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=100vh&amp;hl=en&amp;q=45,city%20mall,onikan,Beside%20TBS%20,Lagos%20state+(Mr%20Biggs)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"   

        title="Map of City Mall, Onikan, Lagos" // Add a descriptive title
      >
        <a href="https://www.gps.ie/">gps tracker sport</a>
      </iframe>
      <div className='ride'>
        <p style={{color:'green', marginTop:'-2px', fontSize:'14px', fontWeight:'600'}}>Get directions</p>
        <div className='walk'>
         <FontAwesomeIcon icon={faCar}/>
         <FontAwesomeIcon icon={faBus}/>
         <FontAwesomeIcon icon={faWalking}/>
         <FontAwesomeIcon icon={faBicycle}/>
        </div>
        <hr style={{marginTop:'2px', color:'green', height:'1px'}}/>
        <h6 style={{fontSize:'8px', marginTop:'5px'}}>Start from <span style={{float:'right',color:'#FBBC04'}}>Swap start/end points</span></h6>
        <div style={{border:'1px solid #B6BBB5', width:'158px', height:'17px', borderRadius:'2px',  marginTop:'2px',}}>
          <FontAwesomeIcon icon={faLocationDot} style={{fontSize:'12px', marginLeft:'2px', marginBottom:'3px', color:'#FBBC04'}}/>  
        </div>
        <h1 style={{fontSize:'10px', marginTop:'2px', fontFamily:'sans-serif', color:'#FBBC04', marginLeft:'4px'}}><FontAwesomeIcon icon={faLocationDot} color='green' fontSize='11px'/> Mr Biggs</h1>
        <h2 style={{fontSize:'7px', marginTop:'3px', marginLeft:'11px', fontWeight:'400'}}>45, city mall, Onikan,Beside TBS, Lagos state</h2>
        <button className='but'>Get direction</button>
      </div>
      
    </div>
  );
};

export default Directionpage;