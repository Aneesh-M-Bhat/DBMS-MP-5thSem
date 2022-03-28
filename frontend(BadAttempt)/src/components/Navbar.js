const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Library Management System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => {
                  props.setCurrPage(0);
                }}
              >
                Home
              </a>
              <a
                className="nav-link "
                href="#"
                onClick={() => {
                  props.setCurrPage(1);
                }}
              >
                Books
              </a>
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  props.setCurrPage(2);
                }}
              >
                Users
              </a>
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  props.setCurrPage(3);
                }}
              >
                Subjects
              </a>
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  props.setCurrPage(4);
                }}
              >
                E-Library
              </a>
            </div>
            <button className="btn bg-warning">Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
