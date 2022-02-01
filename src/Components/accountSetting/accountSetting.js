import './accountSetting.css'
import React, {useState} from 'react';

function AccountSetting(){

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return(
        <>
        <div className='container-fluid'>
            <h1>Account Settings</h1>

            <hr />
            <div className='btns'>
                <button className={toggleState === 1 ? "tab1 active-tab1" : "tab1"}
                onClick={() => toggleTab(1)}>Change email</button>
                <button className={toggleState === 2 ? "tab2 active-tab2" : "tab2"}
                onClick={() => toggleTab(2)}>Change password</button>
                <button className={toggleState === 3 ? "tab3 active-tab3" : "tab3"}
                onClick={() => toggleTab(3)}>Address book</button>
            </div>
            <hr />

            <div className={toggleState === 1 ? "hide  active-changEmail" : "hide"}>
                <h2 className='ch'>Change Email</h2>
                <label htmlFor="email" className='d-block'>Email</label>
                <input id='email' type="email" placeholder='Enter new Email' className='d-block form-control'/>
                <button className='btn btn-danger'>Change Email</button>
            </div>

            <div className={toggleState === 2 ? "hide  active-changPass" : "hide"}>
                <h2 className='ch'>Change Password</h2>
                <label className='d-block' htmlFor="password1">Old Password</label>
                <input id='password1' type="password" placeholder='Enter old password' className='form-control'/>

                <label className='d-block' htmlFor="password2">New Password</label>
                <input id='password2' type="password" placeholder='Enter New password' className='form-control'/>

                <label className='d-block' htmlFor="password3">Confirm New Password</label>
                <input id='password3' type="password" placeholder='Confirm New password' className='form-control'/>
                <button className='d-block btn btn-danger'>Save Changes</button>
            </div>

            <div className={toggleState === 3 ? "hide  active-addressBook" : "hide"}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 address'>
                            <label htmlFor="name" className='d-block'>Name</label>
                            <input id='name' type="text" placeholder='e.g. Shady Gamal' className='form-control'/>
                            <label htmlFor="address" className='d-block'>Address info</label>
                            <input id='address' type="text" placeholder='In front of Le Carnaval Hotel ' className='form-control'/>
                            
                            <div className='row'>
                                <div className='col build'>
                                <label htmlFor="name" className='d-block'>Building no.</label>
                                <input id='name' type="number" placeholder='e.g. 4' className='form-control'/>
                                
                                </div>
                                <div className='col floor'>
                                <label htmlFor="name" className='d-block'>Floor no.</label>
                                <input id='name' type="number" placeholder='e.g. 2' className='form-control'/>
                                
                                </div>
                                <div className='col apart'>
                                <label htmlFor="name" className='d-block'>Apartment no.</label>
                                <input id='name' type="number" placeholder='e.g. 14' className='form-control'/>
                                </div>
                            </div>

                            <label htmlFor="mobile" className='d-block'>Mobile No.</label>
                            <input id='mobile' type="telephone" placeholder='e.g. 01236547896' className='form-control'/>
                            <button className='btn btn-danger'>Save Address</button>
                            <button className='btn cncle'>Cancel</button>
                        </div>
                        <div className='col-6'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AccountSetting;