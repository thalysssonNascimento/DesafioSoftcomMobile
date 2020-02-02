import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
    FormContainer,
    Form,
    FormInput,
    FormInputMask,
    SubmitButton,
} from './styles';

export default function ProductAdd({ navigation }) {
    const dispatch = useDispatch();

    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const loading = useSelector(state => state.auth.loading);

    function handleSubmitAdd() {
        // dispatch(signUpRequest(name, description, price, password));
        navigation.navigate('ProductList');
    }

    return (
        <View>
            <FormContainer>
                <Form>
                    <FormInput
                        icon="business"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite nome do produto"
                        returnKeyType="next"
                        onSubmitEditing={() => nameRef.current.focus()}
                        value={name}
                        onChangeText={setName}
                    />
                    <FormInput
                        icon="email"
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
                        value={price}
                        icon="card-membership"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite o valor do produto"
                        ref={descriptionRef}
                        keyboardType="phone-pad"
                        returnKeyType="next"
                        onSubmitEditing={() => priceRef.current.focus()}
                        onChangeText={data => setPrice(data)}
                    />

                    <SubmitButton loading={loading} onPress={handleSubmitAdd}>
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
