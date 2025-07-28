// import React, { useState, useEffect } from "react";
// import "./Hero.css";
// import lib from "../assets/lib.jpg";

// const Hero = ({ searchContent, setSearchContent }) => {
//   const [input, setInput] = useState(searchContent);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     if (loaded) {
//       const timer = setTimeout(() => {
//         document.querySelector(".hero-video")?.classList.add("breathe");
//       }, 3000); // Start breathing animation after entrance zoom
//       return () => clearTimeout(timer);
//     }
//   }, [loaded]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSearchContent(input);
//   };

//   return (
//     <section className="hero position-relative text-center text-white">
//       {/* Rounded container with padding on sides */}
//       <div className="hero-rounded-container">
//         <img
//           className="hero-video"
//           src={lib}
//           alt="Library Banner"
//           onLoad={() => setLoaded(true)}
//         />
//         <div className="hero-overlay"></div>
//       </div>

//       <div
//         className="hero-content container position-relative py-5"
//         style={{ maxWidth: "700px", zIndex: 2 }}
//       >
//         <h1 className="mb-3">
//           Access your prescriptions from anywhere, at any time. Wellness has no boundaries.
//         </h1>
//         <p className="mb-4">
//           Your health, your choice, delivered with care. Online pharmacy made easy.
//         </p>

//         <form
//           className="search-box d-flex shadow"
//           onSubmit={handleSubmit}
//           style={{
//             borderRadius: "50px",
//             overflow: "hidden",
//             maxWidth: "350px",
//             margin: "auto",
//           }}
//         >
//           <input
//             type="text"
//             // className="form-control shadow-none"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Search for Medicine..."
//             aria-label="Search Medicine"
//             style={{
//               borderTopLeftRadius: "50px",
//               borderBottomLeftRadius: "50px",
//               borderTopRightRadius: 0,
//               borderBottomRightRadius: 0,
//               borderRight: "none",
//               fontSize: "0.95rem",
//               paddingLeft: "12px",
//               backgroundColor: "white",
//               color: "#333",
//             }}
//           />

//           <button
//             type="submit"
//             className="btn btn-primary shadow-none d-flex align-items-center justify-content-center"
//             aria-label="Search"
//             style={{
//               borderTopRightRadius: "50px",
//               borderBottomRightRadius: "50px",
//               borderTopLeftRadius: 0,
//               borderBottomLeftRadius: 0,
//               padding: "0 20px",
//               fontSize: "1.1rem",
//               backgroundColor: "white",
//               color: "#333",
//               border: "none",
//             }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-search"
//               viewBox="0 0 16 16"
//             >
//               <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.44 1.27a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
//             </svg>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from "react";
import "./Hero.css";
import lib from "../assets/lib.jpg";

const Hero = ({ searchContent, setSearchContent }) => {
  const [input, setInput] = useState(searchContent);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => {
        document.querySelector(".hero-video")?.classList.add("breathe");
      }, 3000); // Start breathing animation after entrance zoom
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchContent(input);
  };

  return (
    <section className="hero position-relative text-center text-white">
      <div className="hero-rounded-container">
        <img
          className="hero-video"
          src={lib}
          alt="Library Banner"
          onLoad={() => setLoaded(true)}
        />
        <div className="hero-overlay"></div>
      </div>

      <div
        className="hero-content container position-relative py-5"
        style={{ maxWidth: "700px", zIndex: 2 }}
      >
        <h1 className="mb-3">
          Access your prescriptions from anywhere, at any time. Wellness has no boundaries.
        </h1>
        <p className="mb-4">
          Your health, your choice, delivered with care. Online pharmacy made easy.
        </p>

        <form
          className="search-box d-flex shadow"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for Medicine..."
            aria-label="Search Medicine"
          />
          <button
            type="submit"
            className="btn btn-primary d-flex align-items-center justify-content-center"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.44 1.27a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
