import React from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';
import CommentForm from './CommentForm';


class Comments extends React.Components {
  state = { comments: [] };
 

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`api/video/${id}/comments`)
    .then(res => this.setState ({ comments: res.data, }))
  }

  addComment = (comment) => {
    this.setState({ comments: [comment, ...this.state.comments],})
  }


  renderComments = () => {
    return this.state.comments.map( c => (
      <Comment key = {c.id} {...c} />
    ))
  }

  render() {
    return(
      <Segment>
        <h1 style={{ textAlign: "center", color: "#be4345", fontSize: "3em" }}>Comments</h1>
        {this.renderComments()}
      </Segment>
    )
  }

}//end of comments class

export default Comments;