import { Container } from "react-bootstrap";
import ProjectList from "./ProjectList";

function ProjectsBody() {
  return (
    <Container fluid className="main-body">
        <ProjectList/>
    </Container>
  );
}

function Projects() {
  return (
    <>
      <h1 className="header">Projects</h1>
      <ProjectsBody />
    </>
  );
}

export default Projects;