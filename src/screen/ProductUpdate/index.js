import React, { useRef, useState } from 'react';
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

export default function ProductUpadate({ navigation }) {
    const product = navigation.getParam('data');

    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();

    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    const loading = useSelector(state => state.auth.loading);

    async function handleSubmitUpdate() {
        try {
            await api.put(`user/item/${product.id}`, {
                name,
                description,
                price,
            });

            navigation.navigate('ProductList');
        } catch (error) {
            // eslint-disable-next-line no-undef
            alert(error.message);
        }
    }

    return (
        <View>
            <FormContainer>
                <Form>
                    <FormInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite o nome do produto"
                        returnKeyType="next"
                        onSubmitEditing={() => nameRef.current.focus()}
                        value={name}
                        onChangeText={setName}
                    />
                    <FormInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite a descrição do produto"
                        ref={nameRef}
                        returnKeyType="next"
                        onSubmitEditing={() => descriptionRef.current.focus()}
                        value={description}
                        onChangeText={setDescription}
                    />
                    <FormInputMask
                        type="money"
                        placeholder="Digite o valor do produto"
                        keyboardType="phone-pad"
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

                    <SubmitButton
                        loading={loading}
                        onPress={handleSubmitUpdate}
                    >
                        Atualizar Produto
                    </SubmitButton>
                </Form>
            </FormContainer>
        </View>
    );
}

ProductUpadate.navigationOptions = {
    title: 'Atualizar produto',
    tabBarVisible: false,
};
