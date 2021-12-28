import travel from '../../images/047-sent 1.svg'
import asset from '../../images/009-briefcase.svg'
import adl from '../../images/adminL.svg'
import './styles.css'
import tasklist from '../../images/task.svg'
import enve from '../../images/pay2.svg'
import payroll from '../../images/pay.svg'
import unn from '../../images/image 7.svg'
import tenne from '../../images/image 6.svg'
import priv from '../../images/image 9.svg'
import gene from '../../images/image 10.svg'


const AdminL = () => {
    return (
        <div className='admin'>
            <div className='addtext'>
                <section className='addL'>
                    <h1>Admin & Logistics</h1>
                    <p>Manage and track company assets as well as logistics for travelling employees</p>
                </section>
                <section className='travel'>
                    <div id='trvl'><img src={travel}/></div>
                    <h1>Travel & Logistics</h1>
                    <p>Make travel requests, get approvals, and have access to travel information.
                    </p>
                </section>
                <section className='assets'>
                    <div id='assts'><img src={asset}/></div>
                    <h1>Asset Management</h1>
                    <p>Manage the acquisition, assignment, and disposition of assets seamlessly.</p>
                </section>
            </div>
            <img id='addy' src={adl} />

            <div className='addtext second'>
                <section className='addL'>
                    <h1>Finance</h1>
                    <p>Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies</p>
                </section>
                <section className='travel'>
                    <div><img src={tasklist}/></div>
                    <h1>RE Vouchers</h1>
                    <p>Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers
                    </p>
                </section>
                <section className='assets'>
                    <div><img src={enve}/></div>
                    <h1>Payroll</h1>
                    <p>Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes.</p>
                </section>
            </div>
            <img id ='addy' src ={payroll}/>
            <div className='sponsors'>
                <img src={unn} />
                <img src={tenne} />
                <img src={priv} />
                <img src={gene} />
            </div>
        </div>
    )
}

export default AdminL;