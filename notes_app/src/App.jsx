import React, { useState, useEffect } from 'react'
import './index.css'
import { TiDelete } from "react-icons/ti";



const App = () => {
    const [value, setValue] = useState(() => {
        return JSON.parse(localStorage.getItem('notes')) || [];
    });
    const [title, setTitle] = useState('');
    const [descp, setDescp] = useState('');

    // FETCH FROM LOCAL STORAGE
    // useEffect(() => {
    //     const storedNotes =
    //         JSON.parse(localStorage.getItem('notes')) || [];

    //     setValue(storedNotes);
    // }, []);


    // ADD NOTE
    const submitHandler = (e) => {
        e.preventDefault();

        const copyValue = [...value];

        copyValue.push({
            title,
            descp
        });

        localStorage.setItem(
            'notes',
            JSON.stringify(copyValue)
        );

        setValue(copyValue);

        setTitle('');
        setDescp('');
    };


    // DELETE NOTE
    const dltNode = (index) => {

        const copyVal = [...value];

        copyVal.splice(index, 1);

        localStorage.setItem(
            'notes',
            JSON.stringify(copyVal)
        );

        setValue(copyVal);
    };


    return (
        <>
            <div className="main">
                <form onSubmit={(e)=>{
                        submitHandler(e)
                }}  className='w-full max-w-xl mx-auto p-4 m-4 rounded-2xl border border-gray-300 bg-gray-100 shadow-md space-y-4'>
                    <div className='space-y-2'>
                        <label htmlFor='title' className='block text-sm font-medium text-gray-700'>Title</label>
                        <input
                            id='title'
                            type='text'
                            value={title}
                            onChange={(e)=>{
                                setTitle(e.target.value)
                            }}
                            className='w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-700 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200'
                            placeholder='Enter note title'
                        />
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='description' className='block text-sm font-medium text-gray-700'>Description</label>
                        <textarea
                            id='description'
                            rows='4'
                            value={descp}
                            onChange={(e)=>{
                                setDescp(e.target.value)
                            }}
                            className='w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-700 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200'
                            placeholder='Write a note description...'
                        />
                    </div>

                    <div className='flex justify-end'>
                        <button type='submit' className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-5 py-2.5 rounded-xl text-white font-medium">
                            Add
                        </button>
                    </div>
                </form>

                <div className="allNotes mt-8 px-4 pb-6">
                    <h1 className='text-amber-300 align-middle items-center justify-center text-5xl border-2'></h1>
                    <div className="flex flex-wrap gap-5 mt-6 h-full overflow-auto ">
                        {value.map((note, index) => {
                            return (
                                <div 
                                    style={{
                                        backgroundImage: "url('https://imgs.search.brave.com/HFRFCDgWjDJsDhP7l3-TLBdcBpaDdmekeB-hOA3OvLE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vcG5nLW5vdGUt/cGFwZXItdHJhbnNw/YXJlbnQtZGlhcnkt/cGFnZS13aGl0ZS1i/YWNrZ3JvdW5kXzUz/ODc2LTkwMDg5NC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                    className="group ml-1 flex h-56 w-56 flex-col rounded-2xl border border-gray-200 bg-linear-to-br from-white via-gray-50 text-2xl to-violet-50 p-4 shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(124,58,237,0.18)] "
                                    key={index}
                                >
                                    <div className="mb-3 mt-0.8 flex items-center justify-between">
                                        <span className="rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-700">
                                            Note
                                        </span>
                                        <span className="text-xs text-violet-700">#{index + 1}</span>
                                    </div>

                                    <h2 className="mb-3 line-clamp-2 text-lg font-bold leading-snug text-gray-800">
                                        {note.title || 'Untitled Note'}
                                    </h2>

                                    <p className="flex-1 overflow-hidden text-sm leading-6 text-gray-600 wrap-break-word">
                                        {note.descp || 'No description added yet.'}
                                    </p>

                                    <div onClick={()=>{
                                        dltNode(index);
                                    }} className=" align-middle items-center justify-end mt-4 flex cursor-pointer text-gray-400 transition-colors duration-300 hover:text-red-500 text-2xl">
                                            <TiDelete />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App