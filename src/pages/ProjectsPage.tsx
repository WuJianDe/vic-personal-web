import { useTranslation } from "react-i18next";
import todoglist from "@/assets/todolist.png";
import reactLearning from "@/assets/react-learning.png";
const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("projects-todo-list-title"),
      description: t("projects-todo-list-content"),
      image: todoglist,
      url: "https://wujiande.github.io/to-do-list",
    },
    {
      title: t("projects-react-learning-title"),
      description: t("projects-react-learning-content"),
      image: reactLearning,
      url: "https://wujiande.github.io/react-challenge/#/counter",
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-list">
        {projects.map((project, index) => (
          <a
            className="project-card"
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
