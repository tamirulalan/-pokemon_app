const React = require("react");


function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


class Show extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <div style={styles}>
        <h1>Gotta Catch 'Em All</h1>
        <br/>
        {/* <a href={`/pokemon/id-1`}>Do you want to see next pokemon?</a> */}
        <h2>{cap(pokemon.name)}</h2>
        <img src={pokemon.img} />
        <br/>
        <a href="/pokemon/"><button>Home</button></a>
        
      </div>
    );
  }
}

const styles = {
  color: `#ffffff`,
  backgroundColor: `#000000`,

  createBtn: {
    backgroundColor: "#fff",
    padding: "5px",
    borderRadius: "5px",
    textDecoration: "none",
  },

};

module.exports = Show;
