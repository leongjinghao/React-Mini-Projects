import { useContext } from "react";
import NewProject from "./NewProject.jsx";
import NoProjectSelected from "./NoProjectSelected.jsx";
import SelectedProject from "./SelectedProject.jsx";
import { ProjectsContext } from "../store/projects-context.jsx";

export default function MainContent() {
  const projectsState = useContext(ProjectsContext);
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NoProjectSelected />;
  } else if (projectsState.selectedProjectId === "adding") {
    content = <NewProject />;
  } else {
    content = <SelectedProject />;
  }

  return content;
}
