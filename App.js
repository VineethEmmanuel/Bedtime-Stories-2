import React from 'react';
import ReadStoryScreen from './screens/ReadScreen';
import WriteStoryScreen from './screens/WriteScreen';
import ScanScreen from './screens/ScanScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read:{screen:ReadStoryScreen},
  Scan:{screen:ScanScreen},
  Write:{screen:WriteStoryScreen}
},

{defaultNavigationOptions : ({navigation})=>({
  tabBarIcon : ()=>{
    const routeName = navigation.state.routeName;

    if(routeName === "ReadStoryScreen"){
      return(
        <Image
          style = {{width:40, height:40}}
          source = {require("./assets/read.png")}
        />
      );
    } else if(routeName === "WriteStoryScreen"){
      return(
        <Image
          style = {{width:40, height:40}}
          source = {require("./assets/write.png")}
        />
      );
    }
  }
})}
);

const AppContainer = createAppContainer(TabNavigator);