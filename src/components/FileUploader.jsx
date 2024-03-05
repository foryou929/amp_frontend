import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import query from '../utils/query';

const FileUploader = forwardRef((props, ref) => {
    const fileRef = useRef();
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (event) => {
        setSelectedFiles([...event.target.files]);
    };

    const handleFileDelete = (index) => {
        setSelectedFiles((prevFiles) => {
            const updatedFiles = [...prevFiles];
            updatedFiles.splice(index, 1);
            return updatedFiles;
        });
    };

    const upload = async (url, success, error) => {
        for (let i = 0; i < selectedFiles.length; i++) {
            const formData = new FormData()
            formData.append(`source`, selectedFiles[i]);
            await query.auth.post(url, formData, success, error);
        }
    };

    const clear = async () => {
        setSelectedFiles([]);
        fileRef.current.value = null;
    }

    useImperativeHandle(ref, () => ({
        upload,
        clear
    }));

    return (
        <div className='mt-2'>
            <input type="file" className='hidden' multiple onChange={handleFileSelect} ref={fileRef} />
            <button className='flex ites-center p-1 border-dashed border border-gray-400 rounded-full' onClick={() => {
                fileRef.current.value = null;
                fileRef.current.click()
            }}>
                <img src="/img/remove.svg" />
                <span className='ml-2'>ファイルアップロード</span>
            </button>
            {selectedFiles.length > 0 && (
                <ul className='mt-2'>
                    {selectedFiles.map((file, index) => (
                        <li key={index} className={`flex items-center p-2 border-dashed ${index == 0 ? "border-y" : "border-b"}`}>
                            <div className='flex-grow text-ellipsis overflow-hidden'>
                                {file.name}
                            </div>
                            <button className='flex-none' onClick={() => handleFileDelete(index)}>
                                <img src="/img/plus.svg" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});

export default FileUploader;