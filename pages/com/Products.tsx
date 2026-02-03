import { useState, useEffect } from 'react';

const Products = ({
  title = "Our Products",
  products = [
    {
      img: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
      alt: "Pro Slider Kit",
      title: "Pro Slider Kit",
      description: "Responsive carousels for mobile sites."
    },
    {
      img: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
      alt: "Hero Builder",
      title: "Hero Builder",
      description: "CSS banners with smooth fades."
    },
    {
      img: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
      alt: "SEO Pack",
      title: "SEO Pack",
      description: "Local optimization for Jaipur businesses."
    },
    {
      img: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
      alt: "App Builder",
      title: "App Builder",
      description: "React/Next.js app templates."
    }
  ]
}) => {
  const [visibleCount, setVisibleCount] = useState(2);

  // Detect when #load-more-products button is selected/focused
  useEffect(() => {
    const checkButtonFocus = () => {
      const btn = document.getElementById('load-more-products');
      if (btn && document.activeElement === btn && visibleCount < products.length) {
        setVisibleCount(visibleCount + 1);
      }
    };

    document.addEventListener('focusin', checkButtonFocus);
    return () => document.removeEventListener('focusin', checkButtonFocus);
  }, [visibleCount, products.length]);

  const showLoadMore = visibleCount < products.length;

  return (
    <div>
      <section id="products">
        <div className="container">
          <h2>{title}</h2>
          <div className="grid">
            {products.slice(0, visibleCount).map((product, index) => (
              <div key={index} className="card">
                <img 
                  src={product.img} 
                  alt={product.alt || product.title}
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
          
          {/* {showLoadMore && (
            <div className="load-more-container">
              <button id="load-more-products">
                Load More
              </button>
            </div>
          )} */}
        </div>

        <style jsx>{`
          /* Your exact same CSS */
          #products { padding: 5rem 1.5rem; background: white; scroll-margin-top: 6rem; }
          .container { max-width: 1200px; margin: 0 auto; }
          h2 { font-size: 2.5rem; font-weight: bold; text-align: center; margin-bottom: 3rem; color: #1f2937; }
          .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
          .card { background: #f8fafc; padding: 2rem; border-radius: 1rem; text-align: center; transition: all 0.3s ease; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
          .card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
          .card img { width: 100%; height: 200px; object-fit: cover; border-radius: 0.75rem; margin-bottom: 1.5rem; }
          .card h3 { font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: #1f2937; }
          .card p { color: #6b7280; line-height: 1.6; font-size: 1rem; }
          .load-more-container { display: flex; justify-content: center; margin-top: 3rem; }
          #load-more-products {
            background: #2563eb;
            color: white;
            border: none;
            padding: 1rem 2.5rem;
            border-radius: 9999px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(37,99,235,0.3);
          }
          #load-more-products:hover { background: #1d4ed8; }
          @media (max-width: 768px) { #products { padding: 3rem 1rem; } h2 { font-size: 2rem; } }
        `}</style>
      </section>
    </div>
  );
};

export default Products;
