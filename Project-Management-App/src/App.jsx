import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import { ProjectsContext } from "./store/projects-context.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: null, // null represents initial state w/o project selected
    projects: {},
  });
  const contextValue = {
    selectedProjectId: projectsState.selectedProjectId,
    projects: projectsState.projects,
    onStartAddProject: handleStartAddProject,
    onCancelAddProject: handleCancelAddProject,
    onAddProject: handleAddProject,
    onSelectProject: handleSelectProject,
    onDeleteProject: handleDeleteProject,
    onAddTask: handleAddTask,
    onDeleteTask: handleDeleteTask,
  };
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
        tasks: {},
      };

      return {
        ...prevProjectsState,
        selectedProjectId: `${projectId}`,
        projects: { ...prevProjectsState.projects, [projectId]: newProject },
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevProjectsState) => {
      const copyProjects = { ...prevProjectsState.projects };
      delete copyProjects[prevProjectsState.selectedProjectId];

      return {
        ...prevProjectsState,
        selectedProjectId: null,
        projects: { ...copyProjects },
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prevProjectsState) => {
      const projectId = prevProjectsState.selectedProjectId;
      const taskId = Math.random();
      const newTask = {
        description: text,
      };

      return {
        ...prevProjectsState,
        projects: {
          ...prevProjectsState.projects,
          [projectId]: {
            ...prevProjectsState.projects[projectId],
            tasks: {
              ...prevProjectsState.projects[projectId].tasks,
              [taskId]: newTask,
            },
          },
        },
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevProjectsState) => {
      const projectId = prevProjectsState.selectedProjectId;
      const copyTasks = { ...prevProjectsState.projects[projectId].tasks };
      delete copyTasks[taskId];

      return {
        ...prevProjectsState,
        projects: {
          ...prevProjectsState.projects,
          [projectId]: {
            ...prevProjectsState.projects[projectId],
            tasks: { ...copyTasks },
          },
        },
      };
    });
  }

  if (projectsState.selectedProjectId === null) {
    content = <NoProjectSelected />;
  } else if (projectsState.selectedProjectId === "adding") {
    content = <NewProject />;
  } else {
    content = <SelectedProject />;
  }

  return (
    <ProjectsContext.Provider value={contextValue}>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar />
        {content}
      </main>
    </ProjectsContext.Provider>
  );
}

export default App;
