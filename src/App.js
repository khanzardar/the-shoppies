import "./App.css";
import React from "react";
import { buildQueries } from "@testing-library/dom";

let defaultStyle = {
  color: "blue",
};

let fakeServerData = {
  user: {
    name: "Zardar",
    nominations: [
      {
        Title: "Batman Begins",
        Year: "2005",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "Harry Potter and the Deathly Hallows: Part 2",
        Year: "2011",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      },
      {
        Title: "Jatt James Bond",
        Year: "2014",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOWVmNjQ2YmYtY2M4ZS00NDdkLTljZmUtYTZkNmNjM2FhMWU3XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
      },
      {
        Title: "Blood Diamond",
        Year: "2006",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZDMxOGZhNWYtMzRlYy00Mzk5LWJjMjEtNmQ4NDU4M2QxM2UzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
      },
      {
        Title: "The League of Extraordinary Gentlemen",
        Year: "2003",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZTFlOTdkMjEtNGVmMS00YTA3LThlNjQtMjAzZmFjZDAzNjllL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
    ],
  },
};

class Aggregate extends React.Component {
  render() {
    return (
      <div>
        {
          <h4>
            You have {this.props.nominations && this.props.nominations.length}{" "}
            nominations
          </h4>
        }
      </div>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <h3 style={{ color: "purple" }}>Search for nominations:</h3>
        <img />
        <input type="text" />
        <a
          style={{
            "box-shadow": "-3px 5px",
            padding: "0.6rem 1rem",
            border: "3px solid",
            "font-weight": "600",
          }}
        >
          Search
        </a>
      </div>
    );
  }
}

class Result extends React.Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display: "inline-block", width: "25%" }}>
        <h4>Movie Name (####)</h4>
        Nominate
      </div>
    );
  }
}

class Nomination extends React.Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display: "inline-block", width: "20%" }}>
        <img />
        <h4>Movie Name (####)</h4>
        <ul>
          <li>Actor 1</li>
          <li>Actor 2</li>
          <li>Actor 3</li>
        </ul>
        Remove
        <h5>Search for merchandise</h5>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { serverData: {} };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <h1 style={{ color: "greenyellow" }}>The Shoppies</h1>
        {this.state.serverData.user ? (
          <div>
            <h2>{this.state.serverData.user.name}'s Nominations:</h2>
            <Aggregate nominations={this.state.serverData.user.nominations} />
            <Nomination />
            <Nomination />
            <Nomination />
            <Nomination />
            <Nomination />
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
        <Search />
        <h2>Results for "search-term"</h2>
        <Result />
        <Result />
        <Result />
      </div>
    );
  }
}

export default App;
