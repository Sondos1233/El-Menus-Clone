import React, { useEffect, useState } from "react";
import Stepper from "react-stepper-horizontal";
import { FormDetails } from "./formDetails";
import { DetailsUser } from "./Details";
import { ReviewOrder } from "./ReviewOrder";
import { Order } from "./Order";
import { firestore } from "../firebase/firebase.config";
import { collection, doc, getDocs, updateDoc,deleteDoc ,addDoc} from "firebase/firestore";
import GoogleMapReact from "google-map-react";
import { db } from './../../Firebase/Firebase'

export const FormStepper = () => {
  const userDetails = JSON.parse(localStorage.getItem("myUser"));
  const userCollectionRef = collection(firestore, "User");
  const [users, setUsers] = useState([]);
  const [SpecUser, setSpecUser] = useState({});
  const [user, setUser] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(true);
  const [showAlert, setShowalert] = useState(false);
  const [TotalPrice,setTotalPrice] = useState(0)
  const [orderList, setOrderList] = useState([]);

  
  const userid = localStorage.getItem("userID")
 
  const UserDoc = collection(db, "User",userid,"Cart");
  const sections = [
    { title: "Delivery address", onClick: () => setCurrentPage(1) },
    { title: "Review", onClick: () => setCurrentPage(2) },
  ];
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  // console.log(user);
  const UserCollection = collection(db, "User",userid,"Order");
  useEffect(() => {
    const getUsers = async () => {
      
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
    // console.log(users)
    users.map((user) => {
      if (user.id == localStorage.getItem("userID")) {
        setSpecUser(user);
      }
    });
  },[]);
  const updateUser = async (id, data) => {
    let ref = doc(firestore, "User", id);
    const newFields = { infoOrder: data };
    await updateDoc(ref, newFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    updateUser(localStorage.getItem("userID"), userDetails);
    AddOrder();
    localStorage.removeItem("myUser");
    setShowalert(!showAlert);
    deleteAllCart()
  };

  const deleteAllCart = async () => {
      
    for(let i = 0 ; i < orderList.length ; i ++) {
        let orderId = orderList[i].id
        await deleteDoc(doc(db, "User",userid,"Cart",orderId))
        console.log(userid,orderId)
    }

}
const AddOrder = async () =>{
  for(let i = 0 ; i < orderList.length ; i ++) {
   
    await addDoc(UserCollection,orderList[i])
    
}

}


    

    useEffect(() => {
        const getUser = async () => {
            const Resdata = await getDocs(UserDoc)
            // console.log(Resdata)
            setOrderList(Resdata.docs.map((doc) => ({ 
                id: doc.id, ...doc.data() 
            })))

        }
        getUser()


    }, [])
  const submit = (user) => {
    setUser(user);
  };

  const next = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prev = () => setCurrentPage((prev) => prev - 1);

  const showdetails = () => {
    localStorage.setItem("myUser", JSON.stringify(user));
    setShow(!show);
  };

  const deleteOrder = ()=>{
    localStorage.removeItem("myUser")
    setShow(!show);
  }
 const saveTotalPrice =(price)=>{
   setTotalPrice(price)
   
 }
  return (
    <>
      <div className="checkOuttoOrder">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-8 col-md-12 " style={{}}>
              <h2 className="text-center container " style={{ width: "80%" }}>
                Checkout
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="container " style={{ width: "80%" }}>
                  {" "}
                  <Stepper
                    steps={sections}
                    activeStep={currentPage}
                    activeColor="grey"
                    defaultBarColor="grey"
                    completeColor="green"
                    completeBarColor="grey"
                  />
                </div>

                {currentPage === 1 && (
                  <>
                    {show ? (
                      <div className="container" style={{ width: "80%" }}>
                        <FormDetails submit={submit} />
                        <div>
                          <button
                            class="btn btn-primary mb-5"
                            onClick={showdetails}
                            disabled={
                              !user.Name ||
                              !user.Address ||
                              !user.BuildingNo ||
                              !user.FloorNo ||
                              !user.ApartmentNo ||
                              !user.Mobile
                            }
                          >
                            Save Address
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="container" style={{ width: "80%" }}>
                        {" "}
                        <DetailsUser
                          next={next}
                          showdetails={showdetails}
                          user={user}
                          deleteOrder={deleteOrder}
                        />
                      </div>
                    )}
                  </>
                )}

                {currentPage === 2 && (
                  <>
                    <div className="container" style={{ width: "80%" }}>
                      <ReviewOrder prev={prev} user={user} saveTotalPrice={saveTotalPrice} />
                    </div>
                  </>
                )}
              </form>
            </div>
            {currentPage === 1 ? (
               <GoogleMapReact
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <p lat={59.955413} lng={30.337844} text="My Marker"></p>
            </GoogleMapReact>
            ) : (
              <div
                className="col bg-sm-white"
                style={{ "background-color": "#eff0f3" }}
              >
                {showAlert ? (
                  <div
                    class="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Thanks for your Order!</strong>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                ) : (
                 ""
                )}
                <Order handleSubmit={handleSubmit} TotalPrice={TotalPrice} />
              </div>
              
            )}
          </div>
        </div>
      </div>
    </>
  );
};
