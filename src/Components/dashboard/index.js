import './styles.css'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    return(
        <div>
            hello dashboard
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