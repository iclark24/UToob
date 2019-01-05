import React from 'react';
import {Header, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <Segment basic>
    <Header as = 'h2' textAlign = 'center'>404 page not found</Header>
    <Link to = '/'>Go Back.</Link>
  </Segment>
)

export default NoMatch;