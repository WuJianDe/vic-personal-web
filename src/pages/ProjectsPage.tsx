const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "作品一",
      description: "這是一個展示技術與創意的專案。",
      image: "/path/to/project1.jpg",
    },
    {
      title: "作品二",
      description: "這是一個專注於使用者體驗的專案。",
      image: "/path/to/project2.jpg",
    },
    {
      title: "作品三",
      description: "這是一個結合設計與功能的專案。",
      image: "/path/to/project3.jpg",
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
