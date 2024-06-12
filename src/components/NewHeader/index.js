import {Link} from 'react-router-dom'

import './index.css'

const NewHeader = () => (
  <nav className="nav-header">
    <div className="blog-container">
        <div className='nav-logo'>
        <img src = "https://tse1.mm.bing.net/th?id=OIP.jHNY90ojV5brUYzFj84DEAHaF7&pid=Api&P=0&h=180" className='nav-image' alt = "Stethescope" />
        <h1 className="blog-title"> MedDiagnose</h1>
        </div>
        <div>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/medicalEducation">
            MedicalEducation
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
)

export default NewHeader