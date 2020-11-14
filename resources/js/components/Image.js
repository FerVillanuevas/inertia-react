import React from 'react'

export default function Image(props) {
    return <img {...props} src={`/storage/${props.src}`} /> ;
}
