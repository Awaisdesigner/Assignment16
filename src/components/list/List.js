import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { ListItemIcon } from '@mui/material';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Tooltip from '@mui/material/Tooltip';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Divider from '@mui/material/Divider';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';



const hello = () => {


    const [open, setOpen] = useState(false)


    return (
        <div>

            <List style={{ width: '290px', backgroundColor: ' #e6e6e6', color: 'black', height: '100%' }}>

                <IconButton style={{ marginLeft: 9 }}>
                    <MenuIcon button onClick={() => setOpen(false)} />
                </IconButton>



                <ListItem button onClose={() => setOpen(false)}>
                    <ListItemIcon>
                        <WbSunnyOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Day" />
                    <div>2</div>
                </ListItem>

                <ListItem button onClose={() => setOpen(false)}>
                    <ListItemIcon>
                        <StarBorderPurple500OutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Important" />
                    <div>2</div>
                </ListItem>

                <ListItem button onClose={() => setOpen(false)}>
                    <ListItemIcon>
                        <CalendarMonthOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Planned" />
                    <div>1</div>
                </ListItem>

                <ListItem button onClose={() => setOpen(false)}>
                    <ListItemIcon>
                        < PersonOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Assigned to me" />
                </ListItem>

                <ListItem button onClose={() => setOpen(false)}>
                    <ListItemIcon>
                        <OutlinedFlagIcon />
                    </ListItemIcon>
                    <ListItemText primary="Flagged email" />
                </ListItem>

                <ListItem button onClose={() => setOpen(false)}>
                    <ListItemIcon>
                        <HomeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tasks" />
                    <div>16</div>
                </ListItem>

                <ListItem button onClose={() => setOpen(false)}>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="New list" />
                    <GroupAddOutlinedIcon />
                </ListItem>


            </List>

        </div>
    )
}

export default hello