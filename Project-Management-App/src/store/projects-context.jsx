import { createContext, useState } from "react";

export const ProjectsContext = createContext({
  selectedProjectId: null,
  projects: {},
  onStartAddProject: () => {},
  onCancelAddProject: () => {},
  onAddProject: () => {},
  onSelectProject: () => {},
  onDeleteProject: () => {},
  onAddTask: () => {},
  onDeleteTask: () => {},
});

export default function ProjectsContextProvider({ children }) {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: null, // null represents initial state w/o project selected
    projects: {},
  });

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

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
}
