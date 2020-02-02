import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    ContainerItem,
    Left,
    Avatar,
    Info,
    Title,
    Description,
    Price,
} from './styles';

import api from '../../services/api';

export default function ProductRegister({ data, navigation }) {
    const [products, setProducts] = useState([]);

    async function handleDeleteItemUser(id) {
        await api.delete(`/user/item/${id}`);
        setProducts(products.filter(product => product.id !== Number(id)));
    }

    return (
        <Container>
            <ContainerItem>
                <Left>
                    <Avatar
                        source={{
                            uri:
                                'https://api.adorable.io/avatar/50/lojavirtual.png',
                        }}
                    />
                    <Info>
                        <Title>{data.name}</Title>
                        <Description>{data.description}</Description>
                        <Price>{data.price}</Price>
                    </Info>
                    <TouchableOpacity
                        onPress={() => handleDeleteItemUser(data.id)}
                    >
                        <Icon name="delete" size={25} color="#900" />
                    </TouchableOpacity>
                </Left>
            </ContainerItem>

            <TouchableOpacity
                style={{ alignItems: 'center', marginTop: 20 }}
                onPress={() => navigation.navigate('ProductUpdate')}
            >
                <Text>ATUALIZAR</Text>
            </TouchableOpacity>
        </Container>
    );
}
