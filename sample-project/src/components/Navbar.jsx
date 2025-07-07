import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import TranslateIcon from '@mui/icons-material/Translate';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Navbar() {

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
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Language</InputLabel>
                    <Select
                        label="Language"
                    >
                        <MenuItem value={10}>English</MenuItem>
                        <MenuItem value={20}>Arabic</MenuItem>
                        <MenuItem value={30}>Kurdish</MenuItem>
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