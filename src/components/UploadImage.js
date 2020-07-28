import '../css/index.css';
import React, { useState, useEffect } from 'react';

function UploadImage(props) {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const uploadImage = async e => {
        e.persist()
        //console.log(e)
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'xegspegc')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dputswhco/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        //console.log(file);
        setImage(file.secure_url)
        setLoading(false)
        //console.log(data.values())
    }
    useEffect (()=>{
        setImage(image)
    }, [image])
    return (
        <div className="upload" >
            <label>
                Upload Image
            <input 
                className="upload"
                type='file'
                name="uploadImage"
                placeholder='Upload an image'
                onChange={uploadImage}
            />
            </label>
            {loading ? (
                <h3 className="imageContainer">Loading</h3>
            ) : (
                    <img src={image} style={{ width: '300px' }} alt="" />
                )}
        </div>
    );
}
export default UploadImage;