// pages/com/SimpleButton.jsx
const SimpleButton = ({ id, title }: { id: string; title: string }) => {
  return (
    <div>
      <button id={id}>
        {title}
      </button>

      <style jsx>{`
        button {
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
          display: inline-block;
        }
        button:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37,99,235,0.4);
        }
        @media (max-width: 768px) {
          button {
            padding: 0.875rem 2rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SimpleButton;
