import { useContext } from "react";
import Button from "./Button.jsx";
import { ProjectsContext } from "../store/projects-context.jsx";

export default function ProjectsSidebar() {
  const { selectedProjectId, projects, onStartAddProject, onSelectProject } =
    useContext(ProjectsContext);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {Object.entries(projects).map(([id, project]) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (id === selectedProjectId) {
            cssClasses += " text-stone-200 bg-stone-800";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
