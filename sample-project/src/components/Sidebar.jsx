import ChatIcon from '@mui/icons-material/Chat';
import HomeFilledIcon from '@mui/icons-material/HomeFilled'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react'



function Sidebar() {
    const [opened, setOpened] = useState(false);


    return (
        <div className='hidden md:inline-block bg-slate-100'>
            <div className='flex flex-row justify-center mt-3 mb-3'>
                <button className={opened ? `absolute left-0 ml-30` : ``} onClick={() => setOpened(!opened)}>
                    <MenuIcon />
                </button>
            </div>
            <div className={opened ? `flex-col items-center pt-2 flex basis-5/20 px-20` : `flex-col items-center pt-2 flex basis-2/20 mx-5`}></div>
            <div className='flex flex-col w-full gap-y-2'>
                <AnimatePresence mode="wait">
                    {opened && (
                        <motion.div
                            key="menu"
                            className="flex flex-col items-center mt-5 gap-y-3"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <p className='text-slate-400'>Home</p>
                            <Button color='black' startIcon={<HomeFilledIcon />} size='large'> Home </Button>
                            <Button color='black' startIcon={<ChatIcon />} size='large'> Chat </Button>
                            <p className='text-slate-400'>Chats</p>
                            <Button color='black' startIcon={<ChatIcon />} size='large'> Chat </Button>
                            <Button color='black' startIcon={<ChatIcon />} size='large'> Chat </Button>
                        </motion.div>
                    )}

                    {!opened && (
                        <motion.div
                            key="collapsed"
                            className='flex flex-col items-center gap-y-3'
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <Button color='black'><HomeFilledIcon /></Button>
                            <Button color='black'><ChatIcon /></Button>
                            <Button color='black'><ChatIcon /></Button>
                            <Button color='black'><ChatIcon /></Button>
                        </motion.div>
                    )}
                </AnimatePresence>


            </div>
        </div>
    )
}

export default Sidebar