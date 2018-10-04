import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Input, CardSection, Button, Spinner } from './common/Index';
import { emailChanged, passwordChanged, loginUser } from '../actions/index';
import { connect } from 'react-redux';



class LoginForm extends Component {

    //call action creator
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        //crate action creator
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderError(){
        if(this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                  <Text style={styles.errorTextStyle}>
                    {this.props.error}
                  </Text>
                </View>
            );
        }
    }
    renderButton(){
       if(this.props.loading) {
           return <Spinner size="large" />
       }
       return (
        <Button onPress={this.onButtonPress.bind(this)}>
            Login
        </Button>
       )
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password" 
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    {this.renderError()}
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles={
    errorTextStyle: {
        fontSize: 20,
        alignItems: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error, 
        loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);