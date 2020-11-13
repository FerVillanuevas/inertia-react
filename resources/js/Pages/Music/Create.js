import React, {useState} from 'react'
import Layout from '../../Layout'

import { Inertia } from '@inertiajs/inertia'

export default function Create() {

    const [values, setValues] = useState({
        name: '',
        src: ''
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        /* const formData = new FormData();
        Object.keys(values).map((key) => {
          formData.append(key, values[key])
        }) */


        Inertia.post(route('music.store'), values, {
            onSuccess: (res) => {
                console.log(res)
            },

        })
    }

    return (
        <Layout>
            <form name="createForm" onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <input type="text" name="name" onChange={handleOnChange} className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" name="src" onChange={handleOnChange} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Layout>
    )
}
