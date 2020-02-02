import styled from 'styled-components/native';
import Button from '../Button';

export const Container = styled.View`
    margin-bottom: 15px;
    padding: 20px;
    border-radius: 4px;
    background: #fff;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
`;

export const ContainerItem = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Left = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const Info = styled.View`
    margin-left: 15px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: #333;
`;

export const Description = styled.Text`
    color: #999;
    font-size: 13px;
    margin-top: 4px;
`;

export const ChooseItemButton = styled(Button)`
    margin-top: 5px;
    background: #2ecc71;
    margin: 0;
    margin-top: 15px;
`;

export const Price = styled.Text`
    font-weight: bold;
    font-size: 24px;
    color: #333;
`;
