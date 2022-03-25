import React from 'react';
import List from './List';

const Lists = () => {
    const friendList: string[] = ["sakil", "sagor", "pappu"];
    const clickedName = (name: string) => alert(name);
    return (
        <div>
            <List friendList={friendList} clickedName={clickedName} ></List>
        </div>
    );
};

export default Lists;