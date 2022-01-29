import './accountSetting.css'
import React, {useState} from 'react';

function AccountSetting(){

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return(
        <>
            <h1>Account Settings</h1>

            <hr />
            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>Change email</button>
            <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}>Change password</button>
            <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}>Address book</button>
            <hr />

            <div className={toggleState === 1 ? "hide  active-changEmail" : "hide"}>
                <h2>Change Email</h2>
                <label for="email">Email</label>
                <input id='email' type="email" placeholder='Enter new Email'/>
                <button>Change Email</button>
            </div>

            <div className={toggleState === 2 ? "hide  active-changPass" : "hide"}>
                <h2>Change Password</h2>
                <label for="password">Old Password</label>
                <input id='password' type="password" placeholder='Enter old password'/>

                <label for="password">New Password</label>
                <input id='password' type="password" placeholder='Enter New password'/>

                <label for="password">Confirm New Password</label>
                <input id='password' type="password" placeholder='Confirm New password'/>
                <button>Save Changes</button>
            </div>

            <div className={toggleState === 3 ? "hide  active-addressBook" : "hide"}>
                <h2>Address Details</h2>
                <label for="name">Name</label>
                <input id='name' type="text" placeholder='Enter your Name'/>

                <label for="address">Address info</label>
                <input id='address' type="text" placeholder='Enter your address'/>

                <label for="mobile">Confirm New Password</label>
                <input id='mobile' type="number" placeholder='Enter your mobile'/>
                <button>Save Address</button>
                <button>Cancel</button>
            </div>
        </>
    )
}

export default AccountSetting;