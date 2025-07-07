import ChatIcon from '@mui/icons-material/Chat';
import HomeFilledIcon from '@mui/icons-material/HomeFilled'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useContext } from 'react';


function Sidebar() {
    const [opened, setOpened] = useState(false);


    return (
        <div className='hidden md:inline-block bg-slate-100'>
            <div className='flex flex-row justify-center mt-3 mb-3'>
                <button className='' onClick={() => setOpened(!opened)}>
                    <MenuIcon />
                </button>
            </div>
            <div className={opened ? `flex-col items-center pt-2 flex basis-5/20 px-20` : `flex-col items-center pt-2 flex basis-2/20 mx-5`}></div>
            <div className='flex flex-col w-full gap-y-2'>
                {opened ?
                    <>
                        <Button color='black' startIcon={<HomeFilledIcon />} size='large'> Home </Button>
                        <Button color='black' startIcon={<ChatIcon />} size='large'> Chat </Button>
                        <Button color='black' startIcon={<ChatIcon />} size='large'> Chat </Button>
                        <Button color='black' startIcon={<ChatIcon />} size='large'> Chat </Button>
                    </>
                    :
                    <>
                        <div className='flex flex-col items-center gap-y-5'>
                            <Button color='black'><HomeFilledIcon /></Button>
                            <Button color='black'><ChatIcon /></Button>
                            <Button color='black'><ChatIcon /></Button>
                            <Button color='black'><ChatIcon /></Button>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default Sidebar