import { Button } from '@chakra-ui/react'
import React from 'react'
import useAuth from '../hooks/useAuth'

type Props = {}

const Login = (props: Props) => {
  const auth = useAuth()
  const handleClick = () => {
    auth.dispatch({
      type: 'login', payload: {
        id: '1',
        name: 'abc',
        avatar: '',
        token: ''
      }
    })
  }
  return (
    <div>
      <Button onClick={handleClick}>登录</Button>
    </div>
  )
}

export default Login