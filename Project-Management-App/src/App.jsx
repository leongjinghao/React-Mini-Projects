import MainContent from "./components/MainContent.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import ProjectsContextProvider from "./store/projects-context.jsx";

function App() {
  return (
    <ProjectsContextProvider>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar />
        <MainContent />
      </main>
    </ProjectsContextProvider>
  );
}

export default App;
