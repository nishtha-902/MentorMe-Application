import React from "react";

const About = () => {
  return (
    <div>
      <div className="card text-bg-dark my-5">
        <img
          src="https://images.unsplash.com/photo-1608755768421-ba3662c9e7ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRlY2huaWNhbCUyMGJhY2tncm91bmRzfGVufDB8fDB8fHww"
          style={{ height: "770px" }}
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h4 className="card-title my-3">Welcome to MentorMe</h4>

          <div style={{ textAlign: "left" }}>
            <p>
              At MentorMe, we believe in the power of guidance and support to
              unlock potential and foster growth. Our platform serves as a
              bridge connecting mentors and mentees from diverse backgrounds,
              industries, and experiences. Whether you're seeking advice to
              navigate your career path, looking to refine your skills, or
              aiming to share your knowledge and expertise, MentorMe is here to
              facilitate meaningful connections and impactful mentorship
              experiences.
            </p>
            Our matching algorithm ensures that mentees are paired with mentors
            who possess the skills and experiences relevant to their needs.
            Whether you're looking for guidance in a specific industry, career
            transition, or skill development, our mentors offer personalized
            support tailored to your unique goals and aspirations.
            <br></br>
            <br></br>
            <p>
              Join our community today and embark on a journey of growth,
              learning, and empowerment. Together, let's unlock your full
              potential and achieve success. connect with your mentee and get
              the confidence to win the never ending race.
            </p>
          </div>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
};

export default About;
