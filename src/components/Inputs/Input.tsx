import styled from 'styled-components/native';
import {TextInput} from 'react-native';

interface ITextInput{
    width?: String
    height?: String
}

export default styled(TextInput)<ITextInput>`
    font-size: 15px;
    border-radius: 5px;
    border-color: #000000;
    border-width: 2px;
    height: 60px;
    margin-bottom: 20px;
    width: 70%;
    padding: 10px;
    font-size: 20px;
`
