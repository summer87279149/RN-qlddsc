/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions
} from 'react-native';
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import Catagroy from './Catagroy/Catagroy'
import Home from './Home/Home.js'
import MySetting from './MySetting/MySetting'
import LoginModal from './MySetting/LoginModal'
import New from './New/New'
import ShoppingCart from './Shoppingcart/ShoppingCart'

var {height,width} =  Dimensions.get('window');


//config item of Tab
const HomeStack = createStackNavigator({
  Home: {
    screen:Home,
    navigationOptions: ({ navigation }) => ({
      headerStyle:{//导航栏样式
        backgroundColor:'red'
      },
      headerTitle:<Text style={{color:'white',fontSize:18}}>全了电动商城</Text>//导航栏标题
    }),
  }
});

const CatagroyStack = createStackNavigator({
  Catagroy: {
    screen:Catagroy,
    navigationOptions: ({ navigation }) => ({
      headerStyle:{
        backgroundColor:'red'
      },
      headerTitle:<Text style={{color:'white',fontSize:18}}>分类搜索</Text>
    }),
  }
});

const NewStack = createStackNavigator({
  New: New
});

const ShoppingCartStack = createStackNavigator({
  ShoppingCart: ShoppingCart
});

const MySettingStack = createStackNavigator({
  MySetting: MySetting,
});

const MySettingModalStack = createStackNavigator(
  {
    Main: {
      screen: MySettingStack,
    },
    LoginModal: {
      screen: LoginModal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);


//配置Tab
export default createBottomTabNavigator({

  HomeTab: {
    screen:HomeStack,
    navigationOptions: ({ navigation }) => ({
      title: "首页",
      tabBarIcon:<Image source={require('../Resource/IMG/Tab1.png')} />,
      tabBarOnPress:({navigation,defaultHandler})=>{//点击事件
        defaultHandler();
      }
    }),
  },
  CatagroyTab:{
    screen:CatagroyStack,
    navigationOptions: ({ navigation }) => ({
      title: "分类搜索",
      tabBarIcon:<Image source={require('../Resource/IMG/Tab2.png')}/>,
      tabBarOnPress:({navigation,defaultHandler})=>{//点击事件
        defaultHandler();
      }
    }),
  },
  NewTab:{
   screen:NewStack,
   navigationOptions: ({ navigation }) => ({
    title: "最新揭晓",
    tabBarIcon:<Image source={require('../Resource/IMG/Tab3.png')}/>,
    tabBarOnPress:({navigation,defaultHandler})=>{//点击事件
      defaultHandler();
    }
  }),
  
  },
  ShoppingCartTab:{
   screen:ShoppingCartStack,
   navigationOptions: ({ navigation }) => ({
    title: "购物车",
    tabBarIcon:<Image source={require('../Resource/IMG/Tab4.png')}/>,
    tabBarOnPress:({navigation,defaultHandler})=>{//点击事件
      defaultHandler();
    }
  }),
  },
  MySettingTab:{
    screen:MySettingModalStack,
    navigationOptions: ({ navigation }) => ({
      title: "我的",
      tabBarIcon:({focused,tintColor})=>{
       return(<Image source={focused?require('../Resource/IMG/Tab5.png'):require('../Resource/IMG/Tab1.png')}/> )
      },
      tabBarOnPress:({navigation,defaultHandler})=>{//点击事件
        defaultHandler();
      }
    }),
  }
},{
  initialRouteName:"HomeTab",
  tabBarOptions:{
    activeTintColor:"red",//
    inactiveTintColor:"grey",
  }
});





