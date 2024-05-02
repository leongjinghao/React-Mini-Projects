import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // undefined represents initial state w/ no project
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null, // null represents adding project action
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {projectsState.selectedProjectId === undefined ? (
        <NoProjectSelected onStartAddProject={handleStartAddProject} />
      ) : (
        <NewProject />
      )}
    </main>
  );
}

export default App;
