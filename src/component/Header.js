import {AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: "#f2f2f2"
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1),
        }
    },
    badge: {
        backgroundColor: 'yellowgreen',
        '& .MuiBadge-colorSecondary': {
            backgroundColor: 'green',
        }
    },
    btnRoot: {
        // backgroundColor: 'brown'
    },
    btnLabel: {
        // backgroundColor: 'ButtonFace'
    },

}));
export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position={"static"} className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase className={classes.searchInput} startAdornment={
                            <SearchIcon fontSize={"small"}/>
                        } placeholder="Search topics"/>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton /*className={classes.badge}*/
                            classes={{root: classes.btnRoot, label: classes.btnLabel}}>
                            <Badge badgeContent={4} color={"secondary"}>
                                <NotificationsNoneIcon fontSize={"small"}/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color={"primary"}>
                                <ChatBubbleOutlineIcon fontSize={"small"}/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize={"small"}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}