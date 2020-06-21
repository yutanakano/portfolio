import React from "react"

const Main = ({ children }) => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-two-thirds content">{children}</div>
            <div className="column">
              <div className="has-background-light has-text-centered">フリースペース</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Main
