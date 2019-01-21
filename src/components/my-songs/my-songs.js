// import React, { Component } from "react";
//
// export class Songs extends Component {
//   constructor() {
//     super();
//     this.state = {
//       songs: [],
//     };
//
//   }
//
//   componentDidMount() {
//     fetch(
//       "/2.0/?method=artist.gettoptracks&artist=cher&api_key=119bb6505a324ff18e87c96e272b28ce&format=json"
//     ).then(results => {
//         return results.json();
//       }).then(data => {
//         let songs = data.results.map((artist => {
//           return (
//             <div key={artist.results}>
//               <p>hallo</p>
//             </div>
//           )
//         })
//         this.setState({ songs: songs });
//         console.log("state", this.state.songs);
//       });
//   }
//
//   render() {
//     return <div>{this.state.songs}</div>;
//   }
//
//   // API key	119bb6505a324ff18e87c96e272b28ce
//   // Shared secret	69b8cb14286bd33bb59e2eb1efe22839
// }
// export default Songs;

import React from "react";
let songs = () => {
  return <h2>My Songs</h2>;
};
export default songs;
