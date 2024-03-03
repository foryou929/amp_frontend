import React, { useEffect, useRef, useState } from 'react';

const FileUpload = ({ onChange }) => {
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

    useEffect(() => {
        if (onChange)
            onChange(selectedFiles);
    }, [selectedFiles]);

    console.log(fileRef)

    return (
        <div className='mt-2'>
            <input type="file" className='hidden' multiple onChange={handleFileSelect} ref={fileRef} />
            <button className='flex items-center p-1 border-dashed border border-gray-400 rounded-full' onClick={() => fileRef.current.click()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill='#4BAE4F' />
                    <line x1="12" y1="6" x2="12" y2="18" stroke='white' strokeWidth={2} />
                    <line x1="6" y1="12" x2="18" y2="12" stroke='white' strokeWidth={2} />
                </svg>
                <span className='ml-2'>ファイルアップロード</span>
            </button>
            {selectedFiles.length > 0 && (
                <ul className='mt-2'>
                    {selectedFiles.map((file, index) => (
                        <li key={index} className={`flex items-center p-2 border-dashed ${index == 0 ? "border-y" : "border-b"}`}>
                            <div className='flex-grow'>
                                {file.name}
                            </div>
                            <button className='flex-none' onClick={() => handleFileDelete(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="12" fill='#F44336' />
                                    <line x1="8" y1="8" x2="16" y2="16" stroke='white' strokeWidth={2} />
                                    <line x1="8" y1="16" x2="16" y2="8" stroke='white' strokeWidth={2} />
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FileUpload;