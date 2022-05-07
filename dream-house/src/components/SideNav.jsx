import React from "react";
import { Drawer } from '@mui/material';
import { makeStyles, Container } from "@mui/material";
import Logo from "../images/dreamHouse1.png";

const useStyles = makeStyles({
    navigationLogo: {
        width: "50%",
    },
    navigationLogoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const SideNav = () => {
    const classes = useStyles();
    return (
            <div>
                <Drawer variant="temporary" open={true}>
                    <div className={classes.navigationLogoContainer}>
                        <img className={classes.navigationLogo} src={Logo} alt="Logo" />
                    </div>
                </Drawer>
            </div>
    );
};

export default SideNav;