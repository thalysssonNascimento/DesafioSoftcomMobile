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
    background: #fff;
    border-radius: 4px;
    width: 100%;
    margin-top: 30px;
`;

export const Info = styled.Text`
    color: #888;
`;

export const DataInfo = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const EditProfile = styled(Button)`
    background: #2ecc71;
    margin-top: 30px;
`;
