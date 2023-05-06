import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function HeaderBoxs(props) {
  const [icon, setIcon] = useState(<FontAwesomeIcon icon={faChevronUp} data-id={props.title}/>)
  return(
    <header>
      <h4>{props.title}</h4>
      <button className="up-btn" onClick={(e) => {
        if(e.target.classList.contains("fa-chevron-up")) {
          setIcon(<FontAwesomeIcon icon={faChevronDown} data-id={props.title}/>)
          {e.target.parentElement.parentElement.nextElementSibling.style.display ="none"}
          {e.target.parentElement.parentElement.style.marginBottom = "0px"}
        }else if(e.target.classList.contains("fa-chevron-down")){
          setIcon(<FontAwesomeIcon icon={faChevronUp} data-id={props.title}/>)
          {e.target.parentElement.parentElement.nextElementSibling.style.display ="block"}
          {e.target.parentElement.parentElement.style.marginBottom = "2rem"}
        }else {
          return;
        }
      }}>
      {icon}
      </button>
    </header>
  )
}
export default HeaderBoxs;