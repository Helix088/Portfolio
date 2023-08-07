
import pic from "./its_me.jpg";

function AboutBody() {
    return (
      <div className="main-body">
        <h2>Who am I?</h2>
        <p className="about-para">
          I have been in Web Development for 4 years for school and have 1 year 
          of experience in the industry. I enjoy building eye-pleasing
          websites, functional apps, and programs. I work hard and give 110%
          with everything I do, especially in programming. I have my Bachelors 
          in Applied Technology from BYU-Idaho.
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