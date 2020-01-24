import React from 'react';
import { useDispatch } from 'react-redux';
// import { View } from 'react-native';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Logout, LogoutText } from './styles';

// eslint-disable-next-line react/prop-types
export default function Profile() {
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Logout
                onPress={() => {
                    handleLogout();
                }}
            >
                <LogoutText>SAIR</LogoutText>
            </Logout>
        </Container>
    );
}

Profile.navigationOptions = {
    tabBarLabel: 'Perfil',
};
