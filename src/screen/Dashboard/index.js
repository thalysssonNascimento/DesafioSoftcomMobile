import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import { Container, List } from './styles';
import Product from '../../components/Product';

import api from '../../services/api';

function Dashboard({ isFocused }) {
    const [productListForPurchase, setProductListForPurchase] = useState([]);

    async function loadProductListForPurchase() {
        const response = await api.get('list-product/');

        setProductListForPurchase(response.data);
    }

    useEffect(() => {
        if (isFocused) {
            loadProductListForPurchase();
        }
    }, [isFocused]);

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#EE3A67" />
            <List
                data={productListForPurchase}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Product data={item} />}
            />
        </Container>
    );
}

Dashboard.navigationOptions = {
    tabBarLabel: 'Ofertas',
};

export default withNavigationFocus(Dashboard);
