import React from 'react';
import { Image, StatusBar } from 'react-native';

// import Input from '../../components/Input';
// import Button from '../../components/Button';
import Background from '../../components/Background';
import logo from '../../assets/logoRegister.png';
import {
    TextInforRegister,
    FormContainer,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLlinkText,
} from './styles';

// eslint-disable-next-line react/prop-types
export default function SignIn({ navigation }) {
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
                            icon="email"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Digite seu e-mail"
                        />
                        <FormInput
                            icon="business"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Digite seu CNPJ"
                        />
                        <FormInput
                            icon="lock"
                            secureTextEntry
                            placeholder="Digite sua senha"
                        />

                        <SubmitButton onPress={() => {}}>
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
