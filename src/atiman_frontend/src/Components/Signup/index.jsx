import Dami from '../../Assets/Signup/doc_joyce.jpg'
import './signup.css'
import {Link} from 'react-router-dom'
function Signup(){
  return (
    <main className='signup__main'>
        <form className='signup__form'>
    <h1 className='signup__heading'>I am Ressy <br/>Can You Tell Me Your Name?</h1>
    <label htmlFor="message" className='signup__input'>
        <input type="message" name='message' id='message' className='signup__input--box' placeholder='Tell me something' />
    </label>
    <div className='signup__form__bottom'>
        <Link to={'/login'} className='sign__up__login'>Let's do your assessment? <span className='signup__blue--link'>Fill out here</span></Link>
        <button className='btn btn-shadow'>
            continue
        </button>
    </div>
        </form>
        <div className='signup__testimonal'>
            <h3 className='signup__testimonal--heading'> Meet Ressy<br/> your friendly AI Companion</h3>
            <blockquote className='signup__testimonal--quote'>Ressy is here to help you navigate your thoughts and feelings without judgment or fear.</blockquote>
            <p className='signup__testimonal__author'>Doc Joyce</p>
            <img src={Dami} className='signup__testimonal--avatar' alt="Joyce Hernani" />
        </div>
    </main>
  )
}

export default Signup