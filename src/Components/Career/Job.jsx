import CardOfJob from "./cardOfJob";

const Job = (props) => {
    return (
      <>
           <section class="group">
                <h5 class="ms-4">{props.title}</h5>
                 <CardOfJob head="tes" job="tes" area="test" />
            </section>
      
      </>
    );
  };
  
  export default Job;