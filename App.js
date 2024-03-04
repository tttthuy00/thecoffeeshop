import React from 'react'
import Welcome from './src/component/app/news/screen/Welcome'
import Authorization from './src/component/app/news/screen/Authorization';
import Forgot_password from './src/component/app/news/screen/Forgot_password';
import Registration from './src/component/app/news/screen/Registration';
import Two_factor_verification from './src/component/app/news/screen/Two_factor_verification';
import Startup_screen from './src/component/app/news/screen/Startup_screen';
import MyorderCurrent from './src/component/app/news/screen/MyorderCurrent';
import MyorderHistory from './src/component/app/news/screen/MyorderHistory';
import Review_request from './src/component/app/news/screen/Review_request';
import StackNavigation from './src/component/app/news/navigation/StackNavigation';

const App = () => {
  return (
    // <Welcome/>
    // <Authorization/>
    // <Registration/>
    // <Forgot_password/>
    // <Two_factor_verification/>
    // <Startup_screen/>
    // <MyorderCurrent/>
    // <MyorderHistory/>
    // <Review_request/>
    <StackNavigation/>
  )
}

export default App;