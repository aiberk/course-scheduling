import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Webpage navigation bar
 * @param {*} props 
 */
function Navigation(props) {
    function SideButton(props) {
      function handleClick(props) {
        document.querySelectorAll('.sidebar-button').forEach(button => {
          button.classList.remove('button-clicked');
        });
        document.getElementById(props.name).classList.add('button-clicked');
      }
      return (
        //TODO link causes the buttons to not highlight
        <Link to={props.link}>
          <button id={props.name} class="btn-light sidebar-button"
            onClick={() => handleClick(props)}>{props.name}
          </button>
        </Link>
      );
    }
  
    return (
      <div>
        <h3><SideButton name="Course Scheduling Platform" link="/"/> <div /></h3>
        <SideButton name="Academic Info" /> <div />
        <SideButton name="Teacher's Req" /> <div />
        <SideButton name="Manual Scheduling" link="/scheduling"/> <div />
        <SideButton name="Automatic Scheduling" /> <div />
        <SideButton name="Contact" /> <div />
        <SideButton name="Export to CSV" /> <div />
        <SideButton name="Teacher Reminder" link="/reminder" />
      </div>
    );
  }

  export default Navigation;