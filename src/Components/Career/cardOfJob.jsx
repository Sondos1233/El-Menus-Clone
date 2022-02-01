const CardOfJob = (props) => {
  return (
    <>
      <div className="card mt-4">
        <div className="row ms-2 my-4">
          <div className="col-lg-6 col-md-12">
            <h6 className="mb-3">{props.head}</h6>
            <div className="oper">
              <mark className="me-3">{props.job}</mark>
              <span>{props.area}</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 apply">
            <a className="btn btn-primary me-4 social" style={{backgroundColor:"#ff4612",borderColor:"#ff4612"}} href="">
              View Job
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOfJob;
