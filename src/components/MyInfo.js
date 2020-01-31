import React, { Component } from 'react'
import S3FileUpload from 'react-s3';
import aws from '../keys';

const config = {
    bucketName: 'beatshopdb',
    dirName: 'photos', /* optional */
    region: 'eu-east-1',
    accessKeyId: aws.accessKeyId,
    secretAccessKey: aws.secretAccessKey,
    ServerSideEncryption: 'AES256'
}
export class MyInfo extends Component {

    constructor() {
        super();
    }

    upload(e){
        //console.log(e.target.files[0]);
        S3FileUpload.uploadFile(e.target.files[0], config)
        .then((data) => {
            console.log(data.location);
        }).catch((err) => {
            alert(err);
        })
    }
   
    render() {

        return (
            <div>
                <h3>
                    aws s3 upload
                </h3>
                <input type="file" onChange={this.upload}/>
            </div>
        )
    }
}

export default MyInfo;