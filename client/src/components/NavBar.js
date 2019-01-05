import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image, Button, } from "semantic-ui-react";
import { Link, withRouter, } from "react-router-dom";

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location: { pathname, }, history, } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item 
            name="Logout"
            onClick={() => handleLogout(history)}
          />
          <Link to="/newvideo">
            <Menu.Item 
              name="Upload"
              id="Upload"
              active={pathname === "/newvideo"}
            />
          </Link>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item 
              id="login"
              active={pathname === "/login"}
            >
              <Image src = 'https://resources-live.sketch.cloud/files/6f304d0b-fd53-4d76-8fa4-3bbd49f2b696.png?Expires=1546909200&Signature=CGX0fIpxcwKnunygRUi6~XtywN5cWlPvPbE6LwbsQ4vkThCZc2QnS8lFFSSUTzVt9orE2QcSp2QKmNGIkf2bG8aZe3g8nuZfObMw~LCSRceuozouSImDuS7vh6wfmNnQKNWOCX~YkwIPxMrZcBCRFm-fkaPG6yLbMZ06KAtw3JY_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA' 
                style = {{height: '35px', borderRadius: '100px'}}
              />
            </Menu.Item>
          </Link>
          <Link to="/register">
            <Menu.Item 
              id="register"
              active={pathname === "/register"}
            >
              <Button style = {{marginTop: '1px', background: '#ce373e', color: 'white'}}>Register</Button>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div style = {{background: '#f7f7f7'}}>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              id="home"
              active={this.props.location.pathname === "/"}
            >
              <Image src = 'https://resources-live.sketch.cloud/files/0c691bf6-95ea-4f35-ad3e-46e842eefe7b.png?Expires=1546909200&Signature=UNx0lAa3GKjpz5u5ZAoMyRbNAZkWOoLWiQLrE4r~jETVueZI9vIYFV0-RLIR1i-Utj8iR7RZHxPu4runYYP7WFyp0liK0Bs0IlTah7fiNmXJjtKGCjUwBaWYs-ebANpHJN~s-~MEVi9VCdYKnDjR9YW67IJsJoud8s7GjpCedac_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA'
                style = {{height: '35px'}} 
              />
            </Menu.Item>
          </Link>          
          { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);