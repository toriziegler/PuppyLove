import React, { useState } from 'react';
import AWS from 'aws-sdk'

class Profile extends React.Component {
    S3_BUCKET = 'YOUR_BUCKET_NAME_HERE';
    REGION = 'YOUR_DESIRED_REGION_HERE';


AWS.config.update({
        accessKeyId: 'YOUR_ACCESS_KEY_HERE',
        secretAccessKey: 'YOUR_SECRET_ACCESS_KEY_HERE'
})

    myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: REGION,
    })

    UploadImageToS3WithNativeSdk = () => {

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
                Key: file.name
            };

            myBucket.putObject(params)
                .on('httpUploadProgress', (evt) => {
                    setProgress(Math.round((evt.loaded / evt.total) * 100))
                })
                .send((err) => {
                    if (err) console.log(err)
                })
        }


        return <div>
            <div>Native SDK File Upload Progress is {progress}%</div>
            <input type="file" onChange={handleFileInput} />
            <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
        </div>
    }
}
export default UploadImageToS3WithNativeSdk;