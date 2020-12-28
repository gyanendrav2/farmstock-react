import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import Loader from './components/loader/Loader';
import { Close } from '@material-ui/icons';
import { rootRoutes } from './routes/rootRoutes/rootRoutes';

export class App extends React.Component {
    CloseButton = ({ closeToast }) => <Close style={{ color: '#000' }} onClick={closeToast} />;
    render() {
        return (
            <React.Fragment>
                <Loader initial={false} />
                <MuiThemeProvider theme={theme}>
                    <ToastContainer closeButton={this.CloseButton} />
                    <Router>
                        <Suspense fallback={<Loader initial={true} />}>
                            <Switch>
                                {rootRoutes.map((item, i) => (
                                    <Route key={i} exact path={item.path} component={item.component} />
                                ))}
                            </Switch>
                        </Suspense>
                    </Router>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default App;
