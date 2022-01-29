import './userProfile.css'
import React from 'react';

function Userprofile(){


    return(
        <>

        <section className="container-fluid">
            <div className="head_content">
                <div className="user_head">
                    <img src="	https://www.elmenus.com/public/img/arbitrary-user.svg" alt="User name" className="user-profile" />
                    <button>Edit Profile</button>
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

        <section className="container-fluid">
            <div className="btns">
                <button className="btn btn-danger Rev">Reviews</button>
                <button className="btn photo">Photo</button>
            </div>
            <div className="reviews">
                <img src="	https://www.elmenus.com/public/img/empty-reviews.svg" alt="ratings"/>
                <p>No reviews yet</p>
            </div>
        </section>
        
        </>
    )
}

export default Userprofile;