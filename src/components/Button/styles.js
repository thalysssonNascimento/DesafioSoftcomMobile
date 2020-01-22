import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    height: 46px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    margin: 30px 0;

    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;
