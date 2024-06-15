import { useEffect } from 'react';
import Header from '../Header'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './index.css'

const MedicalEducation = () => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwt_token');

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate('/register');
    }
  }, [jwtToken, navigate]);

  if (jwtToken === undefined) {
    return null;
  }
  return (
  <>
  <Header />
  <div className="medication-container">
    <h1 className='medication-heading'>HealthTube: Curated Health and Wellness Videos</h1>
    <p className='medication-paragraph'>HealthTube provides a handpicked selection of YouTube videos focused on health and wellness. 
    Discover expert advice, fitness routines, nutritional tips, mental health support, and more, all in one place. 
    Enhance your well-being with our carefully curated content designed to inform, inspire, and motivate you on your journey to a healthier lifestyle.</p>
    <div className='videos-container'>
      <div className='each-video'>
      <iframe width="853" height="480" src="https://www.youtube.com/embed/MWUM7LIXDeA" title="WHO: Medication Without Harm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video-styles'></iframe>
        <div className='content'>
          <h1 className='video-heading'>Medication Safety</h1>
          <p className='video-desc'>Everyone, including patients and health care professionals, has a role to play in ensuring medication safety. 
            This video is part of WHO's campaign to reduce medication-related harm by improving practices and reducing medication errors.</p>
        </div>
      </div>

      <div className='each-video'>
      <iframe width="853" height="480" src="https://www.youtube.com/embed/y-No0W2cZo8" title="Complexity of Pandemics N°6 – Confronting Climate-sensitive Infectious Diseases" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video-styles'></iframe>
       <div className='content'>
          <h1 className='video-heading'>Complexity of Pandemics</h1>
          <p className='video-desc'>Complexity of Pandemics is the Speaker Series of the WHO Hub for Pandemic and Epidemic Intelligence. It takes place quarterly and seeks to highlight the complex, multidisciplinary landscape of preventing, predicting, preparing for, and responding to epidemics and pandemics.
          </p>
        </div>
      </div>

      <div className='each-video'>
      <iframe width="853" height="480" src="https://www.youtube.com/embed/uOcpsXMJcJk" title="How does your body process medicine? - Céline Valéry" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video-styles'></iframe>        <div className='content'>
          <h1 className='video-heading'>How does your body process medicine?</h1>
          <p className='video-desc'>Have you ever wondered what happens to a painkiller, like ibuprofen, after you swallow it? Medicine that slides down your throat can help treat a headache, a sore back, or a throbbing sprained ankle. 
          But how does it get where it needs to go in the first place? Céline Valéry explains how your body processes medicine. </p>
        </div>
      </div>

      <div className='each-video'>
      <iframe width="853" height="480" src="https://www.youtube.com/embed/XMcab1MFaLc" title="A healthy diet, a healthier world" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video-styles'></iframe>
        <div className='content'>
          <h1 className='video-heading'>A healthy diet, a healthier world</h1>
          <p className='video-desc'>Today there is a new nutrition reality. It is a reality where undernutrition (such as micronutrient deficiencies, stunting and wasting) , overweight, obesity and diet-related noncommunicable diseases (NCDs) like diabetes and cancer now coexist in the same countries, communities, households and even individuals.</p>
        </div>
      </div>

      <div className='each-video'>
      <iframe width="853" height="480" src="https://www.youtube.com/embed/pgbMQy8glao" title="Tips for a healthier you" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video-styles'></iframe>
       <div className='content'>
          <h1 className='video-heading'>Tips for a healthier you</h1>
          <p className='video-desc'>Discover the science  behind our  behaviours, and how to achieve successful behaviour change. 
            Try our practical tips - small steps you can use to move towards a healthier lifestyle! Explore more materials on healthy living at www.eufic.org </p>
        </div>
      </div>

      <div className='each-video'>
      <iframe width="853" height="480" src="https://www.youtube.com/embed/dhpCdqOtuj0" title="Wellbeing for Children: Healthy Habits" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video-styles'></iframe>
        <div className='content'>
          <h1 className='video-heading'>Wellbeing for Children: Healthy Habits</h1>
          <p className='video-desc'>People are always telling us to be healthy–but what does that actually mean? This video follows Maya as she learns how to 
            create healthy habits involving her diet, sleep, physical activity, spending less time on her devices, and the value of finding a balance.</p>
        </div>
      </div>

      <div className='each-video'>
      <iframe width="853" height="480" src="https://www.youtube.com/embed/Nz9eAaXRzGg" title="How to protect your brain from stress | Niki Korteweg | TEDxAmsterdamWomen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video-styles'></iframe>
       <div className='content'>
          <h1 className='video-heading'>How to protect your brain from stress </h1>
          <p className='video-desc'>Chronic stress is devastating for your brain. It ruins your memory, your attention and concentration and your emotional resilience. The brain areas that help execute these functions literally deteriorate.</p>
        </div>
      </div>

      <div>
        <p className = "for-more">For more:  </p>
      <a href="https://www.youtube.com/@who" target="_blank" rel="noopener noreferrer">
        World Health Organisation
      </a>
    </div>
    </div>
     </div>
     </>
)
}

export default MedicalEducation