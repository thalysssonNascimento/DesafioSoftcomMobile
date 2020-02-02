import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import SignIn from './screen/SignIn';
import SignUp from './screen/SignUp';

import Dashboard from './screen/Dashboard';
import Profile from './screen/Profile';
import Shopping from './screen/Shopping';
import ProductList from './screen/ProductList';
import ProductUpdate from './screen/ProductUpdate';
import ProductAdd from './screen/ProductAdd';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                SignIn: createSwitchNavigator({
                    SignIn,
                    SignUp,
                }),
                App: createMaterialTopTabNavigator(
                    {
                        Dashboard,
                        Shopping,
                        New: {
                            screen: createStackNavigator({
                                ProductList,
                                ProductUpdate,
                                ProductAdd,
                            }),
                            navigationOptions: {
                                // tabBarVisible: false,
                                tabBarLabel: 'Produtos',
                            },
                        },
                        Profile,
                    },
                    {
                        tabBarOptions: {
                            keyboardHidesTabBar: true,
                            activeTintColor: '#fff',
                            inactiveTintColor: 'rgba(255,255,255, 0.4)',
                            style: {
                                backgroundColor: '#EE3A67',
                            },
                        },
                    }
                ),
            },
            { initialRouteName: signedIn ? 'App' : 'SignIn' }
        )
    );
