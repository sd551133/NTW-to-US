import React, {Component} from 'react';
import AppRegistry from 'react-native';
import RootViewController from './ViewController/RootViewController';
export default class App extends Component{
    constructor(props){
        super(props);
        this.rootController = new RootViewController();
    }
    render(){
        return this.rootController.render();
    }
}
//AppRegistry.registerComponent('App', ()=> App);

