import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import api from '../../services/api';

import {
    FormContainer,
    Form,
    FormInput,
    FormInputMask,
    SubmitButton,
} from './styles';

export default function ProductAdd({ navigation }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const loading = useSelector(state => state.auth.loading);

    async function handleProductAdd() {
        await api.post('/user/item', {
            name,
            description,
            price,
        });
        // alert(`${name}, ${description}, ${price}`);

        navigation.navigate('ProductList');
    }

    return (
        <View>
            <FormContainer>
                <Form>
                    <FormInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite nome do produto"
                        value={name}
                        onChangeText={setName}
                    />
                    <FormInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite a descrição do produto"
                        value={description}
                        onChangeText={setDescription}
                    />
                    <FormInput
                        // type="money"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite o valor do produto"
                        value={price}
                        onChangeText={setPrice}
                        keyboardType="phone-pad"
                    />

                    <SubmitButton loading={loading} onPress={handleProductAdd}>
                        CADASTRAR PRODUTO
                    </SubmitButton>
                </Form>
            </FormContainer>
        </View>
    );
}

ProductAdd.navigationOptions = {
    title: 'Cadastrar produto',
};
