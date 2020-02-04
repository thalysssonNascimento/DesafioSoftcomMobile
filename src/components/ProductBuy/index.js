import React from 'react';

import {
    Container,
    ContainerItem,
    Left,
    Avatar,
    Info,
    Title,
    Description,
    Date,
    Price,
    Payment,
} from './styles';

export default function ProductBuy({ data }) {
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
                        <Date>{data.date}</Date>
                        <Price>{data.price}</Price>
                        <Payment>{data.form_of_payment}</Payment>
                    </Info>
                </Left>
            </ContainerItem>
        </Container>
    );
}
