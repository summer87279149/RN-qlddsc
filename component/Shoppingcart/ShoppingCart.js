import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

class ShoppingCart extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "购物车",
        } 
      };
  render() {
    return (
      <View>
        <Text> ShoppingCart </Text>
      </View>
    );
  }
}

export default ShoppingCart;
