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
                styles={{borderRadius: "50px"}}
                allowFullScreen
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="470px"
                height="250px"
                display="initial"
                position="relative"
                allowFullScreen
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="470px"
                height="250px"
                display="initial"
                position="relative"
                allowFullScreen
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="470px"
                height="250px"
                display="initial"
                position="relative"
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