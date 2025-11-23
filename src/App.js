import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <img src={logo} className="App-logo" alt="logo" />

        <div className='content'>
          <h1>LuisterOma</h1>
          <p>
            LuisterOma is een speelse en toegankelijke app speciaal ontworpen voor ouderen die slecht kunnen horen. De app luistert naar wat je zegt en zet dat direct om in duidelijke tekst op het scherm. Ideaal voor mensen die zeer slechthorend zijn. Dankzij de eenvoudige interface en vriendelijke uitstraling is LuisterOma makkelijk in gebruik. Zelfs voor wie niet zo handig is met technologie.
          </p>
          <a href="https://apps.apple.com/nl/app/luisteroma/id6744934583?itscg=30200&itsct=apps_box_badge&mttnsubad=6744934583" style={{display: 'inline-block'}}>
            <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/nl-nl?releaseDate=1745971200" alt="Download in de App Store" style={{width: '245px', height: '82px', verticalAlign: 'middle', objectFit: 'contain'}} />
          </a>
          <form action="https://formspree.io/f/xeogyely" method="POST" className="contact-form">
            <h2 className='contact-header'>Contact opnemen?</h2>
            <p>Of je nu een vraag, suggestie of gewoon even hallo wilt zeggen, we horen graag van je. Vul het formulier hieronder in en we nemen zo snel mogelijk contact met je op.</p>
            <div className="form-group">
              <label htmlFor="email">Je e-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Je bericht:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Verstuur</button>
          </form>
          <p className='copyright'>&copy; 2025 Lars Keijzers. All rights reserved. Test</p>
        </div>
      </main>
    </div>
  );
}

export default App;
