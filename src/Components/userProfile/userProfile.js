
import './userProfile.css'
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Userprofile(){

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return(
        <>

        <section className="container-fluid">
            <div className="head_content">
                <div className="user_head">
                    <img src="	https://www.elmenus.com/public/img/arbitrary-user.svg" alt="User name" className="user-profile" />
                    <Link to="/accountSetting"> <button>Edit Profile</button></Link>
                </div>
                <div className="user_data">
                    <p className='p1'>Your profile</p>
                    <p className='p2'>Marwa Azzaz</p> 
                    <p className='p3'>0 Followers · 0 Followings</p>
                    <p>No bio yet</p>
                </div>
            </div>
        </section>

        <div className='clear'></div>

        <section className="container-fluid pills">
            <div className="btns">
                <button className="btn tabs" className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Reviews</button>
                <button className="btn tabs" className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Photo</button>
            </div>

            <div className="content" className={toggleState === 1 ? "content  active-content" : "content"}>
                <img src="	https://www.elmenus.com/public/img/empty-reviews.svg" alt="ratings"/>
                <p>No reviews yet</p>
            </div>

            <div className='comingSoon' className={toggleState === 2 ? "comingSoon  active-comingSoon" : "comingSoon"}>
                <p>coming soon</p>
            </div>
        </section>

        </>
    )
}

export default Userprofile;