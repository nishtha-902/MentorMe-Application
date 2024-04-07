import React from "react";

const Feedback = () => {
  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <h1 className="text-center ">FEEDBACK</h1>
      <form>
        <div class="mb-3 mx-5 " style={{ textAlign: "left" }}>
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 mx-5 " style={{ textAlign: "left" }}>
          <label for="exampleInputPassword1" class="form-label">
            Write here...
          </label>
          <textarea
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-warning my-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
