import {Input} from '../../components/Inputs';
import {ButtonText} from '../../components/Buttons';
import {BlockContentScroll, BlockContent} from '../../components/Blocks';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import * as firebase from 'firebase';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function authorization(){
        let result = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(result)
    }
    return (
        <ScrollView contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffffff'
        }}>
            <Input placeholder={'write email'}/>
            <Input placeholder={'write password'}/>
            <Input placeholder={'confirm password'}/>
            <ButtonText/>
        </ScrollView>
    )
}
