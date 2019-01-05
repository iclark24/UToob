import React from "react";
import axios from "axios";
import { Form, Button} from "semantic-ui-react"

class AddVideoForm extends React.Component{
  state = { title: "", url: "", genre: "", description: "" }

  handleSubmit = (e) => {
    e.preventDefault();
    const video = {...this.state};
    axios.post(`api/videos`, video)
    .then( res => {
      this.props.history.push(`videos`)
    }) 
    

  }

  handleChange = (e) => {
    const { title, value } = e.target;
    this.setState({ [name]: value});
    }

    




  render() {
    const { title, genre, description}
    return (
      <div>
        <h1> Add Video </h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group width="equal">
            <Form.Input
              name="title"
              label="Title"
              placeholder="Title"
              value={title}
              onChange={this.handleChange}
            />
             <Form.Input
              name="url"
              label="url"
              placeholder="Url"
              value={url}
              onChange={this.handleChange}
            />
            <Form.Input
              name="genre"
              label="Genre"
              placeholder="Genre"
              value={genre}
              onChange={this.handleChange}
            />
            <Form.Input
              name="description"
              label="Description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
            
          </Form.Group>
          <Form.Button> Submit </Form.Button>
        </Form>
      </div>
    )
  }
}//end of AddVideoForm

export default AddVideoForm;
