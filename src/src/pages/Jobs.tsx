import React from "react";

const Jobs: React.FC = () => {

  const jobs = [
    {
      title: "SEO Manager",
      company: "ABC Digital",
      location: "Mumbai",
      email: "careers@abcdigital.com"
    },
    {
      title: "Internet Marketing Specialist",
      company: "GrowthLab",
      location: "Remote",
      email: "hr@growthlab.io"
    },
    {
      title: "Performance Marketing Manager",
      company: "BrandRocket",
      location: "Pune",
      email: "jobs@brandrocket.in"
    }
  ];

  return (
    <div>
      <h1>Available Jobs</h1>

      {jobs.map((job, index) => (
        <div key={index} style={{marginBottom: "20px"}}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.email}</p>
        </div>
      ))}

    </div>
  );
};

export default Jobs;
