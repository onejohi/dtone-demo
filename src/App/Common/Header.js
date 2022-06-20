function Header() {
  const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap flex-row-reverse">

          {
            userData ? (
              <div className="dropdown text-end">
                <a href={userData.imageUrl} className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img
                    src={userData.imageUrl}
                    alt={userData.givenName}
                    width="32"
                    height="32"
                    className="rounded-circle" />
                </a>
                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div>
            ) : ('')
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
