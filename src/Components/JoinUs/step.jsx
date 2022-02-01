const Step = (props) => {
    return (
      <>
        <div class="row ms-3 my-5 steps">
                <div class="col-2">
                  <span
                    ><h3
                      style=
                        {{backgroundColor: `${props.color}`}}
                      
                      class="text-white rounded-circle text-center pt-4"
                    >
                      {props.num}
                    </h3></span
                  >
                </div>
                <div class="col">
                    <p class="pt-3">{props.paragraph}</p>
                </div>
              </div>
      </>
    );
  };
  
  export default Step;