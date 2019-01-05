import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Iframe from 'react-iframe'

class Home extends React.Component {
  render() {
    return (
      <Segment basic>        
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="470px"
                height="250px"
                display="initial"
                position="relative"
                styles={{border: '4px solid black', borderRadius: '5px'}}
                allowFullScreen
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="235px"
                height="125px"
                display="initial"
                position="relative"
                styles={{border: '4px solid black', borderRadius: '5px'}}
                allowFullScreen
              />
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="235px"
                height="125px"
                display="initial"
                position="relative"
                styles={{border: '4px solid black', borderRadius: '5px'}}
                allowFullScreen
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="235px"
                height="125px"
                display="initial"
                position="relative"
                styles={{border: '4px solid black', borderRadius: '5px'}}
                allowFullScreen
              />
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="235px"
                height="125px"
                display="initial"
                position="relative"
                styles={{border: '4px solid black', borderRadius: '5px'}}
                allowFullScreen
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="235px"
                height="125px"
                display="initial"
                position="relative"
                styles={{border: '4px solid black', borderRadius: '5px'}}
                allowFullScreen
              />
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="235px"
                height="125px"
                display="initial"
                position="relative"
                styles={{border: '4px solid black', borderRadius: '5px'}}
                allowFullScreen
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="235px"
                height="125px"
                display="initial"
                position="relative"
                styles={{border: '4px solid black', borderRadius: '5px'}}
                allowFullScreen
              />
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="235px"
                height="125px"
                display="initial"
                position="relative"
                styles={{border: '4px solid black', borderRadius: '5px'}}
                allowFullScreen
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Home;