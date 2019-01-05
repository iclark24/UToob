import React from 'react';
import { Segment, Grid, Header, Divider, Icon} from 'semantic-ui-react';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';
import axios from "axios";


class Home extends React.Component {
  state = { videos: []};

  componentDidMount() {
    axios.get("/api/videos")
      .then( res => this.setState({ videos: res.data, }));
  }

  render() {
    const { videos, } = this.state;
    return (
      <Segment basic> 
        <Header as = 'h2'>All Videos</Header> 
        <Grid >
            <Grid.Column width={8}>
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="537px"
                height="254px"
                display="initial"
                position="relative"
                allowFullScreen
              >
              </Iframe>
            </Grid.Column>
            { videos.map( video => 
            <Grid.Column width={4}>
              <Link to = {`/videos/${video.id}`} style = {{zIndex: '2', color: 'black'}}>
                <Iframe url={video.url}
                  key={video.id}
                  width="255px"
                  height="125px"
                  display="initial"
                  position="relative"
                  />
                  <br />
                <p>{video.title}</p>
                <Divider/>
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