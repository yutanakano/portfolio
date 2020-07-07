import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            © {new Date().getFullYear()},
            {` `}
            yutanakano
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
