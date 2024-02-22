import { ConfigProvider, Spin, theme } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import './assets/scss/index.scss';
import Login from './components/auth/Login';
import Home from './components/users/Home';
import MainLayout from './components/auth/MainLayout';
import User from './components/user/User';
import { authMe } from './store/services/authService';
import setAuthToken from './helpers/setAuthToken';
import { useDispatch, useSelector } from 'react-redux';
import CreateUser from './components/user/CreateUser';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { userLoader } = useSelector(state => state.auth);


  useMemo(() => {
    if (token) {
      setAuthToken(token);
      dispatch(authMe());
    }
  }, [token, dispatch])

  const themeStyle = {
    token: {
      fontFamily: 'Popins-Medium',
      borderRadius: 5,
      colorPrimary: "#00205E"
    },
    components: {
      activeShadow: "",
      Menu: {
        itemSelectedColor: '#283A83',
        itemColor: 'rgba(0,0,0,0.7)',
        itemSelectedBg: 'transparent',
        itemActiveBg: "#F5F5F5",
        fontFamily: 'Glegoo-Bold',
        itemHoverBg: 'transparent',
        itemHoverColor: 'rgba(0,0,0,0.7)',
      },
      Spin: {
        colorPrimary: '#00205E'
      },
    }
  };

  const PrivateRoute = ({ component }) => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        navigate('/login');
      }
    }, [token, navigate]);

    return (
      <MainLayout >
        {component}
      </MainLayout>
    );
  };

  return (
    userLoader ? <div className='flex items-center justify-center h-screen'> <Spin />
    </div> :
      <ConfigProvider theme={themeStyle}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute component={<Home />} />} />
            <Route path="/user" element={<PrivateRoute component={<User />} />} />
            <Route path="/create-user" element={<PrivateRoute component={<CreateUser />} />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
  );
}

export default App;
