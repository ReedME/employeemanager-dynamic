import firebaseAPI_KEY from '../keys/keys';

const prodConfig = {
    apiKey: firebaseAPI_KEY,
    authDomain: "employee-manager-dev-6e035.firebaseapp.com",
    databaseURL: "https://employee-manager-dev-6e035.firebaseio.com",
    projectId: "employee-manager-dev-6e035",
    storageBucket: "employee-manager-dev-6e035.appspot.com",
    messagingSenderId: "1060199535232"
};

const devConfig = {
    apiKey: firebaseAPI_KEY,
    authDomain: "employee-manager-dev-6e035.firebaseapp.com",
    databaseURL: "https://employee-manager-dev-6e035.firebaseio.com",
    projectId: "employee-manager-dev-6e035",
    storageBucket: "employee-manager-dev-6e035.appspot.com",
    messagingSenderId: "1060199535232"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
