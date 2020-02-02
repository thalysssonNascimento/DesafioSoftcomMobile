import React, { useRef, useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Background from '../../components/Background';
import logo from '../../assets/logoRegister.png';
import { signUpRequest } from '../../store/modules/auth/actions';

import {
    TextInforRegister,
    FormContainer,
    Form,
    FormInput,
    FormInputMask,
    SubmitButton,
    SignLink,
    SignLlinkText,
} from './styles';

// eslint-disable-next-line react/prop-types
export default function SignIn({ navigation }) {
    const dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();
    const cnpjRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector(state => state.auth.loading);

    function handleSubmit() {
        dispatch(signUpRequest(name, email, cnpj, password));
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#F36E90" />
            <Background>
                <Image
                    style={{ width: 200, height: 100, marginLeft: 30 }}
                    source={logo}
                />

                <TextInforRegister>Crie sua conta</TextInforRegister>

                <FormContainer>
                    <Form>
                        <FormInput
                            icon="business"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Digite nome fantasia da sua empresa"
                            returnKeyType="next"
                            onSubmitEditing={() => emailRef.current.focus()}
                            value={name}
                            onChangeText={setName}
                        />
                        <FormInput
                            icon="email"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Digite seu e-mail"
                            ref={emailRef}
                            returnKeyType="next"
                            onSubmitEditing={() => cnpjRef.current.focus()}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <FormInputMask
                            type="cnpj"
                            value={cnpj}
                            icon="card-membership"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Digite seu CNPJ"
                            ref={cnpjRef}
                            keyboardType="phone-pad"
                            returnKeyType="next"
                            onSubmitEditing={() => passwordRef.current.focus()}
                            onChangeText={data => setCnpj(data)}
                        />
                        <FormInput
                            icon="lock"
                            secureTextEntry
                            placeholder="Digite sua senha"
                            ref={passwordRef}
                            returnKeyType="send"
                            onSubmitEditing={handleSubmit}
                            value={password}
                            onChangeText={setPassword}
                        />

                        <SubmitButton loading={loading} onPress={handleSubmit}>
                            CRIAR CONTA
                        </SubmitButton>
                    </Form>
                    <SignLink
                        onPress={() => {
                            // eslint-disable-next-line react/prop-types
                            navigation.navigate('SignIn');
                        }}
                    >
                        <SignLlinkText>Fazer Login!</SignLlinkText>
                    </SignLink>
                </FormContainer>
            </Background>
        </>
    );
}
