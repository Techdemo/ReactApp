import React from "react";

import axios from "axios";

export default class Songs extends React.Component {
  state = {
    songs: []
  };

  componentDidMount() {
    axios.get("http://api.discogs.com/artists/35301/releases").then(res => {
      const songs = res.data.releases;
      this.setState({ songs });
    });
  }

  render() {
    return (
      <ul>
        {this.state.songs.map(song => (
          <li>{song.releases}</li>
        ))}
      </ul>
    );
  }
}

// import React, { Component } from 'react';

// class Songs extends Component {
//   constructor() {
//     super();
//     this.state = {
//       songs: [],
//     };

//   }

//   componentDidMount() {

//     fetch('http://api.discogs.com/artists/35301/releases')
//     .then(results => {
//       return results.json();
//     }).then(data => {
//       // let stats = {...data.releases}
//       // console.log("data", data)
//       console.log("releases", data.releases[0])
//       // console.log(stats)
//       let songs = data.releases.map((songItem, i) => {
//         return(

//             <p key={i}>{songItem.releases}</p>

//           )
//       })
//       this.setState({songs: songs});

//     })
//   }
//   render() {
//     return(

//       <div>
//         <div>
//         {this.state.releases}
//         </div>
//       </div>
//     )
//   }

// }
// export default Songs;
// import React from "react";
// let songs = () => {
//   return <h2>My Songs</h2>;
// };
// export default songs;
