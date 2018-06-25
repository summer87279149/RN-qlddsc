import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "全了电动商场",
        } 
      };

  render() {
    return (
      <View>
        <Text> Home </Text>
      </View>
    );
  }
}

export default Home;
