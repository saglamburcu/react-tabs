function JobDetail({ job }) {
  const { title, company, dates, duties } = job;

  return (
    <>

      <h2>{title}</h2>
      <div className="company">{company}</div>
      <p>{dates}</p>


      <ul className="list">
        {
          duties.map((dutie, index) => (
            <li key={index}>{dutie}</li>
          ))
        }
      </ul>

    </>
  )
};

export default JobDetail;