import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import api from '../../services/api';
import ProductRegister from '../../components/ProductRegister';

import { Container, List } from './styles';

function ProductList({ navigation, isFocused }) {
    const [productRegisterList, setProductRegisterList] = useState([{}]);

    async function loadProductRegisters() {
        const response = await api.get('/user/item');
        setProductRegisterList(response.data);
    }

    useEffect(() => {
        if (isFocused) {
            loadProductRegisters();
        }
    }, [isFocused]);

    function itemDeleted(id) {
        setProductRegisterList(
            productRegisterList.filter(product => product.id !== id)
        );
    }

    return (
        <Container>
            <TouchableOpacity
                style={{ alignItems: 'center', marginTop: 20 }}
                onPress={() => navigation.navigate('ProductAdd')}
            >
                <Text>Cadastrar Produto</Text>
            </TouchableOpacity>
            <List
                data={productRegisterList}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <ProductRegister
                        onDelete={itemDeleted}
                        navigation={navigation}
                        data={item}
                    />
                )}
            />
        </Container>
    );
}

ProductList.navigationOptions = {
    title: 'Meus Produtos',
};

export default withNavigationFocus(ProductList);
