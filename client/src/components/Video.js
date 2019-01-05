import React, {Fragment} from "react";
import axios from 'axios';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';


import CommentForm from './CommentForm';
import { Card, Header, Grid, Segment, GridColumn } from 'semantic-ui-react';

class Video extends React.Component {
  state = { video: {},};

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ video: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
  }

toggleForm = () => {
  this.setState({ showform: !this.state.showForm})
}

addComment = (comment) => {
  this.setState({ comments: [comment, ...this.state.comments]})
}

render(){
  const { url, title, genre, description} = this.state.video
  return(
    <Fragment>
       <Grid centered>
        <Grid.Column width={16}>
          <Iframe url={url}
            width="100%"
            height="600px"
            display="initial"
            position="relative"
            styles={{border: '1px solid black', borderRadius: '3px'}}
            allowFullScreen
          >
          </Iframe>
        </Grid.Column>
        <GridColumn width={14}>
          <Segment>
            <Header>{title}</Header>
          </Segment>
        </GridColumn>
      </Grid>
    {/* <Comments id={video.id}/> */}


    </Fragment>
  )



}

} //end of video component

export default Video;