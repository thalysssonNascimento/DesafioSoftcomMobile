import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import SignIn from './screen/SignIn';
import SignUp from './screen/SignUp';

import Dashboard from './screen/Dashboard';
import Profile from './screen/Profile';
import Shopping from './screen/Shopping';

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
