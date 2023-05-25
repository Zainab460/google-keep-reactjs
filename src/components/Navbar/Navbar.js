import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
      <div className="nav-items">
        <div className="logo-section">
          <div className="nav-more hover">
            <div className="tooltip">
              <svg viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
              <span className="tooltip-text">Main menu</span>
            </div>
          </div>

          <div className="nav-logo">
            
              <img
                src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                alt = ""
                target="_blank"
              />
            <span>Keep</span>
          </div>
        </div>

        <div className="search-bar">
          <div className="search">
            <form>
              <button className="question">
                <div className="circle">
                  <svg viewBox="0 0 24 24">
                    <g>
                      <path
                        d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </button>

              <div className="to-search">
                <input type="text" placeholder="Search" />
              </div>
            </form>
          </div>
        </div>

        <div className="settings-section">
          <div className="tooltip">
            <span>
              <i className="material-symbols-outlined hover">refresh</i>
            </span>
            <span className="tooltip-text">Refresh</span>
          </div>
          <div className="tooltip">
            <span>
              <i className="material-symbols-outlined hover">view_agenda</i>
            </span>
            <span className="tooltip-text">List view</span>
          </div>

          <div className="tooltip">
            <span>
              <i className="material-symbols-outlined hover">settings</i>
            </span>
            <span className="tooltip-text">Settings</span>
          </div>
        </div>
        <div className="account-profile">
          <div className="grid">
            <div className="g-options hover">
             
                <div className="tooltip">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                    ></path>
                  </svg>
                  <span className="tooltip-text">Google apps</span>
                </div>
            </div>
          </div>

          <div className="personal-login">
            <div className="login-details hover tooltip">
              
            <span>
              <i className="material-symbols-outlined hover">account_circle</i>
            </span>
                <span className="tooltip-text">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Navbar;