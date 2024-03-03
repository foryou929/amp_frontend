import { useEffect, useState } from "react";

import List from "../../components/List";
import SectionItem from "../../components/SectionItem";

import query from "../../utils/query";

const Scout = ({ mode }) => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        query.auth.get(`/api/${mode}/section`, (sections) => {
            setSections(sections);
        });
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold">スカウト一覧</h1>
            <List
                className="mt-4"
                items={
                    sections.filter(section => section.step == 1).map(section => {
                        return {
                            key: section.id,
                            content: <SectionItem mode={mode} section={section} />
                        }
                    })
                }
            />
        </>
    )
}

export default Scout;