import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';
import OwnerInfo from './OwnerInfo';
import DogInfo from './DogInfo';
import UploadImageToS3WithNativeSdk from './UploadImageToS3';
import ForgotPassword from './ForgotPassword';
import ListProfiles from './ListProfiles';
import './App.css';
import ArticleList from './ArticleList';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from './Form';
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'


function App(props) {
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState('')
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  // let navigate = useNavigate()


  useEffect(() => {
    fetch('http://localhost:8100/api/articles/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'f1c6cb57eee49d346e888ceb36b5278da607facd'
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error))

  }, [])

  const editBtn = (article) => {
    setEditArticle(article)
  }

  const updatedInformation = (article) => {
    const new_article = articles.map(myarticle => {
      if (myarticle.id === article.id) {
        return article
      } else {
        return myarticle
      }
    })
    setArticles(new_article)
  }

  const articleForm = () => {
    setEditArticle({ title: '', description: '' })
  }

  const insertedInformation = (article) => {
    const new_articles = [...articles, article]
    setArticles(new_articles)
  }

  const deleteBtn = (article) => {
    const new_article = articles.filter(myarticle => {
      if (myarticle.id === article.id) {
        return false
      }

      return true
    })
    setArticles(new_article)
  }


  // useEffect(() => {
  //   var user_token = token['mytoken']
  //   console.log('User token is', user_token)
  //   if (String(user_token) === 'undefined') {
  //     navigate('/')
  //   } else {
  //     navigate('/articles')
  //   }
  // }, [token])


  const logoutBtn = () => {
    removeToken(['mytoken'])

  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/puppy-love/" element={<MainPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="listprofiles" element={<ListProfiles />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="doginfo" element={<DogInfo />} />
          <Route path="ownerinfo" element={<OwnerInfo />} />
          <Route path="upload" element={<UploadImageToS3WithNativeSdk />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;