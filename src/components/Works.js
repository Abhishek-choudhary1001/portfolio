import "./Works.css";


const Works = () => {
  
  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="description">
          <span style={{ color:"black" }}>
            Internships at
          </span>
          <span>Cars24 and Snapdeal</span>
          <p>
          🚗 Cars24 Internship <br/>
          
          Built a full-stack Road Trip Planner using the MERN stack, featuring interactive maps, trip scheduling, and budget tracking — deployed on Render with MongoDB Atlas for cloud data management.
Worked on improving system performance and scalability for high-volume user traffic.

Collaborated with senior developers on live projects, gaining hands-on experience with production-level codebases.<br/>
<br/>🛒 Snapdeal Internship <br/>
Developed a full-stack e-commerce website using the MERN stack, with features like product listings, shopping cart, user authentication, and admin dashboard — fully deployed on Render.
          </p>
          <button className="hire-btn">Hire Me</button>
        </div>
      </div>
      <div className="w-right">
        <div className="main-circle">
          <div className="sub-circle">
            <img src="data:image/png;base64,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" alt="Cars24" />
          </div>
          <div className="sub-circle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_j4NAwIB6NfXMCmxKKjL8ox1d2pw4R9Lsw&s" alt="snapdeal" />
          </div>
          
        </div>
        <div className="background-circle blue"></div>
        <div className="background-circle yellow"></div>
      </div>
    </div>
  );
};

export default Works;
