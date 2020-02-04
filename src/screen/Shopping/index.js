import React from 'react';

import { Container, List } from './styles';
import ProductBuy from '../../components/ProductBuy';

const data = [
    {
        id: 1,
        name: 'Mouse Microsoft',
        description: 'Mouse com 2000dpi',
        date: '00/00/0000',
        price: 'R$ 10.99',
        form_of_payment: 'debit',
    },
    {
        id: 1,
        name: 'Teclado Microsoft',
        description: 'Mouse sem fio',
        date: '00/00/0000',
        price: 'R$ 125.99',
        form_of_payment: 'credit',
    },
];

export default function Shopping() {
    return (
        <Container>
            <List
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <ProductBuy data={item} />}
            />
        </Container>
    );
}
Shopping.navigationOptions = {
    tabBarLabel: 'Compras',
};
