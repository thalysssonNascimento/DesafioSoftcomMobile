import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';

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
        try {
            await api.post('/user/item', {
                name,
                description,
                price,
            });
            // alert(`${name}, ${description}, ${price}`);

            navigation.navigate('ProductList');
        } catch (error) {
            alert(error);
        }
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
                    <FormInputMask
                        type="money"
                        options={{
                            precision: 2,
                            separator: '.',
                            delimiter: '.',
                            unit: '',
                            suffixUnit: '',
                        }}
                        value={price}
                        onChangeText={data => {
                            setPrice(data);
                        }}
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
