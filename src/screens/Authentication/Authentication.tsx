import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as firebase from 'firebase'
import React from 'react';
import SignIn from '../../modules/SignIn/SignIn';
import SignUp from '../../modules/SignUp/SignUp';

const Tab = createMaterialTopTabNavigator();
const credentials = {
    appId: '343509919719',
    apiKey: 'AIzaSyCZ5iju9HHEsYOQlc9T56YIOxgxY2tL3Ug',
    projectId: 'cherdak-89168',
};

try {
    if (credentials.apiKey) {
        firebase.initializeApp(credentials);
    }
} catch (err) {
    // ignore app already initialized error on snack
}

const config = {
    name: 'cherdak',
};
export default () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"SignIn"} component={SignIn}/>
            <Tab.Screen name={"SignUp"} component={SignUp}/>
        </Tab.Navigator>
    )
}

// const verificationCodeTextInput = React.useRef(null);
// const [phone, setPhone] = useState('')
// const [verificationId, setVerificationId] = useState('')
// const [verificationCode, setVerificationCode] = useState('')
// const isConfigValid = !!credentials.apiKey;
// const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//     "recaptcha-container", {
//         size: "invisible"
//     }
// );

// <View>
//     <Text>Phone number</Text>
//     <TextInput
//         style={styles.textInput}
//         autoFocus={isConfigValid}
//         autoCompleteType="tel"
//         keyboardType="phone-pad"
//         textContentType="telephoneNumber"
//         placeholder="+1 999 999 9999"
//         editable={!verificationId}
//         onChangeText={(phoneNumber: string) => setPhone(phoneNumber)}
//     />
//     <Button
//         title={'auth phone number'}
//         onPress={()=>{}}/>
//     <Text>sms code</Text>
//     <TextInput
//         ref={verificationCodeTextInput}
//         style={styles.textInput}
//         editable={!!verificationId}
//         placeholder="123456"
//         onChangeText={(verificationCode: string) => setVerificationCode(verificationCode)}
//     />
//     <View ref={"recaptcha-container"} />
// </View>
// )
