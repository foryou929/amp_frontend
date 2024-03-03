import { useEffect, useRef, useState } from "react";
import moment from "moment";

import query from "../../../utils/query";
import Button from "../../../components/Button";
import FileUploader from "../../../components/FileUploader";
import Textarea from "../../../components/Textarea";

const MessageContainer = ({ message }) => {
    return (
        <div className="w-full flex px-4 py-2 border border-gray-[400]">
            <div className="w-16 flex-none">
                { }
            </div>
            <div className="flex-grow">
                <div className="flex">
                    <div className="flex-grow text-[#00146E] font-bold">
                        {message.sender.username}
                    </div>
                    <div className="flex-none text-sm text-gray-400">
                        {moment(message.updated_at).format("YYYY年MM月DD日 h:m")}
                    </div>
                </div>
                <div className="">
                    {message.content}
                </div>
            </div>
        </div>
    )
}

const Message = ({ mode, id }) => {
    const fileUploaderRef = useRef();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (id) {
            query.auth.get(`api/${mode}/section/${id}/message`, (messages) => {
                setMessages(messages);
            });
        }
    }, [id]);

    const onSendClick = () => {
        fileUploaderRef.current.upload("api/upload", (res) => {

        });
    }

    return (
        <div className="flex flex-col gap-4 py-4">
            {
                messages.map(message => <MessageContainer key={message.id} message={message} />)
            }
            <div className="">
                <div className="">
                    <div className="">
                        <Textarea className="min-h-40" />
                        <FileUploader ref={fileUploaderRef} />
                    </div>
                </div>
                <Button className="w-full mt-4" onClick={onSendClick}>メッセージを投稿する</Button>
            </div>
        </div>
    )
}

export default Message;