import React from "react";
import axios from "axios";
import { Segment } from "semantic-ui-react";

class MyVideos_test extends React.Component {
  state = { videos: [], };

  componentDidMount() {
    axios.get("/api/my_videoss")
      .then( res => this.setState({ videos: res.data, }));
  }

  render() {
    const { videos, } = this.state;
    return (
      <div>
        { videos.map( video => 
          <Link to = '/api/video/${id}' style = {{zIndex: '2'}}>
            <Iframe url={video.url}
              key={video.id}
              width="235px"
              height="125px"
              display="initial"
              position="relative"
              styles={{paddingBottom: '20px', background: '#ce3740'}}
              />
          </Link>
      )    
        }    
      </div>
    )
  }
}

export default MyVideos_test;