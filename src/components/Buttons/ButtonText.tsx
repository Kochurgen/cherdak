import Button from './Button';
import React from 'react';
import {TypographyButtonTitle} from '../Typographys';
import styled from 'styled-components';

const ButtonText = styled(Button)`
    background-color: #0f0dcf;
    height: 60px;
    flex-direction: column;
    justify-content: center;
`
interface IButtonProps{
    onPress?: any
}

const TextButton: React.FC<IButtonProps>=({onPress}:any)=>{
    return(
        <ButtonText onPress={onPress}>
            <TypographyButtonTitle>Sign In</TypographyButtonTitle>
        </ButtonText>
    )
}

export default TextButton;
