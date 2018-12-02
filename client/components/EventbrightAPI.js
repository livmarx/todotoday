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
    const res = await axios.get('/api/toilets');
    const toilets = res.data;
    console.log('res.date: ', toilets);
    console.log('this.state before setState: ', this.state);
    this.setState({
      toilets: toilets,
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
          <h1>Eventbright API testing</h1>
          <p>DATA HAS BEEN LOADED</p>
          <p>{this.state.toilets}</p>
          {toilets.map(toilet => {
            return (
              <li key={toilet.id}>
                {toilet.id}
                <p>{toilet.address}</p>
              </li>
            );
          })}
          <p> just more </p>
        </div>
      );
    }
  }
}

export default Test;
