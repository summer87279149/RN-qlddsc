import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

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
        <Text> Home </Text>
      </View>
    );
  }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
    // userinfo: state.userinfo
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


