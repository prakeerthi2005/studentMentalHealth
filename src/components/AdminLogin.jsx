import React from 'react'
import Login from './Login';
import Header from './Header';

export default function AdminLogin() {
  return (
    <div>
      <Header />
      <Login name="Admin" loginType="admin"/>
    </div>
  )
}
