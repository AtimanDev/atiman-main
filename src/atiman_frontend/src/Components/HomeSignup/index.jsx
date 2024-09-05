import './homesignup.css';
function Signup()
{
    return (
        <section className="home__signup__section">
        <h2 className='home__signup__heading'>
        Take the First Step Today!
        <br />
        
        </h2>
        <form className='home__signup__form'>
        <label className='home__signup__form--input' htmlFor='email'>
        <input className="home__signup--input__box" placeholder ="Your email..." type ="email" id="email" name="email"></input>
        <button className='btn btn-white'> Let’s Begin </button>
        </label>
        </form>
        </section>
    )
}
export default Signup;