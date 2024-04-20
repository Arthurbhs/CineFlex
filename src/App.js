import React from 'react';
import './App.css';
import Header from './components/layotComponents/Hader';
import Carousel from './components/layotComponents/Slider';
import Poster from './components/funcionalComponents/Poster';
import Footer from './components/layotComponents/footer';


function App() {
  const carrosselDestaque = [
    'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/ea075b926e1073f4eb016bff8cdb434c.jpe',
     'https://picfiles.alphacoders.com/619/619653.jpeg',
     'https://wallpapers.com/images/hd/godzilla-in-burning-megacity-41ebbztlwewys2ba.webp' ];


  const carrosselAnime = [
    'https://wallpapers.com/images/hd/dbz-family-cover-hd-hbipkh6loardboa9.webp',
    'https://wallpapers.com/images/high/naruto-s-friend-1600-x-783-wallpaper-wfu65zzujweb3j16.webp',
    'https://wallpapers.com/images/high/main-characters-one-piece-pfp-d5n3fs7f6zetendd.webp' ];




  return (
    <div className='background'>
      <Header />
      <div className='destaque'>
        <h1 className='title'>Em Destaque</h1>
      <Carousel imagePaths={carrosselDestaque} />
      <div className="poster-grid">
      <Poster  imageUrl='https://wallpapers.com/images/high/pacific-rim-heroand-jaeger-uidoraw4y9rte8do.webp'  title='Circulo de fogo: Uprising' linkTo='' />
      <Poster  imageUrl='https://wallpapers.com/images/hd/one-piece-straw-hat-pirates-9037850rblb4yq70.webp'  title='One piece' linkTo='' />
      <Poster  imageUrl='https://wallpapers.com/images/high/sonic-2-hd-slzjg01583o5cvc2.webp'  title='Sonic: O filme' linkTo='' />
      <Poster  imageUrl='https://wallpapercave.com/wp/wp8118231.jpg'  title='Monster hunter: O filme' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/32/4a/3b/324a3b6cde1099764b232b43e31ec29e.jpg'  title='Ben 10: Supremacia alienigena' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/73/eb/d7/73ebd7ce6e80f271a17c861de597f275.jpg'  title='Shin Godzilla' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/a4/83/6b/a4836bba61a8ea1d20b7542cdc5c2133.jpg'  title='My hero academia' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/0e/21/00/0e2100e75abc9d62f6a9ce59618a9e18.jpg'  title='Os vingadores: Era de Ultron' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/a3/3b/80/a33b802a10ff5ab823f84388043aee4e.jpg'  title='Transformers: Era da extion' linkTo='' />
      </div>
      </div>
      <div className='anime'>
      <h1 className='title' >Animes</h1>
      <Carousel imagePaths={carrosselAnime} />
      <div className="poster-grid">
         <Poster  imageUrl='https://i.pinimg.com/236x/15/7c/a9/157ca91ca90a1f940193ad625c54de90.jpg'  title='Chainsawn Man' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/2b/62/18/2b62181575166824031522255c29c3c2.jpg'  title='solo leving' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/d2/eb/bf/d2ebbf9f80566bf5cda8c0f3ad4cdf14.jpg'  title='Pokemon' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/85/1a/94/851a9481c6772c7ecf4dc9db23307a19.jpg'  title='Kaiju no.8' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/32/4a/3b/324a3b6cde1099764b232b43e31ec29e.jpg'  title='Ben 10: Supremacia alienigena' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/ae/5c/5b/ae5c5b4b5dea222b910ef7b6e8a7b313.jpg'  title='Godzilla: Ponto singular' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/06/d3/72/06d3720c41a645a1e1a286b6b2a96711.jpg'  title='Attack on Titans' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/2f/87/77/2f87778139cc6f0d4296f0f04fcd662f.jpg'  title='Gamera: Renacer' linkTo='' />
      <Poster  imageUrl='https://i.pinimg.com/236x/8f/32/2d/8f322d11207b1a772092ef225a464b2b.jpg'  title='Cavaleiros do Zodiaco' linkTo='' />
    
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
