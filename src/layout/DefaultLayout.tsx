import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const DefaultLayout = (props: Props) => {
  return (
    <React.Fragment>
         <Outlet />
    </React.Fragment>
  )
}

export default DefaultLayout