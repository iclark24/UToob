import React from "react";
import axios from 'axios';
import CommentForm from './CommentForm';
import { Card, Button, Grid } from 'semantic-ui-react';

class Video extends React.Component {
  state = { video: {}, comments: [] };

//  componentDidMount() {
//    const { videoId, id } = this.props.match.params;
//    axios.get
//  }

toggleForm = () => {
  this.setState({ showform: !this.state.showForm})
}

addComment = (comment) => {
  this.setState({ comments: [comment, ...this.state.comments]})
}

removeComment


} //end of video component

export default Video;