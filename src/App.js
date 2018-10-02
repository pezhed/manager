import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers  from './reducer/index';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAdOOyhy8W1otGeEUh4MpFVw4Brok1eQvM",
            authDomain: "manager-92422.firebaseapp.com",
            databaseURL: "https://manager-92422.firebaseio.com",
            projectId: "manager-92422",
            storageBucket: "manager-92422.appspot.com",
            messagingSenderId: "388049239395"
          };
          firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;