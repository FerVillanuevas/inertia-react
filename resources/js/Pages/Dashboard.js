import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../store/slices/counter'

import Layout from '../Layout';

export default function Dashboard() {
    const dispatch = useDispatch()
    const {sound} = useSelector((state) => state.player);

    // View: the UI definition
    return (
        <Layout>
            <div className="top-banner fancy-orange embed-responsive embed-responsive-36by9">
                <img className="fit-cover embed-responsive-item" src="https://www.elamaku.com/wp-content/uploads/hablar-con-los-que-ya-no-estan.png" />
            </div>
            <h1 className="p-3 text-center">
                La info viene del store con redux
            </h1>
            {!_.isEmpty(sound) && <div className="p-2 text-center">
                <code>{JSON.stringify(sound)}</code>
            </div>}

        </Layout>
    )
}
