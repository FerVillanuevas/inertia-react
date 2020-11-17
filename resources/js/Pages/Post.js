import { Inertia } from '@inertiajs/inertia'
import Axios from 'axios'
import React from 'react'

export default function Post() {

    const handlePost = () => {
        const url  = 'https://zzrn-010.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/katapultOk-Redirect'

/*             Inertia.post(url, {
                id: 'ID RANDOM',
                otro: 'Otro Param'
            }, {
                onSuccess: (e) => {
                    alert('todo bine')
                }
            }) */

            Axios.post(url, {
                id: 'ID RANDOM',
                user: 'USER RANDOM'
            }).then(res => alert('all good'))
            .catch(e => alert(e))

            Axios.get('https://zzrn-010.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/')
                .then((res) => console.log(res) )
                .catch(e => alert(e))

/*
            Inertia.on('error', (event) => {
                event.preventDefault()
                alert(event.detail.error);
              }) */

    }

    return (
        <div>
            <button className="btn btn-primary" onClick={handlePost}>Post form external url</button>
        </div>
    )
}
