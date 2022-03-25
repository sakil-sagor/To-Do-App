
import React, { useEffect, useState } from 'react';


interface TodoTaskList {
    todoName: string;
    time: string;
}

const getLocalItems = () => {
    let todo: TodoTaskList[] = JSON.parse(localStorage.todos);
    return todo;
}

const TodoList = () => {
    const [inputData, setInputData] = useState<string>('');
    const [items, setItems] = useState<TodoTaskList[]>(getLocalItems());

    // add single todo 
    const addItems = (): void => {
        if (inputData) {
            const taskTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            const newInuptData = { todoName: inputData, time: taskTime }
            setItems([...items, newInuptData]);
            setInputData('');
        }
    }

    // delete single todo 
    const deleteItem = (id: number): void => {
        const remainingItem = items.filter((item, index) => (index !== id));
        setItems(remainingItem);
    }

    // edit single todo 
    const updateItem = () => {

    }
    // Remove all by one click 
    const deleteAllItem = () => {
        setItems([]);
    }
    // add item to localstorage 
    useEffect(() => {

        localStorage.todos = JSON.stringify(items);
    }, [items]);


    return (
        <>
            <div className='container mx-auto'>
                <div >
                    <h1 className='py-8 text-4xl font-bold'>Add your Friends here ...</h1>
                    <input className='px-2 py-2 border-2 border-indigo-800  w-96 outline-0 rounded-l-lg' type="text"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <button className='px-3 py-2 border-2 border-indigo-800 bg-indigo-800 text-white hover:bg-indigo-700 rounded-r-lg' onClick={() => addItems()}>Add</button>
                </div>
                <div className='py-4 w-96 mx-auto'>
                    {
                        items.map((item: TodoTaskList, index: number) =>
                            <div key={index} className='flex items-center justify-between rounded-lg text-lg  my-3 bg-gray-300 p-0 m-0'>
                                <div className='flex'>
                                    <div className='bg-indigo-600 py-3 px-5 rounded-l-lg'>
                                        <span className='text-white  ' >  {index + 1}</span>
                                    </div>
                                    <div className='py-3 px-3'>
                                        <span className='block'>{item.todoName}</span>
                                        <span className='text-xs'>Added:  {item.time}</span>
                                    </div>
                                </div>

                                <div className='pr-3'>
                                    <i className="fa-solid fa-trash-can pl-2 text-xl text-red-600 hover:text-red-800 cursor-pointer " onClick={() => deleteItem(index)}></i>
                                </div>



                            </div>

                        )
                    }


                </div>
                <div>
                    <button className='px-2 py-1 border-2 border-indigo-800 bg-indigo-800 text-white hover:bg-indigo-700 ' onClick={() => deleteAllItem()}>Remove All</button>
                </div>
            </div>
        </>
    );
};

export default TodoList;
