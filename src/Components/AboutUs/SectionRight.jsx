
const SectionRight=(props) => {
   return(
       <>
         <section className="row my-5">
             <div className="col-md-6"> <img src={props.srcImg}/></div>
             <div className="col-md-5" style={{"textAlign":"right"}}>
                 <div className="aboutUs_number">{props.num}</div>
                 <h2 className="aboutUs_headline">{props.para}</h2>
                 <p className="aboutUs_text mt-3" style={{"textAlign":"right"}}>{props.text}</p>
             </div>
         </section>
       </>
   )
}
export default SectionRight;