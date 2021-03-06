import "../Review.scss";
import {useEffect, useState} from 'react'
import Star from "../star/star";
import { firestore , storage} from "../../Firebase/firebase-config";
import {
  collection,
  getDoc,
  docs,
  query,doc,getDocs,
  collectionGroup,addDoc
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { useParams } from "react-router-dom";

const ReviewForm = ({setAddReview}) => {
  let id = useParams();
  id = id.id;
  const [ Branches, setBranches] = useState([]);
  const ReviewCollec = collection(firestore,'Restaurant',id,'Review');
  const BranchesCollecRef = collection(firestore,'Restaurant',id,'Branches')
  useEffect(()=>{
    const getBranches = async() =>{
      const data = await getDocs(BranchesCollecRef);
      setBranches(
        data.docs.map((document)=>{
          return document.data()
        })
      )
    };
    getBranches();
  },[]);
  let email = localStorage.getItem('email');
  const Submit = async (event) =>{
        event.preventDefault();
        // console.log(review);
        await addDoc(ReviewCollec,{...review})
    }
    const[review,setReview] = useState({
        branch:'',
        comment:'',
        Rating:0,
        userEmail:email
    });
    const[errors,setErrors]= useState({
        commentErrors:null,
        ratingErrors:null
    })
    function handleChange(e){
        if(e.target.name ==="rating"){
            setReview({
                ...review,
                Rating: e.target.value
            });
            setErrors({
                ...errors,
                ratingErrors:(e.target.value)?
                <small className="text-success">Ok</small>:
          <small className="text-danger">Please rate</small>
            })
        }
        else if(e.target.name === 'comment'){
            setReview({
                ...review,
                comment: e.target.value
            });
            setErrors({
                ...errors,
                commentErrors:(e.target.value.length>40)?
                <small className="text-success">Ok</small>:
        <small className="text-danger">type more than 40 characters</small>
            })
        }
        else if(e.target.name === 'Branch'){
            setReview({
                ...review,
                branch: e.target.value
            });
        }
    }
  return (
    <>
      <div className="float-end mb-3">
        <button className="btn rounded-3 btnAddReview" onClick={()=>{setAddReview(true)}}>Close</button>
      </div>
      <div style={{ clear: "both" }}></div>
      <form>
        <div className="container-fluid p-4 border mt-3 rounded-3">
          <div>
            <select
            name="Branch"
            onChange={(e)=>handleChange(e)}
              class="form-select mt-3"
              aria-label="Default select example"
            >
              <option value='Choose branch'>Choose branch</option>
              {Branches.map((i)=>{
                return <option value={i.LocName}>{i.LocName}</option>
              })}
              {/* <option selected>Branches location</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option> */}
            </select>
          </div>
          <div
            className="mt-3 rounded-3 p-3"
            style={{ backgroundColor: "#F1F2F2" }}
          >
            <h5 style={{ color: "gray" }}>YOUR RATING</h5>
            <Star setReview={setReview} review={review} />
          </div>
          <textarea
          name="comment"
            style={{ border: "1px, solid, #F1F2F2" }}
            className="mt-4 rounded-3 "
            rows="3"
            cols="100"
            placeholder="  Share your experience"
            onChange={(e)=>handleChange(e)}
            required
          />
          {errors.commentErrors}
        </div>
        <div className="float-end mt-3">
            {(review.Rating>0 && review.comment.length>40)?
          <button
            className="btn text-white"
            style={{ backgroundColor: "#e32207" }}
            onClick={(event)=>{Submit(event)}}
          >
            Share Review
          </button>
            :
             <button
             className="btn text-white disabled"
             style={{ backgroundColor: "#e32207" }}
           >
             Share Review
           </button>

            }
        </div>
      </form>
    </>
  );
};

export default ReviewForm;
//ImageURL, ImageLogo