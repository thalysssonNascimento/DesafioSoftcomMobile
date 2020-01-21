import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    const tron = Reactotron.configure({
        // host: '192.168.1.100',
        // port: 9090,
        // enabled: true,
    })
        .useReactNative()
        .connect();

    console.tron = tron;

    tron.clear();
}
