import { createContext } from "react";

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
