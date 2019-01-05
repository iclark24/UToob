import React from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';


class Comments extends React.Components {
  state = { comments: [] };
  //ask Ian

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`api/video/${id}/comments`)
    .then(res => this.setState ({ comments: res.data, }))
  }

  renderComments = () => {
    return this.state.comments.map( c => (
      <Comment key = {c.id} {...c} />
    ))
  }

  render() {
    return(
      <Segment>
        {/* form */}
        {this.renderComments}
      </Segment>
    )
  }

}//end of comments class

export default Comments;