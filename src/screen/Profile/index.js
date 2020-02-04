import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import api from '../../services/api';
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
function Profile({ isFocused }) {
    const dispatch = useDispatch();

    const [dataUser, setDataUser] = useState([]);

    async function loadDataUser() {
        const response = await api.get('user/');
        setDataUser(response.data);
    }

    useEffect(() => {
        if (isFocused) {
            loadDataUser();
        }
    }, [isFocused]);

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
                <DataInfo>{dataUser.name}</DataInfo>
                <Info>Email</Info>
                <DataInfo>{dataUser.email}</DataInfo>
                <Info>CNPJ</Info>
                <DataInfo>{dataUser.cnpj}</DataInfo>
                <EditProfile>EDITAR PERFIL</EditProfile>
            </ContainerInfo>
        </Container>
    );
}

Profile.navigationOptions = {
    tabBarLabel: 'Perfil',
};

export default withNavigationFocus(Profile);
