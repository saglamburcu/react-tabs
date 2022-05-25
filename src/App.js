import { useState, useEffect } from "react";
import axios from "axios";
import JobDetail from "./JobDetail";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const job = jobs[index];

  const getData = async () => {

    try {
      const response = await axios.get("https://course-api.com/react-tabs-project");
      const data = await response.data;
      setJobs(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  if (isLoading) {
    return (
      <main className="container" >
        <h1>Loading...</h1>
      </main>
    )
  }

  return (
    <main main className="container" >
      <div>
        <h1>Experience</h1>

        <article className="jobs-container">
          <section className="jobs">
            {
              jobs.map((job, i) => (
                <button className={i === index ? "active-button" : ""} key={job.id} onClick={() => setIndex(i)}>
                  {job.company}
                </button>
              ))
            }
          </section>
          <section className="content-container">
            <JobDetail job={job} />
          </section>
        </article>

      </div>

    </main >
  );
};

export default App;