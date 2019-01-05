import React from "react";
import axios from "axios";
import { Form, Grid, Header,} from "semantic-ui-react"

class AddVideoForm extends React.Component{
  state = { title: "", url: "", genre: "", description: "" }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const video = {...this.state};
    axios.post(`api/videos`, video)
    .then( res => {
      this.props.history.push(`/`)
    }) 
  }

  handleChange = (e) => {
    const { name, value } = e.target;
      if (name === "url") {
        let newvalue = value.split("watch?v=")
        newvalue = newvalue.join("embed/")
        this.setState({ [name]: newvalue});
      }
      else{
    this.setState({ [name]: value});
      }
    }

    // watch?v=
    
  render() {
    const { title, genre, description, url} = this.state
    return (
      <Grid centered columns="1">
        <Grid.Column width="6">
        <Header as="h1"> Add Video </Header>

          <Form onSubmit={this.handleSubmit}>
              <Form.Input
                name="title"
                label="Title"
                placeholder="Title"
                value={title}
                onChange={this.handleChange}
                required
                />
              <Form.Input
                name="url"
                label="url"
                placeholder="Url"
                value={url}
                onChange={this.handleChange}
                required
                />
              <Form.Input
                name="genre"
                label="Genre"
                placeholder="Genre"
                value={genre}
                onChange={this.handleChange}
                required
                />
              <Form.TextArea
                autoHeight
                name="description"
                label="Description"
                placeholder="Description"
                value={description}
                onChange={this.handleChange}
                required
                />
              
            <Form.Button> Submit </Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}//end of AddVideoForm

export default AddVideoForm;
