import React from 'react';
type Stat = {
  value: string;
  label: string;
};

type AboutProps = {
  title?: string;
  description?: string;
  stats?: Stat[];
};
const About = ({
  title = "About Us",
  description = "Jaipur-based team creating pure CSS sites...",
  stats = [
    { value: "10+", label: "Projects Live" },
    { value: "100%", label: "Mobile-First" }
  ]
}: AboutProps) => {
  return (
    <div>
      <section id="about">
        <div className="container">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          #about {
            padding: 5rem 1.5rem;
            background: #f1f5f9;
            scroll-margin-top: 6rem;
            text-align: center;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: #1f2937;
          }
          p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 3rem;
            color: #4b5563;
            line-height: 1.7;
          }
          .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            max-width: 600px;
            margin: 0 auto;
          }
          .stat {
            padding: 1.5rem;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .stat:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          }
          .stat h3 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 0.5rem;
          }
          .stat p {
            font-size: 1rem;
            color: #6b7280;
            margin: 0;
            font-weight: 500;
          }
          @media (max-width: 768px) {
            #about { padding: 3rem 1rem; }
            h2 { font-size: 2rem; }
            .stats { gap: 1.5rem; }
          }
        `}</style>
      </section>
    </div>
  );
};

export default About;
