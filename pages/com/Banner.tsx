const Banner = ({ 
  title = "Simple Web Solutions",
  subtitle = "Responsive designs, sliders & SEO for your business. No JS needed.",
  buttonText = "Get Started",
  buttonLink = "#products",
  slide1Bg = "linear-gradient(to br, #3b82f6, #9333ea)",
  slide2Bg = "linear-gradient(to br, #10b981, #f59e0b)",
  slideDuration = "20s"
}) => {
  return (
    <div>
      <section id="home" className="banner-section">
        <div id="banner">
          <div 
            className="banner-bg banner-slide1"
            style={{ 
              backgroundImage: slide1Bg,
              animationDuration: slideDuration
            }}
          ></div>
          <div 
            className="banner-bg banner-slide2"
            style={{ 
              backgroundImage: slide2Bg,
              animationDuration: slideDuration,
              animationDelay: `${parseFloat(slideDuration) / 2}s`
            }}
          ></div>
          <div className="banner-content">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <a href={buttonLink} className="banner-btn">{buttonText}</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        #banner {
          height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .banner-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0.7;
        }
        .banner-slide1 {
          animation: fade ${slideDuration} infinite;
        }
        .banner-slide2 {
          animation: fade ${slideDuration} infinite ${parseFloat(slideDuration) / 2}s;
        }
        @keyframes fade {
          0%, 45% { opacity: 0.7; }
          5%, 40% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .banner-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
          max-width: 800px;
          padding: 0 1.5rem;
        }
        .banner-content h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: bold;
          margin-bottom: 1rem;
          text-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        .banner-content p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }
        .banner-btn {
          background: white;
          color: #2563eb;
          padding: 1rem 2.5rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          transition: transform 0.3s, box-shadow 0.3s;
          display: inline-block;
        }
        .banner-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        @media (max-width: 768px) {
          .banner-content { padding-top: 10vh; }
        }
      `}</style>
    </div>
  );
};

export default Banner;
