import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
    display: flex;
    margin: 30px 20px;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 256px;
    height: 256px;
    border-radius: 128px;
`;

export const Logout = styled.TouchableOpacity`
    margin-top: 30px;
`;

export const LogoutText = styled.Text`
    color: #333;
    font-size: 13px;
`;

export const ContainerInfo = styled.View`
    padding: 30px 10px;
    border-radius: 4px;
    width: 100%;
    margin-top: 30px;
`;

export const Info = styled.Text`
    color: #333;
`;

export const DataInfo = styled.Text`
    background: #fff;
    padding: 15px 10px;
    border-radius: 4px;
    font-size: 14px;
    margin: 10px 0;
    color: #888;
`;

export const EditProfile = styled(Button)`
    background: #2ecc71;
    margin-top: 30px;
`;
