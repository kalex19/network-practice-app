import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getArtists} from './apicall';
import {addArtists} from './actions';

export class App extends Component {

  async componentDidMount(){
    const artists = await getArtists();
    this.props.addArtists(artists);
  }

  render() {
    const artists = this.props.artists.map(artist => {
      return (
        <div>
          <p>
            {artist.name}
          </p>
          <p>
            {artist.song}
          </p>
        </div>
      )
    })
    return (
      <div>
        {artists}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  artists: state.artists
});

const mapDispatchToProps = (dispatch) => ({
  addArtists: artists => dispatch(addArtists(artists))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
