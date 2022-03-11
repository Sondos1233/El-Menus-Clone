import "../main-style.css";
import "../Restaurant.scss";
import "../mixins.scss";
import {useState} from 'react'
import { useHistory } from "react-router-dom";
const NavBills = ({setData}) => {
    const handleClick = (data)=>{
        setData(data)
    }
    const[id, setId] = useState('');
  return (
    <>
      <ul className="nav nav-pills mb-3 try" id="pills-tab" role="tablist">
        <li className="nav-item " role="presentation">
          <button
            className="nav-link  active aButton"
            id="Menu-tab"
            data-bs-toggle="pill"
            data-bs-target="#Menu"
            type="button"
            role="tab"
            aria-controls="Menu"
            aria-selected="true"
            onClick={()=>{setData('Menu');}}
          >
            Menu
          </button>
        </li>
        <li className="nav-item " role="presentation">
          <button
            className=" nav-link aButton "
            id="About-tab"
            data-bs-toggle="pill"
            data-bs-target="#About"
            type="button"
            role="tab"
            aria-controls="About"
            aria-selected="false"
            onClick={()=>{setData('About')}}
          >
            About
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link aButton"
            id="Branches-tab"
            data-bs-toggle="pill"
            data-bs-target="#Branches"
            type="button"
            role="tab"
            aria-controls="Branches"
            aria-selected="false"
            onClick={()=>{setData('Branches')}}
          >
            Branches
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link aButton"
            id="Reviews-tab"
            data-bs-toggle="pill"
            data-bs-target="#Reviews"
            type="button"
            role="tab"
            aria-controls="Reviews"
            aria-selected="false"
            onClick={()=>{setData('Reviews')}}
          >
            Reviews
          </button>
        </li>
      </ul>
    </>
  );
};

export default NavBills;
