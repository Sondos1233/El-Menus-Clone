import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = (props) => {
    return (
      <>
         <li><a href=""><FontAwesomeIcon icon={props.name}/></a></li>
      </>
    );
  };
  
  export default Social;