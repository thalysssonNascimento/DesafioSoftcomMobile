import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NumberFormat from 'react-number-format';

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

export default function ProductRegister({ data, navigation, onDelete }) {
    async function handleDeleteItemUser(id) {
        try {
            await api.delete(`/user/item/${id}`);
            onDelete(data.id);
        } catch (error) {
            console.tron.log(error);
        }
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
                        <NumberFormat
                            value={data.price}
                            displayType="text"
                            thousandSeparator
                            prefix="R$ "
                            renderText={value => <Price>{value}</Price>}
                        />
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
                onPress={() => navigation.navigate('ProductUpdate', { data })}
            >
                <Text>ATUALIZAR</Text>
            </TouchableOpacity>
        </Container>
    );
}
