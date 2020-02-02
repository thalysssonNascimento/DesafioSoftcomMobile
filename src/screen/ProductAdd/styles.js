import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
    enable: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
`;

export const FormContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 60px 30px;
`;

export const Form = styled.View`
    align-self: stretch;
`;

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;

export const FormInputMask = styled(InputMask)`
    margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 5px;
    background: #333;
`;

export const SignLink = styled.TouchableOpacity`
    margin-top: 30px;
`;

export const SignLlinkText = styled.Text`
    color: #fff;
    font-size: 13px;
`;

export const TextInforRegister = styled.Text`
    color: #fff;
    font-size: 42px;
    margin-left: 30px;
`;
