const prodConfig = {
    apiKey: "AIzaSyCsVd5CIs_Mz-JH4bRmJnvck5ko3etGjXc",
    authDomain: "employee-manager-dev-6e035.firebaseapp.com",
    databaseURL: "https://employee-manager-dev-6e035.firebaseio.com",
    projectId: "employee-manager-dev-6e035",
    storageBucket: "employee-manager-dev-6e035.appspot.com",
    messagingSenderId: "1060199535232"
};

const devConfig = {
    apiKey: "AIzaSyCsVd5CIs_Mz-JH4bRmJnvck5ko3etGjXc",
    authDomain: "employee-manager-dev-6e035.firebaseapp.com",
    databaseURL: "https://employee-manager-dev-6e035.firebaseio.com",
    projectId: "employee-manager-dev-6e035",
    storageBucket: "employee-manager-dev-6e035.appspot.com",
    messagingSenderId: "1060199535232"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
