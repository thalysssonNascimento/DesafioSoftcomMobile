import React, { useRef } from 'react';
import { View, StatusBar } from 'react-native';
import Svg, { Path, Image } from 'react-native-svg';

import Background from '../../components/Background';
import logo from '../../assets/logo.png';
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
    const passwordRef = useRef();
    const cnpjRef = useRef();

    function handleSubmit() {}

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
                        />
                        <FormInput
                            icon="business"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Digite seu CNPJ"
                            ref={cnpjRef}
                            returnKeyType="next"
                            onSubmitEditing={() => passwordRef.current.focus()}
                        />
                        <FormInput
                            icon="lock"
                            secureTextEntry
                            placeholder="Digite sua senha"
                            ref={passwordRef}
                            returnKeyType="send"
                            onSubmitEditing={handleSubmit}
                        />

                        <SubmitButton onPress={handleSubmit}>
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
