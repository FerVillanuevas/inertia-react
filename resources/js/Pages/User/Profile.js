import { Inertia } from '@inertiajs/inertia'
import React, {useState} from 'react'
import Layout from '../../Layout'


export default function Profile({user, albums}) {

    const [form, setForm] = useState({
        file: null,
        name: null,
    })

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        Object.keys(form).map(key => {
            fd.append(key, form[key])
        })

        fd.append('_method', 'PUT');
        Inertia.post(route('user.update', user.id), fd)

    }

    const handleSoundSubmit = (album) => (e) => {
        e.preventDefault();
        const fd = new FormData();
        Object.keys(form).map(key => {
            fd.append(key, form[key])
        })

        fd.append('album_id', album.id);

        Inertia.post(route('music.store'), fd)

    }


    const handleOnChage = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleFileChange = (e) => {
       const file = e.target.files[0];
       setForm({
           ...form,
           file: file
       })
    }


    return (
        <Layout>
            <form name="createForm" onSubmit={handleOnSubmit}>
                <div className="form-grop">
                    <input className="form-control-file"  onChange={handleFileChange} type="file" />
                </div>
                <div className="form-group">
                    <input type="text" name="name" placeholder={user.name} onChange={handleOnChage} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="container">
                <div className="row">
                    {albums.map((album) => {
                        return (
                            <div key={album.id} className="card w-100">
                                <img src={album.cover_art} loading="lazy" className="card-img-top" alt={album.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{album.name}</h5>
                                    <ul>
                                        {album.sounds.map((sound) => {
                                            return <li key={sound.id}>{sound.name}</li>
                                        })}
                                    </ul>
                                    <form name="attach-sound" onSubmit={handleSoundSubmit(album)}>
                                        <div className="form-group">
                                            <input className="form-control-file" type="file" name="sound" onChange={handleFileChange} />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Sound name" onChange={handleOnChage} name="name" />
                                        </div>
                                        <button type="submit">Create</button>
                                    </form>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    )
}
