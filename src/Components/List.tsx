import React from 'react';

const List = ({ friendList, clickedName }: { friendList: string[], clickedName: (name: string) => void }) => {




    return (
        <div>
            {
                friendList.map((text, index) => (
                    <h1 key={index} onClick={() => clickedName(text)}>{text}</h1>
                ))
            }
        </div>
    );
};

export default List;