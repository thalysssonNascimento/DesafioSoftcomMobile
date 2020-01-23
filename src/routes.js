import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import SignIn from './screen/SignIn';
import SignUp from './screen/SignUp';

import Dashboard from './screen/Dashboard';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                SignIn: createSwitchNavigator({
                    SignIn,
                    SignUp,
                }),
                App: createMaterialTopTabNavigator({
                    Dashboard,
                }),
            },
            { initialRouteName: signedIn ? 'App' : 'Sign' }
        )
    );
