import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import { Container, List } from './styles';
import ProductRegister from '../../components/ProductRegister';
import api from '../../services/api';

function ProductList({ navigation, isFocused }) {
    const [productRegister, setProductRegister] = useState([{}]);

    async function loadProductRegisters() {
        const response = await api.get('/user/item');

        setProductRegister(response.data);
    }

    useEffect(() => {
        if (isFocused) {
            loadProductRegisters();
        }
    }, [isFocused]);

    return (
        <Container>
            <TouchableOpacity
                style={{ alignItems: 'center', marginTop: 20 }}
                onPress={() => navigation.navigate('ProductAdd')}
            >
                <Text>Cadastrar Produto</Text>
            </TouchableOpacity>
            <List
                data={productRegister}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <ProductRegister navigation={navigation} data={item} />
                )}
            />
        </Container>
    );
}

ProductList.navigationOptions = {
    title: 'Meus Produtos',
};

export default withNavigationFocus(ProductList);
