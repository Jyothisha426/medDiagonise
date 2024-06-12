import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { FaHome } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";
import { MdAddIcCall } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <nav className="nav-header">
      <div className="blog-container">
        <div className="nav-content-lg">
          <div className='nav-logo'>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jHNY90ojV5brUYzFj84DEAHaF7&pid=Api&P=0&h=180"
              className='nav-image'
              alt="Stethoscope"
            />
            <h1 className="blog-title">MedDiagnose</h1>
          </div>
          <ul className="nav-menu">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/medicalEducation">
                Medical Education
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/newHome">
                CheckUp
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="logout-desktop-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-content-sm">
          <div className="logo-logout-container">
            <div className='nav-logo'>
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.jHNY90ojV5brUYzFj84DEAHaF7&pid=Api&P=0&h=180"
                className='nav-image'
                alt="Stethoscope"
              />
              <h1 className="blog-title">MedDiagnose</h1>
            </div>
            <button
              type="button"
              className="logout-mobile-btn"
              onClick={onClickLogout}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="nav logout"
                className="logout-icon"
              />
            </button>
          </div>
          <hr className='line' />
          <ul className="nav-items-container">
            <Link to="/" className="nav-link">
              <li>
              <FaHome className='icon' />
              </li>
            </Link>
            <Link to="/medicalEducation" className="nav-link">
              <li>
              <RiHealthBookFill className='icon' />
              </li>
            </Link>
            <Link to="/contact" className="nav-link">
              <li>
              <MdAddIcCall className='icon' />
              </li>
            </Link>
            <Link to="/newHome" className="nav-link">
              <li>
              <GiMedicines className='icon' />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <hr className='line' />
    </nav>
  )
}

export default Header
