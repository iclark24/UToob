import React from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react"

class CommentForm extends React.Component {
  state = {title: "", body: "", }

  componentDidMount() {
    const {id, commentId } = this.props.match.params;
    if (commentId)
      axios.get(`api/videos/${id}/comments/${commentId}`)
        .then( res => {
          const { title, body } = res.data
          this.setState({ title, body })
        })
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState ({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { match: {params: {id, commentId }}, history: {push} } = this.props;
    if (departmentId) {
      axios.put(`/api/videos/${id}/comments/${commentId}`, {...this.state})
       .then(res => push (`/videos/${id}`))
    }
      else {
        axios.post(`/api/videos/${id}/comments`, {...this.state})
        .then( res => push(`/videos/${id}`))
      }
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1> Add Comment </h1>
          <Form onSubmit = {this.handlesubmit}>
            <Form.Group>
            <Form.Input
              name="title"
              placeholder="Title"
              label="Title"
              required
              value={title}
              onChange={this.handleChange}
              required
            />
             <Form.TextArea
              autoHeight
              name="comment"
              label="Comment"
              placeholder="Comment"
              value={comment}
              onChange={this.handleChange}
              required
            />
            </Form.Group>
            <Form.Button> Post </Form.Button>

          </Form>
      </div>
      
    )
  }
}

export default CommentForm;