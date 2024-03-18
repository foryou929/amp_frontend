import { useState } from "react";

const NotificationList = () => {
    const [notifications, setNotifications] = useState([]);

    return (
        <>
            {notifications.map(notification => (
                <></>
            ))}
        </>
    )
}

export default NotificationList;