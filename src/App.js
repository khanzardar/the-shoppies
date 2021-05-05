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
        Rated: "PG-13",
        Released: "15 Jun 2005",
        Runtime: "140 min",
        Genre: "Action, Adventure",
        Director: "Christopher Nolan",
        Writer:
          "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        Plot:
          "When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as 'Batman'. But it doesn't stay quiet for long.",
        Language: "English, Mandarin",
        Country: "USA, UK",
        Awards: "Nominated for 1 Oscar. Another 13 wins & 78 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "8.2/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "84%",
          },
          {
            Source: "Metacritic",
            Value: "70/100",
          },
        ],
        Metascore: "70",
        imdbRating: "8.2",
        imdbVotes: "1,327,215",
        imdbID: "tt0372784",
        Type: "movie",
        DVD: "09 Sep 2009",
        BoxOffice: "$206,852,432",
        Production: "Warner Brothers, Di Bonaventura Pictures",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "Harry Potter and the Deathly Hallows: Part 2",
        Year: "2011",
        Rated: "PG-13",
        Released: "15 Jul 2011",
        Runtime: "130 min",
        Genre: "Adventure, Drama, Fantasy, Mystery",
        Director: "David Yates",
        Writer: "Steve Kloves (screenplay), J.K. Rowling (novel)",
        Actors: "Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe",
        Plot:
          "Harry, Ron, and Hermione continue their quest of finding and destroying the Dark Lord's three remaining Horcruxes, the magical items responsible for his immortality. But as the mystical Deathly Hallows are uncovered, and Voldemort finds out about their mission, the biggest battle begins and life as they know it will never be the same again.",
        Language: "English",
        Country: "UK",
        Awards: "Nominated for 3 Oscars. Another 46 wins & 91 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "8.1/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "96%",
          },
          {
            Source: "Metacritic",
            Value: "85/100",
          },
        ],
        Metascore: "85",
        imdbRating: "8.1",
        imdbVotes: "776,303",
        imdbID: "tt1201607",
        Type: "movie",
        DVD: "24 Jul 2014",
        BoxOffice: "$381,409,310",
        Production: "Heyday Films, Moving Picture Company, Warner Bros.",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "Casino Royale",
        Year: "2006",
        Rated: "PG-13",
        Released: "17 Nov 2006",
        Runtime: "144 min",
        Genre: "Action, Adventure, Thriller",
        Director: "Martin Campbell",
        Writer:
          "Neal Purvis (screenplay), Robert Wade (screenplay), Paul Haggis (screenplay), Ian Fleming (novel)",
        Actors: "Daniel Craig, Eva Green, Mads Mikkelsen, Judi Dench",
        Plot:
          "James Bond goes on his first ever mission as a 00. Le Chiffre is a banker to the world's terrorists. He is participating in a poker game at Montenegro, where he must win back his money, in order to stay safe among the terrorist market. The boss of MI6, known simply as M sends Bond, along with Vesper Lynd to attend this game and prevent Le Chiffre from winning. Bond, using help from Felix Leiter, Mathis and having Vesper pose as his partner, enters the most important poker game in his already dangerous career. But if Bond defeats Le Chiffre, will he and Vesper Lynd remain safe?",
        Language: "English, Serbian, German, Italian, French",
        Country: "UK, Czech Republic, USA, Germany, Bahamas",
        Awards: "Won 1 BAFTA Film Award. Another 26 wins & 44 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "8.0/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "94%",
          },
          {
            Source: "Metacritic",
            Value: "80/100",
          },
        ],
        Metascore: "80",
        imdbRating: "8.0",
        imdbVotes: "587,174",
        imdbID: "tt0381061",
        Type: "movie",
        DVD: "30 Nov 2016",
        BoxOffice: "$167,445,960",
        Production:
          "Eon Productions Ltd., Sony Pictures Entertainment, Metro-Goldwyn-Mayer",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "Blood Diamond",
        Year: "2006",
        Rated: "R",
        Released: "08 Dec 2006",
        Runtime: "143 min",
        Genre: "Adventure, Drama, Thriller",
        Director: "Edward Zwick",
        Writer:
          "Charles Leavitt (screenplay), Charles Leavitt (story), C. Gaby Mitchell (story)",
        Actors:
          "Leonardo DiCaprio, Djimon Hounsou, Jennifer Connelly, Kagiso Kuypers",
        Plot:
          "A story following Archer, a man tortured by his roots. With a strong survival instinct, he has made himself a key player in the business of conflict diamonds. Political unrest is rampant in Sierra Leone as people fight tooth for tooth. Upon meeting Solomon, and the beautiful Maddy, Archer's life changes forever as he is given a chance to make peace with the war around him.",
        Language: "English, Mende, Afrikaans",
        Country: "USA, Germany, UK",
        Awards: "Nominated for 5 Oscars. Another 8 wins & 27 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZDMxOGZhNWYtMzRlYy00Mzk5LWJjMjEtNmQ4NDU4M2QxM2UzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "8.0/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "63%",
          },
          {
            Source: "Metacritic",
            Value: "64/100",
          },
        ],
        Metascore: "64",
        imdbRating: "8.0",
        imdbVotes: "505,332",
        imdbID: "tt0450259",
        Type: "movie",
        DVD: "30 Nov 2008",
        BoxOffice: "$57,377,916",
        Production:
          "Virtual Studios, Warner Bros., Bedford Falls Productions, Spring Creek Productions",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "The League of Extraordinary Gentlemen",
        Year: "2003",
        Rated: "PG-13",
        Released: "11 Jul 2003",
        Runtime: "110 min",
        Genre: "Action, Adventure, Fantasy, Sci-Fi",
        Director: "Stephen Norrington",
        Writer:
          "Alan Moore (comic books), Kevin O'Neill (comic books), James Robinson (screenplay)",
        Actors: "Sean Connery, Naseeruddin Shah, Peta Wilson, Tony Curran",
        Plot:
          'Renowned adventurer Allan Quatermain leads a team of extraordinary figures with legendary powers to battle the technological terror of a madman known as "The Fantom." This "League" comprises seafarer/inventor Captain Nemo, vampiress Mina Harker, an invisible man named Rodney Skinner, American secret service agent Tom Sawyer, the ageless and invincible Dorian Gray, and the dangerous split personality of Dr. Jekyll/Mr. Hyde.',
        Language: "English, German, Italian",
        Country: "USA, Germany, Czech Republic, UK",
        Awards: "12 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZTFlOTdkMjEtNGVmMS00YTA3LThlNjQtMjAzZmFjZDAzNjllL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "5.8/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "17%",
          },
          {
            Source: "Metacritic",
            Value: "30/100",
          },
        ],
        Metascore: "30",
        imdbRating: "5.8",
        imdbVotes: "169,368",
        imdbID: "tt0311429",
        Type: "movie",
        DVD: "25 Nov 2015",
        BoxOffice: "$66,465,204",
        Production: "20th Century Fox",
        Website: "N/A",
        Response: "True",
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
    let nomination = this.props.nomination;
    return (
      <div style={{ ...defaultStyle, display: "inline-block", width: "20%" }}>
        <img />
        <h4>
          {nomination.Title} ({nomination.Year})
        </h4>
        <h5>Staring: {nomination.Actors}</h5>
        <ul>
          {nomination.Ratings.map((rating) => {
            return (
              <li>
                {rating.Source} ({rating.Value})
              </li>
            );
          })}
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
            {/* This is broken */}
            <Aggregate nominations={this.state.serverData.user.nominations} />
            {this.state.serverData.user.nominations &&
              this.state.serverData.user.nominations.map((nomination) => {
                return <Nomination nomination={nomination} />;
              })}
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
