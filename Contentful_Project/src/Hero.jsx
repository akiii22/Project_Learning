import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Mlkshk swag distillery hoodie edison bulb typewriter. Live-edge
            ennui you probably haven't heard of them yes plz poutine street art
            lo-fi banjo pour-over waistcoat organic twee bicycle rights
            slow-carb echo park. Pop-up marxism letterpress trust fund
            solarpunk, venmo bespoke meh mustache raclette iPhone food truck DIY
            leggings hashtag. Portland pop-up tbh, fanny pack air plant bitters
            bushwick chartreuse.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
