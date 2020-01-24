import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, cnpj, password } = payload;

        const response = yield call(api.post, '/auth/sign_in', {
            email,
            cnpj,
            password,
        });

        const { token, user } = response.data;

        // Essa funcção seria implmentada se caso na aplicação tivesse a função de admin
        // if (!user.provider) {
        // console.tron.error('O usuário não é administrador')
        // }

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));

        // history.push('/all-activity-post-message');
    } catch (error) {
        Alert.alert('Erro de autenticação', 'Verifique seu login ou senha ');
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, cnpj, password } = payload;

        yield call(
            api.post,
            '/user',
            {
                name,
                email,
                cnpj,
                password,
            }
            // history.push('/')
        );
    } catch (error) {
        Alert.alert('Erro no cadastro', 'Verifique seus dados ');
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers['Content-Type'] = 'application/json';
        api.defaults.headers['Access-Control-Allow-Origin'] = '*';
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function signOut() {
    // history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
