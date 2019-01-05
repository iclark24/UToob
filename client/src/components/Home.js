import React from 'react';
import { Segment, Grid, Header} from 'semantic-ui-react';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';
import axios from "axios";


class Home extends React.Component {
  state = { videos: [],};

  componentDidMount() {
    axios.get("/api/videos")
      .then( res => this.setState({ videos: res.data, }));
  }

  render() {
    const { videos, } = this.state;    return (
      <Segment basic> 
        <Header as = 'h2'>All Videos</Header> 
        <Grid >
            <Grid.Column width={8}>
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="515px"
                height="254px"
                display="initial"
                position="relative"
                styles={{border: '1px solid black', borderRadius: '3px'}}
                allowFullScreen
              >
              </Iframe>
                <Link to = '/api/video/:id'>Title</Link>
            </Grid.Column>
            { videos.map( video => 
            <Grid.Column width={4}>
              <Link to = {`/videos/${video.id}`} style = {{zIndex: '2'}}>
                <Iframe url={video.url}
                  key={video.id}
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#ce3740'}}
                  />
              </Link>

          </Grid.Column>
              )    
              }
        </Grid>
      </Segment>
    )
  }
}

export default Home;