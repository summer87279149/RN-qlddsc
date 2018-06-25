import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

class New extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "最新揭晓",
        } 
      };
  render() {
    return (
      <View>
        <Text> New </Text>
      </View>
    );
  }
}

export default New;
