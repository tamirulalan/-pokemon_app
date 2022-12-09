const React = require("react");


function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={styles}>
        <h1>See All The Pokemon</h1>
        <nav>
          <a href="/pokemon/new">Create a New Pokemon</a>
        </nav>
        {console.log(pokemon)}
        <ul>
          {pokemon.map((pokemon, idx) => (
            <li key={idx}>
              <img style={img} src={pokemon.img} />
              <br/>
              <a href={`/pokemon/${pokemon.id}`}>{cap(pokemon.name)}</a>
              <br/>
              
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  color: `#ffffff`,
  backgroundColor: `#9AAF9C`,
};
 const img ={
  width: '300px',
  height:'300px'
 }
module.exports = Index;
