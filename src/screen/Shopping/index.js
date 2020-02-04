import React from 'react';

import { Container, List } from './styles';
import ProductBuy from '../../components/ProductBuy';

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function Shopping() {
    return (
        <Container>
            {/* <List
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <ProductBuy data={item} />}
            /> */}
        </Container>
    );
}
Shopping.navigationOptions = {
    tabBarLabel: 'Compras',
};
