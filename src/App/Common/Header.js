function Header() {
  const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="fs-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
            </svg>
          </div>
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
            ) : (
              <h3>School Search</h3>
            )
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
