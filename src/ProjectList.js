import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import firstProjectImage from "./images/programming-1.png";
import secondProjectImage from "./images/programming-2.png";
import thirdProjectImage from "./images/programming-3.png";
import fourthProjectImage from "./images/programming-4.png";
import fifthProjectImage from "./images/programming-5.png";
import sixthProjectImage from "./images/programming-6.png";

const projects = [
    {photo: firstProjectImage, projectName: "Comic Zen Garden"},
    {photo: secondProjectImage, projectName: "Pride, LA Chamber of Commerce"},
    {photo: thirdProjectImage, projectName: "Idaho Weather Site"},
    {photo: fourthProjectImage, projectName: "Asteroids Game"},
    {photo: fifthProjectImage, projectName: "Motor Dealership Site"},
    {photo: sixthProjectImage, projectName: "Party Chat App"},
]

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h4>{props.project.projectName}</h4>
        <img src={props.project.photo} className="modal-image"/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function ProjectsList() {
  const [modalShow, setModalShow] = React.useState(false);
  const [currenProject, setCurrentProject] = React.useState(projects[0])
  return (
    <>
      <Row>
        {projects.map((project) => (
          <Col xs={12} md={6} lg={4} className="mb-3">
            <Card
              key={project.photo}
              className="projectCard"
              onClick={() => {
                  setCurrentProject(project)
                  setModalShow(true)
                }}
            >
              <Card.Img
                variant="top"
                src={project.photo}
                className="projectPhoto"
              />
              <Card.Body>
                <Card.Title className="projectName">
                  {project.projectName}
                </Card.Title>
                <p className="card-click">Click for More Info</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <MyVerticallyCenteredModal
        project={currenProject}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProjectsList;