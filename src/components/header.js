import React, {useState} from "react"

import Logo from "../images/logo.svg"

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://yutanakano.net/">
            <img src={ Logo } alt="永久機関" />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setToggle(!toggle)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={toggle ? "is-active" : "navbar-menu"}>
          <div className="navbar-start">
            <div className="navbar-item">
              <a className="/">Home</a>
            </div>

            <div className="navbar-item">
              <a href="https://in-field.dev" rel="noopener" target="_blank">Request</a>
            </div>

            <div className="navbar-item">
              <a href="https://peing.net/ja/yutanakano_net" rel="noopener" target="_blank">Question</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header
