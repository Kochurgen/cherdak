import {ScrollView} from 'react-native';
import styled from 'styled-components';

interface IBlock{
    width?: String
    height?: String
    background?: String
}

export default styled(ScrollView)<IBlock>`
   width: ${(props:any)=>(props.width? props.width: '100%')};
   height: ${(props:any)=>(props.width? props.width: '100%')};
   background-color: ${(props:any)=>(props.background? props.background: '#ffffff')};
`
