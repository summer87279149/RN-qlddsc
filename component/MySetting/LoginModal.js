import React, { Component } from 'react';
import {  View, Text, Button} from 'react-native';

export default class ModalScreen extends Component {
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>这是登入页面</Text>
            <Button
              onPress={() => this.props.navigation.goBack()}
              title="Dismiss"
            />
          </View>
        );
      }
}
