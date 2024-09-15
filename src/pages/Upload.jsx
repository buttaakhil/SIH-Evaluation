import React from 'react'
import BackHomeButton from '../components/BackHomeButton';
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import BeforeUploadSection from '../sections/BeforeUploadSection'
import "../pagesStyling/Upload.css";
import DragAndDrop from '../sections/DragAndDrop';

const Upload = () => {

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div className='UploadSectionOuter'>
            <div className='UploadSectionBackButton'>
                <BackHomeButton />
            </div>
            <div className='UploadPageHeaderAndBody'>
                <h2 className='UploadHeader'>UPLOAD</h2>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                        <DragAndDrop/>
                        :
                        <BeforeUploadSection />
                    }
                </div>
            </div>
        </div>
    );
}

export default Upload;