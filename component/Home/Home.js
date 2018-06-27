import React, { Component } from 'react';
import { View, Text,Button  } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../Redux/Actions/userinfo' 

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "全了电动商场",
        } 
      };

  render() {
    return (
      <View>
        <Text> Home 2{this.props.name}</Text>
        <Button onPress={() => this.props.navigation.navigate('LoginModal')}  title="打开登入页"
          color="#fff"> </Button>
      </View>
    );
  }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
    name: state.userinfo.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
      // userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)


