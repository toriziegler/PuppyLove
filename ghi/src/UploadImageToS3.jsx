import React, { useState } from 'react';
import AWS from 'aws-sdk'

const BUCKET_NAME = process.env.REACT_APP_AWS_STORAGE_BUCKET_NAME;
const AWSREGION = process.env.REACT_APP_REGION;
const KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
const S3_BUCKET = BUCKET_NAME;
const REGION = AWSREGION;

// The access key ID is how we will access the photo from the bucket
AWS.config.update({
    accessKeyId: KEY_ID,
    secretAccessKey: ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})

const UploadImageToS3WithNativeSdk = () => {

    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: `media/${file.name}`
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }

    // console.log(myBucket.getObject({ Key: `media/willie_logo.jpg` }))
    return <div>
        <div>File Upload Progress is {progress}%</div>
        <input type="file" onChange={handleFileInput} />
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
}

export default UploadImageToS3WithNativeSdk;
