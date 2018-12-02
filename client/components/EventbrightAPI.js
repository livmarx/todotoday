import React from 'react';
import axios from 'axios';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      toilets: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const resT = await axios.get('/api/toilets');
    const resU = await axios.get('/api/users');
    const toilets = resT.data;
    const users = resU.data;
    console.log('res.date: ', toilets);
    console.log('this.state before setState: ', this.state);

    this.setState({
      toilets,
      users,
      isLoaded: true,
    });

    console.log('this.state after setState: ', this.state);
  }

  render() {
    const { isLoaded, toilets, users } = this.state;
    if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      return (
        <div>
          <h1>Flush</h1>
          <p>DATA HAS BEEN LOADED!</p>
          <br />
          <h4>Toilets:</h4>
          {toilets.map(toilet => {
            return (
              <div key={toilet.id}>
                ID: {toilet.id}, Address: {toilet.address}
              </div>
            );
          })}
          <br />
          <h4>Users:</h4>
          {users.map(user => {
            return (
              <div key={user.id}>
                ID: {user.id}, Name: {user.name}
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Test;
