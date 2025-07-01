import ChatIcon from '@mui/icons-material/Chat';
import HomeFilledIcon from '@mui/icons-material/HomeFilled'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


function Sidebar() {
    const [opened, setOpened] = useState(false);

    return (
        <div>
            <div className='flex p-2 jusitfy-between items-center gap-x-3'>
                <Button onClick={() => setOpened(!opened)}>
                    <MenuIcon />
                </Button>
            </div>
            <div className={opened ? `flex-col items-center pt-2 flex basis-5/20` : `flex-col items-center pt-2 flex basis-2/20 transition-all duration-200`}></div>
            <div className='flex flex-col w-full gap-y-2'>
                {opened ?
                    <>
                        <Button color='black' startIcon={<HomeFilledIcon />}> Home </Button>
                        <Button color='black' startIcon={<ChatIcon />}> Chat </Button>
                        <Button color='black' startIcon={<ChatIcon />}> Chat </Button>
                        <Button color='black' startIcon={<ChatIcon />}> Chat </Button>
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