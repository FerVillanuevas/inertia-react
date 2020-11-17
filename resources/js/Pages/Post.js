import { Inertia } from '@inertiajs/inertia'
import React from 'react'

export default function Post() {

    const handlePost = () => {
        const url  = 'https://zzrn-010.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/katapultOk-Redirect'

            Inertia.post(url, {
                id: 'ID RANDOM',
                otro: 'Otro Param'
            }, {
                onSuccess: (e) => {
                    alert('todo bine')
                }
            })

            Inertia.on('error', (event) => {
                event.preventDefault()
                alert(event.detail.error);
              })

    }

    return (
        <div>
            <button className="btn btn-primary" onClick={handlePost}>Post form external url</button>
        </div>
    )
}
