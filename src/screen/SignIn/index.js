import React, { useRef, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Svg, { Path, Image } from 'react-native-svg';

import Background from '../../components/Background';
import logo from '../../assets/logo.png';
import { signInRequest } from '../../store/modules/auth/actions';

import {
    FormContainer,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLlinkText,
} from './styles';

// eslint-disable-next-line react/prop-types
export default function SignIn({ navigation }) {
    const dispatch = useDispatch();

    const passwordRef = useRef();
    const cnpjRef = useRef();

    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector(state => state.auth.loading);

    function handleSubmit() {
        dispatch(signInRequest(email, cnpj, password));
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Background>
                <View>
                    <Svg width="100%" height="310">
                        <Path
                            d="M0 0L640 0L640 220.21L0 286.3L0 0Z"
                            fill="white"
                        />
                        <Image
                            x="25%"
                            width="50%"
                            height="90%"
                            fill="red"
                            href={logo}
                        />
                    </Svg>
                </View>

                <FormContainer>
                    <Form>
                        <FormInput
                            icon="email"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Digite seu e-mail"
                            returnKeyType="next"
                            onSubmitEditing={() => cnpjRef.current.focus()}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <FormInput
                            icon="business"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Ou digite seu CNPJ"
                            ref={cnpjRef}
                            returnKeyType="next"
                            onSubmitEditing={() => passwordRef.current.focus()}
                            value={cnpj}
                            onChangeText={setCnpj}
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
                            ENTRAR
                        </SubmitButton>
                    </Form>

                    <SignLink
                        onPress={() => {
                            // eslint-disable-next-line react/prop-types
                            navigation.navigate('SignUp');
                        }}
                    >
                        <SignLlinkText>Crie sua conta aqui!</SignLlinkText>
                    </SignLink>
                </FormContainer>
            </Background>
        </>
    );
}
