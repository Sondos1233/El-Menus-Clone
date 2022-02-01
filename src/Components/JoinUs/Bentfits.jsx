const Benfit = (props) => {
    return (
      <>
        <div class="col-xl col-md-12">
              <span
                ><h4>
                  <img src={props.srcImg} class="me-2" />
                  {props.name}
                </h4></span>
                <span><p>{props.paragraph}</p></span>
            </div>
      </>
    );
  };
  
  export default Benfit;