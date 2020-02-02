import React from 'react';
import { useDispatch } from 'react-redux';
// import { View } from 'react-native';

import { signOut } from '../../store/modules/auth/actions';

import {
    Container,
    Avatar,
    Logout,
    LogoutText,
    ContainerInfo,
    Info,
    DataInfo,
    EditProfile,
} from './styles';

// eslint-disable-next-line react/prop-types
export default function Profile() {
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Avatar
                source={{
                    uri: 'https://api.adorable.io/avatar/256/lojavirtual.png',
                }}
            />
            <Logout
                onPress={() => {
                    handleLogout();
                }}
            >
                <LogoutText>SAIR</LogoutText>
            </Logout>

            <ContainerInfo>
                <Info>Razão social</Info>
                <DataInfo>Thalysson Festas</DataInfo>
                <Info>Email</Info>
                <DataInfo>thalyssonwg.nascimento@gmail.com</DataInfo>
                <Info>CNPJ</Info>
                <DataInfo>000.0000.000001/00</DataInfo>
                <EditProfile>EDITAR PERFIL</EditProfile>
            </ContainerInfo>
        </Container>
    );
}

Profile.navigationOptions = {
    tabBarLabel: 'Perfil',
};
