const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-bg"></div>
      <div className="home-card">
        <div className="home-card-left">
          <div className="home-card-photo"></div>
          {/* <div className="home-card-name">I'M VIC WU</div> */}
          {/* <div className="home-card-profession">Full Stack Engineer</div> */}
        </div>
        <div className="home-card-right">
          <div className="home-card-title">Hi I'M <br/>VIC WU.</div>
          <div className="home-card-sub">
            A Full Stack Engineer and content creator.
          </div>
          <div className="home-card-content">
            I love building intuitive interfaces and exploring AI tools for
            better productivity. Here’s my work — let’s connect.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
