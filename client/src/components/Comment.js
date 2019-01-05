import React from 'react';
import axios from 'axios';
import { Item } from 'semantic-ui-react';

class Comment extends React.Component {
  state = {comment: [] };
   
  render() {
    const { title, body } = this.state.comment;
    return (
      <Item>
        <Item.Header> {title} </Item.Header>
        <Item.Content> {body} </Item.Content>
      </Item>
    )
  }


}//end of comment class

export default Comment;