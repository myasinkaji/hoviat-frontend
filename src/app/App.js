import './App.css';
import {createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider} from "@material-ui/core";
import SideMenu from "../component/SideMenu";
import Header from "../component/Header";
import {useState} from "react";
import Employees from "../pages/employees/Employees";


const useStyle = makeStyles((theme) => ({
    main: {
        paddingLeft: '320px',
        width: '100%'
    },

}));
const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#3f51b5'
        },
        background: {
            default: '#e9e4e4'
            // default: '#c6c3c3'
        }
    },
    shape: {
        // borderRadius: '12px'
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)'
            }
        }
    },
    props: {
        MuiIconButton: {
            disableRipple: false
        }
    }
});
const moharramTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#d70c0c'
        },
        secondary: {
            main: '#000000'
        },
        background: {
            default: '#000000'
        }
    }
});

function App() {

    const themes = [defaultTheme, moharramTheme];
    const classes = useStyle();
    const [state, setState] = useState({
        index: 0
    });

    const changeTheme = (event) => {
        setState({index: state.index ? 0 : 1});
        console.log(state);
    };

    return (
        <MuiThemeProvider theme={themes[state.index]}>
            <SideMenu/>
            <div className={classes.main}>
                <Header/>
                <Employees />
                {/*<FormControlLabel control={<Switch size={"small"} onClick={changeTheme}/>}
                                  label="Moharram"/>*/}
            </div>
            <CssBaseline/>
        </MuiThemeProvider>
    );
}

export default App;
