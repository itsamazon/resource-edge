import './style.css'
import em from '../../images/001-team.svg'
import pm from '../../images/003-goal.svg'
import pt from '../../images/006-calendar.svg'
import direct from '../../images/Group 19842.svg'
import card from '../../images/person card.svg'


const Hr = () => {
    return (
        <div className='hr'>
            <div className='hr_text'>
                <h1>Human Resources</h1>
                <p>Onboard new employees, manage the employee lifecycle and measure employee performance.</p>
            </div>
            <div className='cards'>
                <section className='hr_card'>
                    <div className='hlogo em'><img src={em} /></div>
                    <h1>Employee Management</h1>
                    <p>From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team.</p>
                </section>
                <section className='hr_card'>
                    <div className='hlogo pm'><img src={pm} /></div>
                    <h1>Performance Management</h1>
                    <p>Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews. </p>
                </section>
                <section className='hr_card'>
                    <div className='hlogo pt' ><img src={pt} /></div>
                    <h1>Paid time off</h1>
                    <p>Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance.</p>
                </section>
            </div>
            <div className='image'>
                <img id ='direct' src={direct}/>
            </div>
        </div>
    )
}

export default Hr;