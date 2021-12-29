import './styles.css'
import { connect } from 'react-redux';
import menu from '../../images/menu-outline.png'
import res from '../../images/res.png'
import tm from '../../images/TM Dashboard.svg'
import profile from '../../images/picon.svg'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    return(
        <div>
            <nav>
                <div className='left-content'>
                <img id='menu' src={menu}/>
                <img id='res' src={res}/>
                <img id='tm' src={tm}/>
                </div>
                <div className='right-content'>
                <img id='profile' src={profile}/>
                </div>
            </nav>
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