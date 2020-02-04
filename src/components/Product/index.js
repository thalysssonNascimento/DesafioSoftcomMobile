import React from 'react';
import NumberFormat from 'react-number-format';

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
    Business,
} from './styles';

export default function Product({ data }) {
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
                        <Business>Empresa: {data.user.name}</Business>
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
                </Left>
            </ContainerItem>
            <ChooseItemButton onPress={() => {}}>COMPRAR</ChooseItemButton>
        </Container>
    );
}
