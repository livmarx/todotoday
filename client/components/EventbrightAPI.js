import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchToilets, fetchUsers } from '../store/reducer';

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
    this.props.fetchToilets();
    this.props.fetchUsers();

    ///// BEFORE REDUX:
    // const resT = await axios.get('/api/toilets');
    // const resU = await axios.get('/api/users');
    // const toilets = resT.data;
    // const users = resU.data;
    // console.log('res.date: ', toilets);
    // console.log('this.state before setState: ', this.state);

    // this.setState({
    //   toilets,
    //   users,
    //   isLoaded: true,
    // });

    // console.log('this.state after setState: ', this.state);
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
          {this.props.toilets.map(toilet => {
            return (
              <div key={toilet.id}>
                ID: {toilet.id}, Address: {toilet.address}
              </div>
            );
          })}
          <br />
          <h4>Users:</h4>
          {this.props.users.map(user => {
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

const mapStateToProps = state => {
  return { toilets: state.toilets, users: state.users };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
    fetchToilets: () => {
      dispatch(fetchToilets());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
