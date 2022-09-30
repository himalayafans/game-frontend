import { Route, Routes } from 'react-router-dom'
import GuestProtectedRoute from '../common/GuestProtectedRoute'
import UserProtectedRoute from '../common/UserProtectedRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from './NotFound'
import Paths from './Paths'

type Props = {}

const SiteContent = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<UserProtectedRoute><Home /></UserProtectedRoute>} />
            <Route path={Paths.ACCOUNT_LOGIN} element={<GuestProtectedRoute><Login /></GuestProtectedRoute>} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default SiteContent