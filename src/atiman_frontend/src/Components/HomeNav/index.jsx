import {useEffect, useState,useRef} from 'react';
import './HomeNav.css';
import Embed from '../../Assets/Nav/embed.svg'
import Docs from '../../Assets/Nav/docs.svg'
import Plans from '../../Assets/Nav/plans.svg'
import Invest from '../../Assets/Nav/invest.svg'
import Stash from '../../Assets/Nav/stash.svg'
import Save from '../../Assets/Nav/save.svg'
import Sprout from '../../Assets/Nav/sprout.svg'
import {FaChevronDown} from 'react-icons/fa'
import {Link} from  'react-router-dom';
import logo from '../../Assets/Nav/logo.png';

function Navbar() {
    const [active, setActive] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const inner = useRef(null);
    const menu = useRef(null);
    const [dropdown,setDropdown] = useState({
        0:false,
        1:false,
        2:false
    })
    useEffect(()=>{
        function addActive(){
            if(window.scrollY >= 80 || menu.current.classList.contains('active-hamburger')) {
                setActive(true);
                return;
            }
            if(!inner.current.classList.contains('active') || !menu.current.classList.contains('active-hamburger')){
                setActive(false);
               }
        };
        document.addEventListener('scroll',addActive);
        return()=> document.removeEventListener('scroll',addActive);
    },[])
    function openDropdown(index){
         setDropdown({...dropdown,[index]:!dropdown[index],[(index+1)%3]:false,[(index+2)%3]:false});
         console.log("clicked");
      
    }
    function openMobileMenu(){
        const body = document.querySelector('body');
        setActive(true);
        if(body.classList.contains("hide-overflow")){
            body.className='';
        }
        else{
            body.className+='hide-overflow';
        }
        setOpenMenu(prevState=> !prevState)   
    }
  
  return (
    <nav className={`nav__container ${active ? 'nav__active':''}`}>
      <div className='nav__logo'>
        <img src={logo} alt="logo" width={152} height={29}/>

        
      </div>
      <div ref={inner} className={`nav__inner__container ${openMenu ? 'active':""}`}>
      <ul className='main__nav'>
        <li>
            <a onClick={()=>openDropdown(0)} style={{opacity:`${dropdown[0]?'1':"0.7"}`}}>Resource Room  <span className='main__nav__chevron'><FaChevronDown size={'10'}/> </span></a>
           {dropdown[0]&& <div className='nav__dropdown__container '>
                <div className='nav__dropdown__left'>
                    <div className="nav__dropdown__features">
                        <img src={Plans} alt="plan icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Ressy</h4>
                            <p>Your AI Companion</p>
                        </div>
                    </div>
                    <div className="nav__dropdown__features">
                        <img src={Save} alt="docs icon" />
                        <div className='nav__dropdown__features__text'>
                            <a href="" target="_blank">
                            <h4>Assessment and Tools</h4>
                            <p>Interactive assessments and self-help tools</p>
                            </a>
                        </div>
                    </div>
                    <div className="nav__dropdown__features">
                        <img src={Invest} alt="docs icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Educational Articles</h4>
                            <p>Blog-style articles on various mental health topics</p>
                        </div>
                    </div>
                    <div className="nav__dropdown__features">
                        <img src={Stash} alt="docs icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Downloadable</h4>
                            <p> PDFs, guides, and checklists for mental wellness</p>
                        </div>
                    </div>
                </div>
                <div className='nav__dropdown__right'>
                    <h4>Need personalized guidance?</h4>
                    <p>Connect with a specialist today!</p>
                 
                </div>
            </div>
}
        </li>
        <li>
            <a onClick={()=>openDropdown(1)} style={{opacity:`${dropdown[1]?'1':"0.7"}`}}>Meet the Team <span><FaChevronDown size={'10'}/> </span></a>
        {dropdown[1]&&    <div className='nav__dropdown__container '>
            <div className='nav__dropdown'>
                <div className="nav__dropdown__features mb-0">
                        <img src={Sprout} alt="sprout icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Team of Specialist</h4>
                            <p>Friends of Ressy</p>
                        </div>
                        </div>
                    </div>
            </div>
}
        </li>
        <li>
            <a onClick={()=>openDropdown(2)} style={{opacity:`${dropdown[2]?'1':"0.7"}`}}>Community <span><FaChevronDown size={'10'}/> </span></a>
        {dropdown[2]  &&    <div  className='nav__dropdown__container '>
                <div className='nav__dropdown__left'>
                    <div className="nav__dropdown__features">
                        <img src={Embed} alt="embed icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Forums</h4>
                            <p>A space for discussions, sharing experiences, and seeking peer support.</p>
                        </div>
                    </div>
                    <div className="nav__dropdown__features">
                        <img src={Docs} alt="docs icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Support Groups</h4>
                            <p>Information on virtual and in-person group sessions</p>
                        </div>
                    </div>
                </div>
                <div  className='nav__dropdown__right'>
                    <h4>Events & Workshops</h4>
                    <p>Join the upcoming events, webinars, and workshops.</p>
                </div>
            </div>
            }
        </li>
        <li>
            <a style={{opacity:`0.7`}}>Documentation</a>
        </li>
      </ul>
      <div className="nav__btn__container">
        <Link to='/login' className='primary-blue'>Connect</Link>
        <Link to='/signup' className="btn btn-shadow">Talk to Ressy</Link>
      </div>
      <div className='nav__links__container'>
        <Link to={'/signup'}>
            Sign Up
        </Link>
        <Link to={'/login'} >
            Log In
        </Link>
        <Link to={'/'}>
            About
        </Link>
        <Link to={'/'}>
            FAQ'S
            </Link>
        <Link to={'/'}>
            Ressy Your AI Companion
            </Link>
        <Link to={'/'}>
            Learn
        </Link>
      </div>
      <small>
      ATIMAN: A Community-Based Resource Center for Psychological Care</small>
      </div>
     <div className={`nav__hamburger__menu ${openMenu ? 'active-hamburger':""}`} ref={menu} onClick={openMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
     </div>
    </nav>
  );
};
export default Navbar;