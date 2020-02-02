import React from 'react';

import {
    Container,
    ContainerItem,
    Left,
    Avatar,
    Info,
    Title,
    Description,
    ChooseItemButton,
    Price,
} from './styles';

export default function Product() {
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
                        <Price>55,00</Price>
                    </Info>
                </Left>
            </ContainerItem>
            <ChooseItemButton onPress={() => {}}>COMPRAR</ChooseItemButton>
        </Container>
    );
}
