import rest from "../../images/3_Relax V1 (1).png"
import './style.css'

const Intro = () => {
    return (
        <div className='intro'>
            <section className='writeup'>
                <h4>Throw paper work into the trash where it belongs.</h4>
                <p>Eliminate all the hassle invoved in managing people operations by automating it.</p>
            </section>
            <img src={rest}></img>
        </div>
    )
}

export default Intro;