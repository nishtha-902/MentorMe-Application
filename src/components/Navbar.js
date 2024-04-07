import React from "react"; //rafce

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark "
        style={{ backgroundColor: "#040D12" }}
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">MentorMe</a> */}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEUGBgb///8AAABnZ2dfX1/Y2Ng/Pz/29vYHBwdsbGz8/Pzf39/5+fny8vL19fU7Ozt3d3eurq4uLi7T09Ojo6Ph4eG0tLScnJwkJCQzMzOoqKh9fX1RUVFxcXHm5uYhISEYGBhLS0tZWVmBgYG9vb3KyspjY2NERESLi4sWFhZ+jSlNAAAEbElEQVR4nO2c2XLiMBBFURsHsAETloQtkDAkmfz/D45MWNwt2RBipkrNPU9ThXChE19aaplpNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/hCjUi98Metvc7nPT8i1EKdQxf27116SF6QTpJDJmewspbaKtMVGoTszqof6PTtnKhOzE1J4fokFiAndinmqVQvT0fdmgnZhJRo12XRfNUqPBiUkWNd0qNjddk6hwUld+jrlR4cSsst9PgbKJ0eTk9/nZ5UaXk9/mh+iRXy7YdSwj/UV+aJbyi43WGpwkJhlceasQvXT5xZ4D3RfL++Tq/LB6k9NbhqnE68RMrtj/nNZph9y8Ul1rwP+M14lp/bT+2HrTcnITqJISJz/Nj6g3iel9BJqbnDInZjK8fFK0nvA3j9rhGmH7na2w8nLhn5qoI94ZaL05ULhPlpveNflx1mm9ZthKik6aNH3ns0svqD+UxSI307CNCCdEz3x+3XPrNzXrtCLMiZ1iU+TnsXKKTm5arN4EWo65k7yEjPgsq+oPDav2N3nn/iXEm0Y6aTj5Scrqj81NwoeO2ci8cx96r6C5//y06V+SHzc3TWaEFib8/slhSm2n/sQzd2o0lPVmyJXsdoRanHjy05L1x+ZG3EwiNw/f3zR6nOT1R5RYnh+iOX+5K+rNIjHhn3lxJ/m0RDQmhaUYTUW9ib88uVHnxE5sLG6FQ/2x+xtxE81Fbk47Ql1O7NSjnm/qTm56HZGbgjFlTvLSwtZvya7+XFZv1Drx1J8ORdX1Zsg7KfqcWCkfoqUoVi7diOdmwF/W6MS+/ir2P4x4XZEbVU7EUmQsJ3pkzja+TudekRP6/MsDIb9C9rREvRl03TFqnDyIriNNY2eytghN+e306IzR5UR0TXz5mTv1JnHG6HJizIAHQ9SfvsyN7yZR56QyP/GwMjenLxZlTkTXvrikF7mRnfv3U/9NmxNxamy3ft/56crcOCfFG7X3iZuf3VYnnVXmpr8haip2kpjVVOZHNJfWK65kZF9W7cTIrj1Rxh15T7y0O3HyU/y3c1Ic7Rb7Gp1kfKZlp8Y0KzkpVuik4Zwa+069RAcyKXRSNDqxkzp76uXWm1PnXqWTBn3Jpy7EU7Puk7CvhXerdOJ2HdlTF7beiHUa60AqdZLv+krz4+Ym4rVJqZN81zcybP9/2Pj5OvfsORO9Tjz5yTc6RJFYp43lF7BiJ3b6G/G1YfMjT7xa7hN9mp14uvbxp8yN55cXup1Udu1z5p7VnHYnnlPjYm46PiXqnezrj5e45PE//U5K8+PNze4N+p3YQR9ufvrl070LJ578+B77O46+CydOfpx1Ght8H0748jWJqpTcjZN8/XZYrqVnfiF7P06O+SmtN8eB9+Mkbzf2TP/8z7+Cd7JJ4z3L85+fhtuKenMctTxcMr3hf+p1Q+jEZaNrvyYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA8Q/gnC+H6XJ3JQAAAABJRU5ErkJggg=="
            alt=".."
            style={{ height: "50px", width: "70px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#meetourmentors">
                  Our Mentors
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="/ourservices"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item" href="#">
                    Personalised mentorship
                  </li>
                  <li className="dropdown-item" href="#">
                    24x7 support
                  </li>
                  <li className="dropdown-item" href="#">
                    All technical domains available
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#contact">
                  Contact us
                </a>
              </li>
            </ul>
            <a
              href="https://nishtha-902.github.io/Chatbot/"
              rel="noreferrer"
              target="_blank"
              style={{
                margin: "0px 20px",
                border: "1px solid yellow",
                color: "yellow",
                borderRadius: "10px",
                textDecoration: "none",
                height: "40px",
                width: "120px",
                lineHeight: "35px",
              }}
            >
              Chat With Us
            </a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 mx-3"
                type="search"
                placeholder="Search your domain"
                aria-label="Search"
              />
              <button className="btn btn-secondary mx-3 " type="submit">
                Search
              </button>
            </form>
            <a
              href="https://nishtha-902.github.io/Login-Signup-page/"
              rel="noreferrer"
              target="_blank"
              style={{
                margin: "0px 20px",
                border: "1px solid yellow",
                color: "yellow",
                borderRadius: "10px",
                textDecoration: "none",
                height: "40px",
                width: "120px",
                lineHeight: "35px",
              }}
            >
              Login/Signup
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
