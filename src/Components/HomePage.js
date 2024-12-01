import './HomePage.css';
import bgImg from './bg.jpg';
function HomePage() {
  return (
    <>
    <div className="HomePage">
      <img src={bgImg} alt="body" />
     
    <div className="hero-section">
       <div className="container">
         <h1 className="hero-section_title">Why should you try <span>Agni Fire Product Services</span> to level up your organisation's fire safety?</h1>
         <div className="hero-section_cards">
              <div className="hero-section_card card-1">
                  <div className="hero-section_card_content">
                       <h2 className="hero-section_card_title">Expert Guidance</h2>
                       <p className="hero-section_card_description">Benefit from industry expertise to navigate the complexities of startup growth effectively</p>
                  </div>
              </div>
              <div className="hero-section_card card-2">
                 <div className="hero-section_card_content">
                      <h2 className="hero-section_card_title">Personalized Solutions</h2>
                      <p className="hero-section_card_description">Receive individualized attention and customized solutions designed to address your unique goses in your Startup</p>
                  </div>
              </div>
        <div className="hero-section_card card-3">
          <div className="hero-section_card_content">
            <h2 className="hero-section_card_title">Vibrant Community</h2>
            <p className="hero-section_card_description">Connect with like-minded entrepreneurs, industry leaders, and potential investors to exchange ideas and explore new opportunities.</p>
          </div>
        </div>
        <div className="hero-section_card card-4">
         <div className="hero-section_card_content">
           <h2 className="hero-section_card_title">Being Always At The Top</h2>
           <p className="hero-section_card_description">Unlock the full potential of your startup with Albo's comprehensive support, personalized solutions, and vibrant community</p>
         </div>
        </div>
      </div>
    </div>
  </div>
  </div> 
  </>
  );
}

export default HomePage;
