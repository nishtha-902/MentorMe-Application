import React from "react";

const Faq = () => {
  return (
    <div style={{ height: "70vh" }}>
      <h1 className="text-center my-5">FAQs</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div style={{ marginLeft: "250px" }}>
                • Who can join MentorMe and what are the benefits of joining
                MentorMe for students and how?
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Students who want any personalised mentorship or learn any kind of
              skill can join us and the teachers can also can join us.Mentees
              will get proper 24x7 personalised mentorship and roadmap for each
              and every technical domain. Two - way live interaction to overcome
              the gap between mentor and mentees.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <div style={{ marginLeft: "250px" }}>
                • Is there a cost to join MentorMe personalised mentorship or to
                learn a particular skill?
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              No, not at all. We are providing mentorship and education
              absolutely for free!!
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <div style={{ marginLeft: "250px" }}>
                • How do I find a mentor on MentorMe platform for my required
                domain on which I want to get mentorship?
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              You can just go to Our Mentor section and find the respective
              skill as per your requirement or you can just search your skill
              that you want to learn in search button on the top.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
