import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
// import {START_HEIST, START_GETAWAY, } from './Reducer';
import reducer from './Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import Clock from './Clock'
import Heist from './Heist';
import Getaway from './Getaway';
import Reset from './Reset';
import SoundAround from './SoundAround';

// const store = {}
const store = createStore(reducer);

function timerReset() {
  console.log("Hit reset")
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
          <Heist store={store}/>
          <Clock store={store}/>
          <Getaway store={store}/>
        <Reset store={store}/>

      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
