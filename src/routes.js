import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './screen/SignIn';
import SignUp from './screen/SignUp';

export default createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp,
    })
);
