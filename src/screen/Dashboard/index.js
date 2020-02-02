import React from 'react';
import { StatusBar } from 'react-native';

import { Container, List } from './styles';
import Product from '../../components/Product';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function Dashboard() {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#EE3A67" />
            <List
                data={data}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Product data={item} />}
            />
        </Container>
    );
}

Dashboard.navigationOptions = {
    tabBarLabel: 'Ofertas',
};
