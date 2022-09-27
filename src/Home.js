export function HomeHeader() {
  return (
    <div className="header">
      <h1>Chase's Portfolio</h1>
    </div>
  );
}

export function HomeBody() {
  return (
    <div className="d-flex justify-content-center align-items-center home-body">
      <div>
        <h2 className="home-header">Welcome to my Portfolio</h2>
        <p className="home-paragraph">When creativity meets ingenuity</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* <HomeHeader /> */}
      <HomeBody />
    </>
  );
}

export default Home;
