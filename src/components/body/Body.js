import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
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





// import { makeStyles } from '@mui/material';

// const useStyles = makeStyles((theme) => ({

//     sidebar: {
//         width: '40%',
//         padding: theme.spacing(3)
//     }
// }))

export default function Body() {



    const [open, setOpen] = useState(false)
    const [studentsName, setStudentsName] = useState('')
    const [items, setItems] = useState([])



    const addItem = (e) => {
        if (!items) {

        } else {
            setItems([...items, studentsName])
            setStudentsName('')
        }

        console.log('submit button clicked');
        e.preventDefault()


    }


    const deleteItem = (id) => {

        const updatedItem = items.filter((elem, ind) => {
            return ind !== id
        })

        setItems(updatedItem)
    }

    const submitData = () => {


    }







    return (
        <>
            <Box sx={{ width: '100%', marginTop: 1 }}>
                <Grid container rowSpacing={0.5}>

                    <Grid item xs={12} md={3}>
                        <IconButton style={{ marginLeft: 9, marginTop: -8 }}>
                            <MenuIcon button onClick={() => setOpen(true)} />
                        </IconButton>

                        <div>
                            <SwipeableDrawer open={open} onClose={() => setOpen(false)}>
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

                                    <ListItem button>
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

                            </SwipeableDrawer>
                        </div>

                    </Grid>


                    <Grid item xs={12} md={6}>

                        {/* <span>My Day ...</span> */}
                        <div style={{ marginTop: 6, backgroundColor: 'rgb(234, 234, 234)', width: '90%', padding: '5px' }}>
                            <form onSubmit={submitData} style={{ display: 'block' }}>
                                <input className="inputData" type="text" placeholder='Add todo task' value={studentsName} onChange={(e) => setStudentsName(e.target.value)} />
                                <button onClick={addItem} className='btn' >Add Task</button>
                            </form>

                        </div>


                        <div>
                            {
                                items.map((element, ind) => {
                                    return (
                                        <div key={ind}>
                                            <i>{element}</i>
                                            <button className="del" style={{ marginLeft: '5px' }} onClick={() => deleteItem(ind)}>Delete</button>
                                        </div>
                                    )
                                })
                            }


                        </div>


                    </Grid>




                    <Grid item xs={12} md={3}>



                        <Box>

                            <div style={{ boxShadow: '2px 2px 0px 10px #e6e6e6', margin: 6 }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <Tooltip placement="top-start" title="Mark as completed" arrow>
                                            <IconButton >
                                                <CircleOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </ListItemIcon>
                                    <ListItemText primary="test 3" />
                                    <StarOutlineOutlinedIcon />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <AddIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText style={{ color: 'blue' }} primary="Add step" />
                                </ListItem>
                            </div>



                            <div style={{ boxShadow: '2px 2px 0px 10px #e6e6e6', margin: 6 }}>
                                <ListItem>
                                    <ListItemIcon style={{ cursor: 'pointer' }}>
                                        <WbSunnyOutlinedIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText style={{ marginTop: 10, color: 'blue' }} primary="Added to My Day" />
                                </ListItem>
                            </div>



                            <div style={{ boxShadow: '2px 2px 9px 10px #e6e6e6', margin: 6 }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <NotificationsNoneOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Remind me" />
                                </ListItem>

                                <Divider />
                                <ListItem>
                                    <ListItemIcon>
                                        <CalendarMonthOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add due date" />
                                </ListItem>

                                <Divider />
                                <ListItem>
                                    <ListItemIcon>
                                        <EventRepeatOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Repeat" />
                                </ListItem>


                                <ListItem style={{ boxShadow: '3px 2px 0px 10px #e6e6e6' }}>
                                    <ListItemIcon>
                                        <LocalOfferOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Pick a category" />
                                </ListItem>


                                <div style={{ boxShadow: '0px 6px 30px 10px #e6e6e6' }}>
                                    <ListItem style={{ marginTop: 4, height: 60 }}>
                                        <ListItemIcon>
                                            <AttachFileOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Add file" />
                                    </ListItem>
                                </div>

                                <ListItem style={{ boxShadow: '2px 15px 0px 10px #e6e6e6', height: 90 }}>
                                    <ListItemText style={{ marginTop: -23 }} primary="Add note" />
                                </ListItem>
                            </div>


                        </Box>


                    </Grid>

                </Grid>

            </Box>


        </>
    );
}

