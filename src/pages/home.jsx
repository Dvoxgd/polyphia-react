import Carousel from "../components/Carousel"
import LogoScroll from "../components/LogoScroll"
import '../style/Home.css'
import album1 from '../assets/img/album1.jpeg'
import album2 from '../assets/img/album2.jpeg'
import album3 from '../assets/img/album3.jpeg'
import googleplayLogo from '../assets/img/google-play.png'
import applemusicLogo from '../assets/img/itunes.png'
import svgPath from '../assets/img/svg-path.svg'

export default function Route() {
  return (
    <>
      <Carousel />
      <section id="streaming" className="flex justify-center">
        <LogoScroll />
      </section>
      <section id="releases" className="text-center flex flex-col items-center">
        <div className="container flex justify-center py-12 w-full">
          <div className="flex flex-row flex-wrap justify-center">
            <div id="feature" className="px-16 md:px-56 flex-2 my-3">
              <h3>FEATURE</h3>
              <h2>NEW REALEASES</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque corrupti magni corporis veritatis sit alias ducimus perferendis placeat voluptatem laborum!</p>
            </div>
            <div className="flex flex-col flex-none md:flex-1 px-3 max-w-sm md:max-w-lg">
              <figure className="flex flex-col image-container"><img className="max-w-full h-auto" src={album1} alt="" title="Remember That You Will Die" /><figcaption className="caption">Remember That You Will Die</figcaption></figure>
              <div className="flex flex-wrap justify-center">
                <img src={applemusicLogo} alt="" />
                <img src={googleplayLogo} alt="" />
              </div>
            </div>
            <div className="flex flex-col flex-none md:flex-1 px-3 max-w-sm md:max-w-lg">
              <figure className="flex flex-col image-container"><img className="max-w-full h-auto" src={album2} alt="" title="New Levels New Devils" /><figcaption className="caption">New Levels New Devils</figcaption></figure>
              <div className="flex flex-wrap justify-center">
                <img className="max-w-full h-auto" src={applemusicLogo} alt="" />
                <img className="max-w-full h-auto" src={googleplayLogo} alt="" />
              </div>
            </div>
            <div className="flex flex-col flex-none md:flex-1 px-3 max-w-sm md:max-w-lg">
              <figure className="flex flex-col image-container"><img className="max-w-full h-auto" src={album3} alt="" title="Renaissance" /><figcaption className="caption">Renaissance</figcaption></figure>
              <div className="flex flex-wrap justify-center">
                <img src={applemusicLogo} alt="" />
                <img src={googleplayLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <img src={svgPath} alt="" id="svg-bottom" />
      </section>
      <section id="quote1" className="flex justify-center w-full text-center">
        <div className="container flex items-center" id="quote-1"><h4>"Someone call a paramedic
          I can't speak it's all phonetic
          Made me forget every word 'cause like that's a lot of letters"<br /><br />Polyphia ft. Sophia Black</h4>
        </div>
      </section>
      <section id="spotify" className="text-center flex flex-col items-center">
        <img src={svgPath} alt="" id="svg-top"/>
        <div className="container">
          <div className="flex flex-col py-12">
            <div id="feature" className="flex flex-col px-16 md:px-56 my-3">
              <h3>NEW ALBUM</h3>
              <h2>NOW ON SPOTIFY</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque corrupti magni corporis veritatis sit alias ducimus perferendis placeat voluptatem laborum!</p>
            </div>
            <iframe src="https://open.spotify.com/embed/album/3cN3mENkACWuRCDOuQUtfw?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

