import styled from 'styled-components/native';
import {Text} from 'react-native';

export default styled(Text)`
    color: ${(props:any) => (props.color? props.color: '#ffffff') }
`
