
const SectionLeft=(props) => {
    return(
        <>
          <section className="row my-5">
              <div className="col-md-6 " style={{"paddingLeft":"120px"}} >
                  <div className="aboutUs_number">{props.num}</div>
                  <h2 className="aboutUs_headline">{props.para}</h2>
                  <p className="aboutUs_text mt-3">{props.text}</p>
              </div>
              <div className="col-md-6"> <img src={props.srcImg}/></div>
          </section>
        </>
    )
 }
 export default SectionLeft;