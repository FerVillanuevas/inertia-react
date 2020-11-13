import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../store/slices/counter'

import Layout from '../Layout';

export default function Dashboard() {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter);

    const onIncremet = () => {
        dispatch(increment());
    }

    // View: the UI definition
    return (
        <Layout>
            <div className="top-banner fancy-orange embed-responsive embed-responsive-36by9">
                <img className="fit-cover embed-responsive-item" src="https://www.elamaku.com/wp-content/uploads/hablar-con-los-que-ya-no-estan.png" />
            </div>
        </Layout>
    )
}
