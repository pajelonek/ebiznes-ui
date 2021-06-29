import React from "react";
import Grid from "@material-ui/core/Grid";
import {
    ButtonGroup, ClickAwayListener, Grow,
    MenuItem, MenuList, Paper, Popper, Toolbar
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppBar from "@material-ui/core/AppBar";
import {MContext} from "./MyProvider";

export default function AlbumMenu() {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const options = ['Wszystko', 'Telewizory', 'Laptopy', 'Lodówki'];
    const [itemsResponse, setItemsResponse] = React.useState();


    async function searchFetch() {
        return await fetch(process.env.REACT_APP_APIURL + '/products')
            .then(response => setItemsResponse(response));
    }

    const handleClick = () => {
        searchFetch().then(response => console.log(response));
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return <AppBar position="relative">
        <Grid container direction="column" alignItems="center">
            <Toolbar item xs={12}>
                <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                    <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                    <Button
                        color="primary"
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon/>
                    </Button>
                </ButtonGroup>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({TransitionProps, placement}) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                width: '130px',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu">
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                selected={index === selectedIndex}
                                                onClick={(event) => handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                <div>
                    <MContext.Consumer>
                        {(context) => (
                            <button onClick={()=>{context.setMessage("New Arrival")}}>Send</button>
                        )}
                    </MContext.Consumer>
                </div>
            </Toolbar>
        </Grid>
    </AppBar>;

}