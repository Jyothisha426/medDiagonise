import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
  <div className="home-container">
    <h1 className='home-heading'>MedDiagnose: Instant Symptom Diagnosis & Medication Suggestions</h1>
    <p className='home-description'>MedDiagnose is your go-to platform for quick and accurate symptom diagnosis and personalized medication suggestions.
       Simply enter your symptoms, and our advanced algorithm will swiftly analyze them, providing you with a comprehensive diagnosis of the potential disease or condition.
        MedDiagnose ensures precise recommendations tailored to your specific symptoms.</p>
  </div>
  <div className='features-container'>
    <h1 className='features-heading'>Features of MedDiagnose</h1>
      <div className='features-list'>
        <div className='each-feature'>
          <img src='https://static.vecteezy.com/system/resources/previews/001/040/150/original/different-symptoms-with-sick-boy-vector.jpg' className='features-img' alt = "Feature" />
          <p className='feature-description'>You can select your symptoms from the list provided.</p>
        </div>
        <div className='each-feature'>
          <img src='https://mirxes.com/blog/wp-content/uploads/2022/03/Physical-examination-by-a-doctor.jpg' className='features-img' alt = "Feature" />
          <p className='feature-description'>Your symptoms will be studied thorougly and the disease diagnosed will be clearly displayed.</p>
        </div>
        <div className='each-feature'>
          <img src='http://www.drugsdb.com/images/2012/02/Refill-Prescription-e1328227693956.jpg' className='features-img' alt = "Feature" />
          <p className='feature-description'>Proper medication will be suggested.</p>
        </div>
      </div>
  </div>
  <div className='copy-right-container'>
    <div className='each-option'>
      <h1 className='option-head'>MedDiagnose</h1>
      <p className='option-desc'>Home</p>
      <p className='option-desc'>Medical Education</p>
      <p className='option-desc'>Contact</p>
    </div>
    <div className='each-option'>
      <h1 className='option-head'>Features</h1>
      <p className='option-desc'>Symptoms Checker</p>
      <p className='option-desc'>Diagnosis</p>
      <p className='option-desc'>Medication suggestions</p>
    </div>
    <div className='each-option'>
      <h1 className='option-head'>For Developers</h1>
      <p className='option-desc'>Inspect the code</p>
    </div>
    <div className='each-option'>
      <h1 className='option-head'>Copyrights</h1>
      <p className='option-desc'>© All rights reserved Jyothisha B</p>
      <p className='option-desc'>gmail jyothishab445@gmail.com</p>
    </div>
    <div className='each-option'>
      <h1 className='option-head'>References</h1>
      <p className='option-desc'>Google</p>
      <p className='option-desc'>ChatGPT</p>
    </div>
  </div>
  </div>
)

export default Home