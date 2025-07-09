import ChatIcon from '@mui/icons-material/Chat';
import HomeFilledIcon from '@mui/icons-material/HomeFilled'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react'
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Sidebar() {
    const [opened, setOpened] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl)
    const [sidebarButtonProperties, setSidebarButtonProperties] = useState([
        {
            id: 1,
            name: "Home",
            button: <button className=''></button>,
            collapsed: false,
            openable: false,
            children: [
                {
                    icon: <HomeFilledIcon />,
                    name: "homies"
                }
            ]
        },
        {
            id: 2,
            name: "Social",
            collapsed: false,
            openable: true,
            children: [
                {
                    icon: <ChatIcon />,
                    name: "homie1"
                }
            ]
        },
        {
            id: 3,
            name: "Utilities",
            collapsed: false,
            openable: true,
            children: [
                {
                    icon: <ChatIcon />,
                    name: "hi"
                }
            ]
        }
    ])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }


    const expandedSidebarButtons = [
        <button className='border p-2'>Home</button>,
        <button className='border p-2'>Social</button>,
        <button className='border p-2'>Utilities</button>,
        <button className='border p-2'>Settings</button>
    ]

    const handleSidebarButtonClick = (id) => {
        setSidebarButtonProperties((prev) => prev.map((data) =>
            data.id == id ? { ...data, collapsed: !data.collapsed } : data
        ))
    }

    return (
        <div className='hidden md:inline-block bg-slate-100'>
            <div className='flex flex-row justify-center mt-3 mb-3'>
                <button className={opened ? `absolute left-0 ml-30` : ``} onClick={() => setOpened(!opened)}>
                    <MenuIcon />
                </button>
            </div>
            <AnimatePresence>
                <div className={opened ? `flex-col items-center pt-2 flex basis-5/20 px-10` : `flex-col items-center pt-2 flex basis-2/20 mx-2.5`}>
                    <div className='flex flex-col w-full gap-y-2'>
                        {opened && (
                            // <motion.div
                            //     key="collapsed"
                            //     className="flex flex-col items-center mt-5 gap-y-3"
                            //     initial={{ x: '-100%' }}
                            //     animate={{ x: 0 }}
                            //     exit={{ x: '-100%' }}
                            //     transition={{ duration: 0.2, ease: 'easeInOut' }}
                            // >
                            //     <p className='text-slate-400'>Home</p>
                            //     <Button color='black' startIcon={<HomeFilledIcon />} size='large'> Home </Button>
                            //     {/* <Button color='black' startIcon={<ChatIcon />} size='large'> Chat </Button> */}
                            //     <Button onClick={handleClick}>Comms</Button>
                            //     <Menu
                            //         anchorEl={anchorEl}
                            //         open={open}
                            //         onClose={handleClose}
                            //     >
                            //         <MenuItem onClose={handleClose}>Profile</MenuItem>
                            //         <MenuItem onClose={handleClose}>Profile</MenuItem>
                            //         <MenuItem onClose={handleClose}>Profile</MenuItem>
                            //         <MenuItem onClose={handleClose}>Profile</MenuItem>
                            //     </Menu>
                            //     <p className='text-slate-400'>Chats</p>
                            //     <Button color='black' startIcon={<ChatIcon />} size='large'> Chat </Button>
                            //     <Button color='black' startIcon={<ChatIcon />} size='large'> Chat </Button>
                            // </motion.div>
                            sidebarButtonProperties.map((data) => {
                                return <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '-100%' }}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    className='flex flex-col'
                                    key={data.id}>
                                    {/* to render parents */}
                                    <button key={data.id} className='border p-2' onClick={() => handleSidebarButtonClick(data.id)}>{data.name}</button>
                                    {/* to render children */}
                                    {
                                        data.collapsed ? data.children.map((childrenData) => {
                                            return <div className='flex'>
                                                {childrenData.icon}
                                                <button key={data.id}>{childrenData.name}</button>

                                            </div>
                                        }) : null
                                    }
                                </motion.div>
                            })

                        )}

                        {!opened && (
                            <motion.div
                                key="menu"
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
                    </div>
                </div>
            </AnimatePresence >
        </div >
    )
}

export default Sidebar