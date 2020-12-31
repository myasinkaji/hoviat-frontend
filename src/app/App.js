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
    typography: {
      fontSize: 12
    },
    palette: {
        primary: {
            main: '#333996',
            // main: '#3f51b5',
            light: '#3c44b126',
        },
        secondary: {
            main: '#f83245',
            light: '#f8324526',
        },
        background: {
            // default: '#f4f5fd',
            default: '#ebecfc',
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
