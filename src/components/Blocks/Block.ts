import styled from 'styled-components/native';
import {View} from 'react-native';

interface IBlock{
    width?: String
    height?: String
    background?: String
}

export default styled(View)<IBlock>`
   width: ${(props:any)=>(props.width? props.width: '100%')};
   height: ${(props:any)=>(props.width? props.width: '100%')};
   background-color: ${(props:any)=>(props.background? props.background: '#ffffff')};
`
