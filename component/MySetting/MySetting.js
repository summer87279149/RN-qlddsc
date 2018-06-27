import React, { Component } from 'react';
import { View, Text,Button  } from 'react-native';

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
        <Button onPress={() => this.props.navigation.navigate('LoginModal')}  title="打开登入页"
          color="#fff"> </Button>
      </View>
    );
  }
}

export default MySetting;
