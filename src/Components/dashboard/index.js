import './styles.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import menu from '../../images/menu-outline.png'
import res from '../../images/whitres.png'
import tm from '../../images/TM Dashboard.svg'
import profile from '../../images/picon.svg'
import talent from '../../images/Talent Manager.svg'
import employ from '../../images/Employee.svg'
import check from '../../images/check.svg'


const Dashboard = () => {
  
    const tmfunc = () => {
        const flexcontainer= document.getElementById('roles')
        let drp = document.getElementById("check11");
        const emtick = document.getElementById('check22')
      
          drp.style.display = "block";
          emtick.style.display = "none"
          flexcontainer.style.flexDirection='column'
    }

    const emfunc = () => {
        const flexcontainer= document.getElementById('roles')
        let drp = document.getElementById("check22");
        const tmtick = document.getElementById('check11')
      
          drp.style.display = "block";
          tmtick.style.display = "none"
          flexcontainer.style.flexDirection='column-reverse'
    }



    const checked = () => {
        // Get the checkbox
        let checkBox = document.getElementById("menucheck");
        // Get the output text
        let drp = document.getElementById("drpcnt");
      
        // If the checkbox is checked, display the output text
        if (checkBox.checked == true){
          drp.style.display = "block";
        } else {
          drp.style.display = "none";
        }
    }

    const blurred =() => {
        let drp = document.getElementById("drpcnt");
        drp.style.display="none"

    }

    return(
        <div>
            <nav>
                <div className='left-content'>
                <label for='menucheck' ><img id='menu' src={menu}/></label>
                <input type='checkbox' id='menucheck' onClick={checked}/>
                <img id='res' src={res}/>
                <img id='tm' src={tm}/>
                </div>
                <div className='right-content'>
                <img id='profile' src={profile}/>
                </div>
            </nav>

            
            <div className='dropdown' id ='drpcnt' onBlur={blurred}>
                <div className='dropdown-content' >
                    <h1>OSITADINMA NWANGWU</h1>
                    <p>Profile</p>
                    <sm id='sm'>Use Resource Edge as </sm>
                    <div className='roles' id='roles'>
                        <div className='role' id='tmrole'>
                            <img src={talent}/>
                            <label for='check1'>Talent Manager</label>
                            <input type='checkbox' id='check1' onClick={tmfunc}/>
                            <img id='check11' src={check} />
                        </div>
                        <div className='role' id='emrole'>
                            <img src={employ}/>
                            <label for='check2'>Employee</label>
                            <input type='checkbox' id='check2' onClick={emfunc}/>
                            <img id='check22' src={check} />
                        </div>
                    </div>
                </div>
                <div className='logout'>
                    <Link to='/' id='linked'>Logout</Link>
                </div>
        </div>


            <div className='dash_content'>
                    <h1>Hello, Ositadinma Nwangwu</h1>
                    <p>Welcome and good to have you back.</p>
                <section>
                    <h2>Things to do</h2>
                    <section className='todo'>
                        <div className='list'>
                            <input type='radio'/>
                            <p>Upload your employee performance agreement</p>
                            <li id='begin'><a>Begin</a></li>
                        </div>
                        <div className='list'>
                            <input type='radio'/>
                            <p>Start quarterly self review</p>
                            <li id='res'><a>Resume</a></li>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    // console.log('state',state);
    // console.log(state.userDetails)
    return{
        userDetails:state.login.userDetails,
    }
}

export default connect(mapStateToProps,null)(Dashboard);