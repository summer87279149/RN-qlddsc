import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

class MySetting extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "我的",
        } 
      };
  render() {
    return (
      <View>
        <Text> MySetting </Text>
      </View>
    );
  }
}

export default MySetting;
