import './index.css'
import facebook from '../../images/fb.svg'
import twitter from '../../images/twitter.svg'
import linkedin from '../../images/ln.svg'
import instagram from '../../images/in.svg'
import grey from '../../images/Footer/Logo.png'

const Footer = () => {
    return (
        <div className='footer'>
                <section className='foottext'>
                    <img src = {grey}/>
                    <p>Throw paperwork into the trash.</p>
                </section>
                <section className='socials'>
                   <a><img src ={facebook}/></a>
                   <a><img src ={twitter}/></a>
                   <a><img src ={linkedin}/></a>
                   <a><img src ={instagram}/></a>
                   <p>Copyright © Genesys DevStudio. All rights reserved</p>
                </section>
        </div>
    )
}

export default Footer