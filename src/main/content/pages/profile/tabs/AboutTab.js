import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {connect} from 'react-redux';
import {AppBar, Card, CardContent, Toolbar, Typography} from '@material-ui/core';
import classNames from 'classnames';
import {FuseAnimateGroup} from '@fuse';

const styles = () => ({
    root: {}
});

class AboutTab extends Component {

    

    render()
    {
        const {classes, user} = this.props;
        

        return (
            <div className={classNames(classes.root, "md:flex max-w-2xl")}>

                <div className="flex flex-col flex-1 md:pr-32">
                    <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                    >
                        <Card className="w-full mb-16">
                                <AppBar position="static" elevation={0}>
                                    <Toolbar className="pl-16 pr-8">
                                        <Typography variant="subtitle1" color="inherit" className="flex-1">
                                            General Information
                                        </Typography>
                                    </Toolbar>
                                </AppBar>

                                <CardContent>
                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">Gender</Typography>
                                        <Typography>{user.data.displayName}</Typography>
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">Birthday</Typography>
                                        <Typography>{user.data.displayName}</Typography>
                                    </div>

                                   {/*} <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">Locations</Typography>

                                        {general.locations.map((location) => (
                                            <div className="flex items-center" key={location}>
                                                <Typography>{location}</Typography>
                                                <Icon className="text-16 ml-4" color="action">location_on</Icon>
                                            </div>
                                        ))}
                                    </div> */}

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">About Me</Typography>
                                        <Typography>{user.data.displayName}</Typography>
                                    </div>

                                </CardContent>
                            </Card>
                       

                        
                            <Card className="w-full mb-16">
                                <AppBar position="static" elevation={0}>
                                    <Toolbar className="pl-16 pr-8">
                                        <Typography variant="subtitle1" color="inherit" className="flex-1">
                                            Work
                                        </Typography>
                                    </Toolbar>
                                </AppBar>

                                <CardContent>
                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">Occupation</Typography>
                                        <Typography>{user.data.email}</Typography>
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">Skills</Typography>
                                        <Typography>{user.data.email}</Typography>
                                    </div>

                                  {/*  <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">Jobs</Typography>
                                        <table className="">
                                            <tbody>
                                                {user.data.email.map((job) => (
                                                    <tr key={job}>
                                                        <td className="pr-16">
                                                            <Typography>{job}</Typography>
                                                        </td>
                                                        <td>
                                                            <Typography color="textSecondary">{job}</Typography>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    */}
                                </CardContent>
                            </Card>
                        

                        
                           {/* <Card className="w-full mb-16">
                                <AppBar position="static" elevation={0}>
                                    <Toolbar className="pl-16 pr-8">
                                        <Typography variant="subtitle1" color="inherit" className="flex-1">
                                            Contact
                                        </Typography>
                                    </Toolbar>
                                </AppBar>

                                <CardContent>
                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">Address</Typography>
                                        <Typography>{user.data.photoURL}</Typography>
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">Tel.</Typography>

                                        {user.data.photoURL.map((tel) => (
                                            <div className="flex items-center" key={tel}>
                                                <Typography>{tel}</Typography>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">Website</Typography>

                                        {user.data.photoURL.map((website) => (
                                            <div className="flex items-center" key={website}>
                                                <Typography>{website}</Typography>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-24">
                                        <Typography className="font-bold mb-4 text-15">Emails</Typography>

                                        {user.data.photoURL.map((email) => (
                                            <div className="flex items-center" key={email}>
                                                <Typography>{email}</Typography>
                                            </div>
                                        ))}
                                    </div>

                                </CardContent>
                            </Card> */}
                        
                    </FuseAnimateGroup>
                </div>

               </div>
        );
    }
}

function mapStateToProps({auth})
{
    return {
        user: auth.user
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps)(AboutTab));
