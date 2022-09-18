
import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
import { CreateAdBanner } from './components/CreateAdBanner';
import { GamerBanner } from './components/GamerBanner';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GamerBanner bannerUrl='/game-1.png' title='League of Legends' adsCount={4} />
        <GamerBanner bannerUrl='/game-2.png' title='Dota 2' adsCount={4} />
        <GamerBanner bannerUrl='/game-3.png' title='Counter Strike' adsCount={4} />
        <GamerBanner bannerUrl='/game-4.png' title='Apex Legends' adsCount={4} />
        <GamerBanner bannerUrl='/game-5.png' title='Fortnite' adsCount={4} />
        <GamerBanner bannerUrl='/game-6.png' title='World of Warcraft' adsCount={4} />
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App
