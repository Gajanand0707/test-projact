import { useState, useEffect } from 'react';
type WorkItem = {
  img: string;
  title: string;
  alt?: string;
  description?: string;
};

type WorkProps = {
  title?: string;
  works?: WorkItem[];
};
const Work = ({
  title = "Our Work",
  works = [
    {
      img: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
      title: "Miami Restaurant",
      alt: "Miami Restaurant Site",
      description: "A vibrant website for a Miami-based restaurant.",
    },
    {
      img: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg",
      title: "Orlando Portfolio",
      alt: "Orlando Portfolio",
      description: "Creative portfolio for Orlando design agency.",
    },
  ],
}: WorkProps) => {
  const [visibleCount, setVisibleCount] = useState(2);

  // Detect button focus by ID only
  useEffect(() => {
    const checkButtonFocus = () => {
      const btn = document.getElementById('load-more-work');
      if (btn && document.activeElement === btn && visibleCount < works.length) {
        setVisibleCount(visibleCount + 1);
      }
    };

    document.addEventListener('focusin', checkButtonFocus);
    return () => document.removeEventListener('focusin', checkButtonFocus);
  }, [visibleCount, works.length]);

  const showLoadMore = visibleCount < works.length;

  return (
    <div>
      <section id="work">
        <div className="container">
          <h2>{title}</h2>
          <div className="grid">
            {works.slice(0, visibleCount).map((work, index) => (
              <div key={index} className="work-card">
                <img
                  src={work.img}
                  alt={work.alt || work.title}
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="work-overlay">
                  <h3>{work.title}</h3>
                  {work.description && <p>{work.description}</p>}
                </div>
              </div>
            ))}
          </div>
          
          {/* {showLoadMore && (
            <div className="load-more-container">
              <button id="load-more-work">
                Load More
              </button>
            </div>
          )} */}
        </div>

        <style jsx>{`
          #work { padding: 5rem 1.5rem; scroll-margin-top: 6rem; }
          .container { max-width: 1200px; margin: 0 auto; }
          h2 { font-size: 2.5rem; font-weight: bold; text-align: center; margin-bottom: 3rem; color: #1f2937; }
          .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
          .work-card { position: relative; overflow: hidden; border-radius: 1rem; height: 250px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: all 0.4s ease; }
          .work-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.2); }
          .work-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
          .work-card:hover img { transform: scale(1.1); }
          .work-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); color: white; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end; padding: 1.5rem; opacity: 0; transition: opacity 0.4s ease; }
          .work-card:hover .work-overlay { opacity: 1; }
          .work-overlay h3 { font-size: 1.25rem; font-weight: bold; margin-bottom: 0.25rem; }
          .work-overlay p { font-size: 0.9rem; opacity: 0.9; }
          .load-more-container { display: flex; justify-content: center; margin-top: 3rem; }
          #load-more-work {
            background: #2563eb; color: white; border: none; padding: 1rem 2.5rem; 
            border-radius: 9999px; font-size: 1.1rem; font-weight: 600; cursor: pointer; 
            transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(37,99,235,0.3);
          }
          @media (max-width: 768px) { #work { padding: 3rem 1rem; } h2 { font-size: 2rem; } }
        `}</style>
      </section>
    </div>
  );
};

export default Work;
