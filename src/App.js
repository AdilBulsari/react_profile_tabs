import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    // setLoading(true);
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"> </div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, i) => (
            <button
              className={`job-btn ${i === value ? "active-btn" : ""}`}
              onClick={() => setValue(i)}
              key={i}
            >
              {item.title}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((ele, i) => {
            return (
              <div className="job-desc" key={i}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{ele}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
