import { Link } from "react-router-dom";

const About = (props) => {
    return (
      <>
         <li><Link to="/JoinUs">{props.name}</Link></li>
      </>
    );
  };
  
  export default About;