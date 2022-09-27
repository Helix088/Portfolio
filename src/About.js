
import pic from "./its_me.jpg";

function AboutBody() {
    return (
      <div className="main-body">
        <h1>Who am I?</h1>
        <p>
          I have been in Web Development for 3 years for school and have 6
          months of experience in the industry. I enjoy building eye-pleasing
          websites and functional apps and programs. I work hard and give 110%
          with everything I do, especially in programming. I have my Associates 
          in Applied Technology from BYU-Idaho. I am currently working on my 
          Bachelors within the same field.
        </p>
        <img src={pic} alt="Chase Patterson" className="profile-image"></img>
      </div>
    );
}

function About() {
  return (
    <>
      <h1 className="header">About Me</h1>
      <AboutBody />
    </>
  );
}

export default About;