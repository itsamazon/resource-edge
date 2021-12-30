import './styles.css'
import talent from '../../images/Talent Manager.svg'
import employ from '../../images/Employee.svg'
import check from '../../images/check.svg'


const Dropdown = () => {
    return(
        <div className='dropdown'>
            <div className='dropdown-content'>
                <h1>OSITADINMA NWANGWU</h1>
                <p>Profile</p>
                <sm id='sm'>Use Resource Edge as </sm>
                <div className='roles'>
                    <div className='role' id='tmrole'>
                        <img src={talent}/>
                        <label for='check1'>Talent Manager</label>
                        <input type='checkbox' id='check1'/>
                        <img id='check1' src={check} />
                    </div>
                    <div className='role' id='emrole'>
                        <img src={employ}/>
                        <label for='check2'>Employee</label>
                        <input type='checkbox' id='check2'/>
                        <img id='check2' src={check} />
                    </div>
                </div>
            </div>
            <div className='logout'>
                <li><a>Logout</a></li>
            </div>
        </div>
    )
}

export default Dropdown