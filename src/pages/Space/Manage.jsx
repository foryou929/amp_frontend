import { useEffect, useState } from "react";
import List from "../../components/List";
import SpaceItem from "../../components/SpaceItem";
import query from "../../utils/query";

const Manage = ({ mode }) => {
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        query.auth.get(`api/${mode}/space`, (spaces) => {
            setSpaces(spaces);
        });
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold">スペースを管理</h1>
            <List className="mt-4" items={spaces.map(space => {
                return {
                    key: space.id,
                    content: <SpaceItem mode={mode} space={space} />
                }
            })} />
        </>
    )
}

export default Manage;