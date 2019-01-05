import React from 'react';
import {Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div>
    <Header as = 'h2' textAlign = 'center'>404 page not found</Header>
    <Link to = '/'>Go Back.</Link>
  </div>
)

export default NoMatch;