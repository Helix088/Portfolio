const year = new Date().getFullYear();
// const month = new Date().getMonth() + 1;
// const day = new Date().getDate();

function Footer() {
  return (
    <div className="footer">
        <p>&copy; {"Chase Patterson " + year}</p>
    </div>
  );
}

export default Footer;