// import { Component } from 'react'




import { Component } from 'react'
import {BiSearchAlt, BiShoppingBag} from 'react-icons/bi'
import {RiContactsLine, RiContactsBookLine} from 'react-icons/ri'
import {HiOutlineUserGroup} from 'react-icons/hi' 
import {AiOutlineFieldTime} from 'react-icons/ai'
import {BsInfoCircle, BsHouseDoor} from 'react-icons/bs'
import {TbSettingsOff, TbMessages} from 'react-icons/tb'
import {IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from 'react-icons/io'
import './index.css'

class Home extends Component{
    state = {
        menu: 'False',
        round: 'True'
    }

    arrow = () => {
        this.setState(prev => ({menu: !prev.menu}))
    }

    round = () => {
        this.setState(prev => ({round: !prev.round}))
    }

    render(){
        const {menu,round} = this.state
        let width = menu ? "nav1" : 'nav'
        return(
            <div className="main-container">
                {menu ? '': (
                    <div className="menu-container">
                        <img className='logo' src="https://res.cloudinary.com/dwhmqaqhj/image/upload/v1669220104/orangeHRM_snmedk.png" alt="logo"/>
                        <div className="menu-option">
                            <BiSearchAlt className='icon'/>
                            <h1 className="option">Search</h1>
                        </div>
                        <div className="menu-option">
                            <RiContactsLine className="icon"/>
                            <h1 className="option">Admin</h1>
                        </div>
                        <div className="menu-option">
                            <HiOutlineUserGroup className='icon'/>
                            <h1 className="option">PIM</h1>
                        </div>
                        <div className="menu-option">
                            <BiShoppingBag className='icon'/>
                            <h1 className="option">Leave</h1>
                        </div>
                        <div className="menu-option">
                            <AiOutlineFieldTime className='icon'/>
                            <h1 className="option">Time</h1>
                        </div>
                        <div className="menu-option">
                            <BsInfoCircle className="icon"/>
                            <h1 className="option">My Info</h1>
                        </div>
                        <div className="menu-option">
                            <BsHouseDoor className='icon'/>
                            <h1 className="option">Dashboard</h1>
                        </div>
                        <div className="menu-option">
                            <RiContactsBookLine className="icon"/>
                            <h1 className="option">Directory</h1>
                        </div>
                        <div className="menu-option">
                            <TbSettingsOff className="icon"/>
                            <h1 className="option">Maintanance</h1>
                        </div>
                        <div className="menu-option">
                            <TbMessages className="icon"/>
                            <h1 className="option">Buzz</h1>
                        </div>
                    </div>
                ) }
                <div className="profile-container">
                    <div className={width}>
                        <h1 className='nav-name'>PIM</h1>
                        <div className='user'>
                            <img className='user-img' src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1669220050/userPic_rszk6k.webp' alt=''/>
                            <select className='select-user-name'>
                                <option>Shubham Shirse</option>
                            </select>
                        </div>
                    </div>
                    <div className="sec-nav">
                        <div onClick={this.arrow}>
                            {menu ?
                                <IoIosArrowDroprightCircle className='arrow'/>:
                                <IoIosArrowDropleftCircle className='arrow'/>
                            }
                        </div>
                        <select className='select'>
                            <option>Configuration</option>
                            <option>name</option>
                            <option>name</option>
                            <option>name</option>
                        </select>
                        <select className='select'>
                            <option>Employee List</option>
                            <option>name</option>
                            <option>name</option>
                            <option>name</option>
                        </select>
                        <select className='select'>
                            <option>Add Employee</option>
                            <option>name</option>
                            <option>name</option>
                            <option>name</option>
                        </select>
                        <select className='select'>
                            <option>Report</option>
                            <option>name</option>
                            <option>name</option>
                            <option>name</option>
                        </select>
                    </div>
                    <div className="content">
                        <div className='profile-content'>
                            <div className='profile'>
                                <h1 className='user-name'>Chahal Vadalmiya</h1>
                                <img className='profile-pic' src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1669220050/userPic_rszk6k.webp' alt='profile-pic'/>
                                <ul className='profile-list'>
                                    <li className='profile-li'>Personal Details</li>
                                    <li className='profile-li'>Contact Details</li>
                                    <li className='profile-li'>Emergency Contacts</li>
                                    <li className='profile-li'>Dependents</li>
                                    <li className='profile-li'>Immigration</li>
                                    <li className='profile-li'>Job</li>
                                    <li className='profile-li'>Salary</li>
                                    <li className='profile-li'>Report-to</li>
                                    <li className='profile-li'>Qualification</li>
                                    <li className='profile-li'>Manufacture</li>
                                </ul>
                            </div>
                            <div className='details'>
                                <h1 className='job-details'>Job Details</h1>
                                <hr/>
                                <div className='job-one'>
                                    <div className='one'>
                                        <h1 className='job'>Joined Date</h1>
                                        <input type="date"/>
                                    </div>
                                    <div className='one'>
                                        <h1 className='job'>Job Title</h1>
                                        <select className=''>
                                            <option>--select--</option>
                                            <option>name</option>
                                            <option>name</option>
                                            <option>name</option>
                                        </select>
                                    </div>
                                    <div className='one'>
                                        <h1 className='job'>Job Specification</h1>
                                        <input type="text" placeholder='Not Defined'/>
                                    </div>
                                </div>
                                <div className='job-one'>
                                <div className='one'>
                                        <h1 className='job'>Job Category</h1>
                                        <select className=''>
                                            <option>--select--</option>
                                            <option>name</option>
                                            <option>name</option>
                                            <option>name</option>
                                        </select>
                                    </div>
                                    <div className='one'>
                                        <h1 className='job'>Sub Unit</h1>
                                        <select className=''>
                                            <option>--select--</option>
                                            <option>name</option>
                                            <option>name</option>
                                            <option>name</option>
                                        </select>
                                    </div>
                                    <div className='one'>
                                        <h1 className='job'>Location</h1>
                                        <select className=''>
                                            <option>--select--</option>
                                            <option>name</option>
                                            <option>name</option>
                                            <option>name</option>
                                        </select>
                                    </div>
                                </div>
                                    <div className='one'>
                                        <h1 className='job'>Employment Status</h1>
                                        <select className=''>
                                            <option>--select--</option>
                                            <option>name</option>
                                            <option>name</option>
                                            <option>name</option>
                                        </select>
                                    </div>
                                <hr/>
                                <div className='toggle-container'>
                                    <p>Include Employement Contract Details</p>
                                    <div onClick={this.round} className='button'>
                                        {round ? 
                                        <div className='toggle-botton'>
                                            <div className='round'></div>
                                        </div>:
                                        <div className='round-right'>
                                            <div className='round'></div>
                                        </div>
                                        }
                                    </div>

                                </div>
                                <hr/>
                                <div className='save-container'>
                                    <p className='save'>Save</p>
                                </div>
                                <hr/>
                                <div className='toggle-container'>
                                    <p>Employee Termination/Activiation</p>
                                    {/* <div> */}
                                        <p className='terminate'>Terminate Employement</p>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home