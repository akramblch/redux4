import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as userActions from '../Store/Action/user'
import { Link } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState({
    id: '',
    email : '',
    name: '',
    password: ''
  })

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setUser((prevItems) => {
      return {
        ...prevItems,
        [name]: value
      }
    })
  }

  const dispatch = useDispatch()
  const addUser = () => {
    dispatch(userActions.addUser(user))
    setUser({
      id: '',
      email : '',
      name: '',
      password: ''
    })
  }

  return (
    <div className='Form'>
      <div className='Form_input'>
        <h1>Add SUSer</h1>
        <input name='id' id='id' placeholder='ID' onChange={inputHandler} value={user.id}/>
        <input name='email' id='email' placeholder='Email' onChange={inputHandler} />
        <input name='name' id='name' placeholder='Nickname' onChange={inputHandler} value={user.name}/>
        <input name='password' id='password' type='password' placeholder='Password' onChange={inputHandler} value={user.password}/>
        <button className='Add_btn' type='submit' onClick={addUser}>Add suser</button>
        <Link className='Link' to='/Users'>SUSers List</Link>
      </div>
    </div>
  )
}

export default Home;