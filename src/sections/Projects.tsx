function Projects() {
  const projects = [
    {
      name: "DoDo_Task",
      repo: "https://github.com/lohkaixuan/DoDo_Task",
      about: "Backend task manager API built in Python.",
      stack: "Python",
    },
    {
      name: "FYP",
      repo: "https://github.com/lohkaixuan/FYP",
      about: "Final year project exploring app workflows and UX.",
      stack: "Dart",
    },
    {
      name: "Group-of-4",
      repo: "https://github.com/lohkaixuan/Group-of-4",
      about: "Hackathon team project delivered under tight deadlines.",
      stack: "Dart",
    },
    {
      name: "InfinityWorld",
      repo: "https://github.com/lohkaixuan/InfinityWorld",
      about: "TypeScript project focused on interactive experiences.",
      stack: "TypeScript",
    },
    {
      name: "C3G13_Milo-3-in-1_SourceCode",
      repo: "https://github.com/lohkaixuan/C3G13_Milo-3-in-1_SourceCode",
      about: "Source code for the Milo 3-in-1 project.",
      stack: "TypeScript",
    },
    {
      name: "DCOM-assignment",
      repo: "https://github.com/lohkaixuan/DCOM-assignment",
      about: "Java assignment showcasing core OOP concepts.",
      stack: "Java",
    },
  ]

  return (
    <section className="card" id="projects">
      <h2>Projects</h2>
      <p>Selected work and case studies.</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.about}</p>
            <p className="project-stack">{project.stack}</p>
            <a className="button" href={project.repo} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
