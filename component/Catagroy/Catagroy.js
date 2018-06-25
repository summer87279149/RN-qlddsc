import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class Catagroy extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "分类搜索",
        } 
      };
    
    
  render() {
    return (
      <View>
        <Text> Catagroy </Text>
      </View>
    );
  }
}
