import React from 'react';
import { Segment, Grid, Header} from 'semantic-ui-react';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <Segment basic> 
        <Header as = 'h2'>All Videos</Header> 
        <Grid>
          <Grid.Row>
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
            <Grid.Column width={4}>
              <Link to = '/register' style = {{zIndex: '2'}}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
              <Link to = '/register' style = {{zIndex: '2'}}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
            </Grid.Column>
            <Grid.Column width={4}>
            <Link to = '/register' style = {{zIndex: '2'}}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
              <Link to = '/register' style = {{zIndex: '2'}}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
            <Link to = '/register' style = {{zIndex: '2'}}>
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
              <Link to = '/register' style = {{zIndex: '2'}}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
            </Grid.Column>
            <Grid.Column width={4}>
              <Link to = '/register' style = {{zIndex: '2'}}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
              <Link to = '/register' style = {{zIndex: '2'}}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
            </Grid.Column>
            <Grid.Column width={4}>
              <Link to = '/register' style = {{zIndex: '2'}}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
              <Link to = '/register' style = {{zIndex: '2'}}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
            </Grid.Column>
            <Grid.Column width={4}>
            <Link to = '/register' style = {{zIndex: '2'}}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
              <Link to = '/register' style = {{zIndex: '2'}}>
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  width="235px"
                  height="125px"
                  display="initial"
                  position="relative"
                  styles={{paddingBottom: '20px', background: '#d3d3d3'}}
                />
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Home;