const Footer = () => {

  const reset = {
    textDecoration: "none",
    color: "black"
  }

  return (
    <footer className="container mt-5">
    <p className="float-end"><a href="#" style={reset}>WEATHEROBE</a></p>
    <p>&copy; 2017–2023 Company, Inc. &middot; <a href="#" style={reset}>Privacy</a> &middot; <a href="#" style={reset}>Terms</a></p>
  </footer>
  )
}

export default Footer;