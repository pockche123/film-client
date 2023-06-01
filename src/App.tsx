
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import FilmPage from './pages/film-page/FilmPage'
import Trailer from './trailer/Trailer'
import Home from './pages/home-page/Home'
import SearchPage from './pages/search-page/SearchPage'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/login-page/Login'
import UserPage from './pages/user-pages/UserPage'
import Register from './pages/register-page/Register'
import { Paths } from './components/services/Utils/Paths'
import Layout from './components/layout/Layout'
import AccessNotAllowed from './pages/AccessNotAllowed'
import RequireAuth from './components/auth/RequireAuth'
import DemoPage from './pages/user-pages/DemoPage'
import PersistLogin from './components/services/Utils/PersistLogin'
import Footer from './components/footer/Footer'
import React from 'react'
import UserLandingPage from './pages/user-pages/landing-page/UserLandingPage'

function App () {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={Paths.home} element={<Home />} />
          <Route path={Paths.imdbId + ':imdbId'} element={<FilmPage />} />
          <Route path={Paths.trailer + ':ytTrailerId'} element={<Trailer />} />
          <Route
            path={Paths.searchQuery + ':search'}
            element={<SearchPage />}
          />
          <Route path={Paths.login} element={<Login />} />
          <Route path={Paths.register} element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path={Paths.accessNotAllowed} element={<AccessNotAllowed />} />

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={['USER']} />}>
              <Route
                path={Paths.userPage}
                element={<UserLandingPage />}
              />
              <Route path='/demoPage' element={<DemoPage />} />
            </Route>
          </Route>
        </Route>
        </Routes>
      <Footer/>
    </div>



    
  )
}

export default App
