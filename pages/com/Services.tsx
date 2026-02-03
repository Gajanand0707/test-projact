import { useState, useEffect } from 'react';

interface Service {
  id: number;
  category: string;
  title: string;
  price: string;
  img: string;
  duration: string;
}

interface ServicesProps {
  title?: string;
  activeFilter?: string;
}

const Services: React.FC<ServicesProps> = ({ 
  title = "Our Services",
  activeFilter: propActiveFilter = "Haircut"
}) => {
  const [servicesData] = useState<Service[]>([
    {
      id: 1,
      category: "Haircut",
      title: "Men's Haircut",
      price: "$25",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmi2nOm233Pki0e7DAMFl5muEsMN-Me367Q&s",
      duration: "30 min"
    },
    {
      id: 2,
      category: "Haircut",
      title: "Fade",
      price: "$30",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmi2nOm233Pki0e7DAMFl5muEsMN-Me367Q&s",
      duration: "45 min"
    },
    {
      id: 3,
      category: "Haircut",
      title: "Haircut + Beard",
      price: "$45",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmi2nOm233Pki0e7DAMFl5muEsMN-Me367Q&s",
      duration: "60 min"
    },
    {
      id: 4,
      category: "Beard",
      title: "Beard Trim",
      price: "$20",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmi2nOm233Pki0e7DAMFl5muEsMN-Me367Q&s",
      duration: "20 min"
    },
    {
      id: 5,
      category: "Beard",
      title: "Full Beard",
      price: "$35",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmi2nOm233Pki0e7DAMFl5muEsMN-Me367Q&s",
      duration: "40 min"
    },
    {
      id: 6,
      category: "Kids",
      title: "Kids Haircut",
      price: "$20",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmi2nOm233Pki0e7DAMFl5muEsMN-Me367Q&s",
      duration: "25 min"
    }
  ]);

  const [visibleCount, setVisibleCount] = useState(6);
  const [activeFilter, setActiveFilter] = useState(propActiveFilter);
  const [filteredServices, setFilteredServices] = useState(servicesData);

  const categories = ['all', 'Haircut', 'Beard', 'Kids'];

  useEffect(() => {
    setActiveFilter(propActiveFilter);
  }, [propActiveFilter]);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredServices(servicesData);
    } else {
      setFilteredServices(servicesData.filter(service => service.category === activeFilter));
    }
    setVisibleCount(6);
  }, [activeFilter, servicesData]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredServices.length));
  };

  const showLoadMore = visibleCount < filteredServices.length;

  return (
    <section className="services-section">
      <div className="container">
        {/* <h2>{title}</h2> */}
        
        {/* Filter Header */}
        <div className="filter-buttons text-left" style={{ textAlign: 'left', width: "100%" }}>
          <h3>{activeFilter}</h3>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.slice(0, visibleCount).map(service => (
            <div key={service.id} className="service-card">
              <div className="card-image">
                <img src={service.img} alt={service.title} loading="lazy" />
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <div className="price-duration">
                  <span className="price">{service.price}</span>
                  <span className="duration">{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showLoadMore && (
          <div className="load-more-container">
            <button id="load-more-services" onClick={loadMore}>
              Load More
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .services-section {
          padding: 5rem 1.5rem;
          background: #f8fafc;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        h2 {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 3rem;
          color: #1f2937;
        }
        .filter-buttons {
          margin-bottom: 2rem;
        }
        .filter-buttons h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .service-card {
          background: white;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          border: 1px solid #f1f5f9;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
        }
        .card-image {
          height: 220px;
          overflow: hidden;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .service-card:hover .card-image img {
          transform: scale(1.05);
        }
        .card-content {
          padding: 1.5rem;
        }
        .card-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }
        .price-duration {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .price {
          font-size: 1.5rem;
          font-weight: 800;
          color: #2563eb;
        }
        .duration {
          background: #f1f5f9;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }
        .load-more-container {
          display: flex;
          justify-content: center;
        }
        #load-more-services {
          background: #2563eb;
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(37,99,235,0.3);
          transition: all 0.3s ease;
        }
        #load-more-services:hover {
          background: #1d4ed8;
        }
        @media (max-width: 768px) {
          .services-section { padding: 3rem 1rem; }
          h2 { font-size: 2rem; }
          .services-grid { gap: 1.5rem; }
          .card-image { height: 180px; }
        }
      `}</style>
    </section>
  );
};

export default Services;
