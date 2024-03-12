import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import FileUploader from "../../components/FileUploader";
import Textarea from "../../components/Textarea";

import { danger } from "../../common/messageSlice";
import query from "../../utils/query";

const MessageContainer = ({ message }) => {
    return (
        <div className="w-full px-4 py-2 border border-gray-[400]">
            <div className="flex items-center">
                <div className="w-16 flex-none">
                    <Avatar className="w-12 h-12" src={message.sender.avatar} circle />
                </div>
                <div className="flex-grow flex-none">
                    <div className="flex">
                        <div className="flex-grow text-[#00146E] font-bold">
                            {message.sender.username}
                        </div>
                        <div className="flex-none text-sm text-gray-400">
                            {moment(message.updated_at).format("YYYY年MM月DD日 h:m")}
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 mt-2">
                <div className="p-2">
                    {message.content}
                </div>
                <ul className='w-full mt-2'>
                    {message.message_files.map((file, index) => (
                        <li key={index} className={`w-full p-2 border-dashed ${index == 0 ? "border-y" : "border-b"}`}>
                            <a href={file.source} className='w-full text-ellipsis overflow-hidden text-[#56A7FF]'>
                                {file.source.substring(file.source.lastIndexOf('/') + 1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Message = ({ mode }) => {
    const dispatch = useDispatch();

    const fileUploaderRef = useRef();

    const [messages, setMessages] = useState([]);
    const [content, setContent] = useState("");

    const [queryParameters] = useSearchParams();
    const id = queryParameters.get("id");

    useEffect(() => {
        if (id) {
            query.auth.get(`/${mode}/section/${id}/message`, (messages) => {
                setMessages(messages);
            });
        }
    }, []);

    const onSendClick = async () => {
        try {
            if (content.trim().length == 0) {
                dispatch(danger("メッセージを入力してください。"));
                return;
            }
            const message = await query.auth.post(`/${mode}/section/${id}/message`, { content });
            await fileUploaderRef.current.upload(`/${mode}/message/${message.id}`, (file) => message.message_files.push(file));
            setMessages([...messages, { ...message, sender: { ...message.sender, avatar: message.sender.avatar } }]);
            fileUploaderRef.current.clear();
            setContent("");
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="flex flex-col gap-4 py-4">
            {messages.map(message => <MessageContainer key={message.id} message={message} />)}
            <div className="">
                <div className="">
                    <div className="">
                        <Textarea className="min-h-40" value={content} onChange={(e) => {
                            setContent(e.target.value);
                        }} />
                        <FileUploader ref={fileUploaderRef} />
                    </div>
                </div>
                <Button className="w-full mt-4" onClick={onSendClick}>メッセージを投稿する</Button>
            </div>
        </div>
    )
}

export default Message;