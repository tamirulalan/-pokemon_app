const React = require("react");

class New extends React.Component {
  render() {
      return(
          <div style={body}>
              <h1 style={h1}>New Pokemon</h1>
              <nav>
                  <a href="/pokemon">Pokemon Delete Page</a>
              </nav><br />
              <form action= '/pokemon/${idx}' method='DELETE'>
                  <input type='submit' value='Delete' />
              </form>
          </div>
      )
  }
}

module.exports = New;

