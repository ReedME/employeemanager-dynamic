const prodConfig = {
    apiKey           : "YOUR_API_KEY",
    authDomain       : "your-app.firebaseapp.com",
    databaseURL      : "https://your-app.firebaseio.com",
    projectId        : "your-app",
    storageBucket    : "your-app.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

const devConfig = {
    apiKey: "AIzaSyCsVd5CIs_Mz-JH4bRmJnvck5ko3etGjXc",
    authDomain: "employee-manager-dev-6e035.firebaseapp.com",
    databaseURL: "https://employee-manager-dev-6e035.firebaseio.com",
    projectId: "employee-manager-dev-6e035",
    storageBucket: "",
    messagingSenderId: "1060199535232"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
