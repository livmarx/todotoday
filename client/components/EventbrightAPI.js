import React from 'react';
import axios from 'axios';

class EventbrightAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          user: json,
        });
      });
  }

  render() {
    const { isLoaded, users } = this.state;
    if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      return (
        <div className="eventbright">
          <h1>Eventbright API testing</h1>
          <p>DATA HAS BEEN LOADED</p>
          <p>{users}</p>
          {users.map(user => {
            return <li key={user.id}>user.name</li>;
          })}
          <p> just more </p>
        </div>
      );
    }
  }
}

export default EventbrightAPI;
