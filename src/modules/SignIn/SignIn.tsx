import React, {useEffect, useState, useRef} from 'react';
import * as firebase from 'firebase'
import {ButtonText} from '../../components/Buttons';
import {Input} from '../../components/Inputs';
import {BlockContent} from '../../components/Blocks';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

export default ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function authorization(){
       let result = await firebase.auth().signInWithEmailAndPassword(email, password);
       console.log(result)
    }
    return (
        <BlockContent>
            <Input
                onChangeText={(email:string)=>{setEmail(email)}}
                placeholder={'write mobile or email'} />
            <Input
                onChangeText={(password:string)=>{setPassword(password)}}
                placeholder={'password'} />
            <ButtonText onPress={authorization} />
        </BlockContent>
    )
}
