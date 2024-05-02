import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: null, // null represents initial state w/o project selected
    projects: [],
  });
  let content;

  function handleStartAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: "adding", // represents adding project action
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null, // revert back to no project selected
      };
    });
  }

  function handleAddProject(userInputs) {
    setProjectsState((prevProjectsState) => {
      const projectId = Math.random(); // not best practice for generating ids, but this is sufficient for this project
      const newProject = {
        ...userInputs,
        id: projectId,
      };

      return {
        selectedProjectId: projectId,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  }

  if (projectsState.selectedProjectId === null) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === "adding") {
    content = <NewProject onAddProject={handleAddProject} onCancelAddProject={handleCancelAddProject} />;
  } else {
    // TODO: display project data if a project is selected
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
