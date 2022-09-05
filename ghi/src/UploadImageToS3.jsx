// import React, { useState } from 'react';
// import { uploadFile } from 'react-s3';

// import AWS from 'aws-sdk'



// class UploadImageToS3WithNativeSdk extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             photo: "",
//         };

//         S3_BUCKET = { AWS_STORAGE_BUCKET_NAME };
//         REGION = 'US West (N. California) us-west-1';

//         AWS.config.update({
//             process.env.REACT_APP_accessKeyId: { AWS_ACCESS_KEY_ID },
//             REACR_APP_secretAccessKey: { AWS_SECRET_ACCESS_KEY }
//     })

//     myBucket = new AWS.S3({
//         params: { Bucket: S3_BUCKET },
//         region: REGION,
//     })

//     UploadImageToS3WithNativeSdk = () => {

//         const [progress, setProgress] = useState(0);
//         const [selectedFile, setSelectedFile] = useState(null);

//         const handleFileInput = (e) => {
//             setSelectedFile(e.target.files[0]);
//         }

//         const uploadFile = (file) => {

//             const params = {
//                 ACL: 'public-read',
//                 Body: file,
//                 Bucket: S3_BUCKET,
//                 Key: file.name
//             };

//             myBucket.putObject(params)
//                 .on('httpUploadProgress', (evt) => {
//                     setProgress(Math.round((evt.loaded / evt.total) * 100))
//                 })
//                 .send((err) => {
//                     if (err) console.log(err)
//                 })
//         }


//         return <div>
//             <div>Native SDK File Upload Progress is {progress}%</div>
//             <input type="file" onChange={handleFileInput} />
//             <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
//         </div>
//     }
// }
// }
// export default UploadImageToS3WithNativeSdk;