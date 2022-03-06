const List = (props) => {
  

    return (
      <>
      {
        props.data.map((re)=>{
            return(
                <li>{re}</li>
            )
        })
      }
    
      </>
    );
  };
  
  export default List;
  