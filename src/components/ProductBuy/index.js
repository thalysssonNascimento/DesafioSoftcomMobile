import React from 'react';

import {
    Container,
    ContainerItem,
    Left,
    Avatar,
    Info,
    Title,
    Description,
} from './styles';

export default function ProductBuy() {
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
                        <Title>Iphone 11</Title>
                        <Description>Descrição do Iphone</Description>
                        <Description>Data</Description>
                        <Description>Valor</Description>
                    </Info>
                </Left>
            </ContainerItem>
        </Container>
    );
}
