import { Button } from '@chakra-ui/react'
import React from 'react'
import useAuth from '../hooks/useAuth'

type Props = {}

const Home = (props: Props) => {
  const auth = useAuth()
  const handleClick = () => {
    auth.dispatch({ type: 'logout' })
  }
  return (
    <div>
      <p>首页</p>
      <Button onClick={handleClick}>退出</Button>
    </div>
  )
}

export default Home