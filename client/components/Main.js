import React from 'react';
import Map from './Map';
import EventbrightAPI from './EventbrightAPI';

import axios from 'axios';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Map /> */}
        <EventbrightAPI />
      </div>
    );
  }
}
