import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Notification() {
    return (
        <div>
            <ToastContainer position='bottom-right' autoClose={2000} />
        </div>
    )
}

export default Notification
