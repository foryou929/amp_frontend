import { useEffect, useState } from "react";
import List from "../../components/List";
import SpaceItem from "../../components/SpaceItem";
import query from "../../utils/query";

const View = ({ mode }) => {
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        try {
            query.auth.get(`/${mode}/space`, (spaces) => setSpaces(spaces));
        } catch (err) {
            console.error(err.message);
        }
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold">スペースを管理</h1>
            <List
                pagination
                className="mt-4"
                items={spaces.map(space => {
                    return {
                        key: space.id,
                        content: <SpaceItem mode={mode} space={space} />
                    }
                })} />
        </>
    )
}

export default View;