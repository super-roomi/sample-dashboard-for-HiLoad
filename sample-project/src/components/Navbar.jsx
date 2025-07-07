import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Navbar() {
    {/* Make it responsive */ }

    return (
        <nav className='flex flex-row items-center justify-between p-2 bg-slate-200 h-14'>

            {/* Search */}
            <div className='flex flex-row gap-x-2'>
                <SearchIcon />
                <form action="">
                    <input type="text" placeholder='Search...' />
                </form>
            </div>

            {/* Account, Settings, Notifications, Languages Selector, and Apps */}
            <div className='flex flex-row items-center gap-x-6'>
                <FormControl className='w-30 min-w-30 max-w-30' size="small">
                    <InputLabel>Language</InputLabel>
                    <Select
                        label="Language"
                    >
                        <MenuItem value={'en'}>English</MenuItem>
                        <MenuItem value={'ar'}>Arabic</MenuItem>
                        <MenuItem value={'kr'}>Kurdish</MenuItem>
                    </Select>
                </FormControl>
                <AppsIcon />
                <NotificationsIcon />
                <AccountCircleIcon />
                <SettingsIcon />
            </div>

        </nav>
    )
}

export default Navbar