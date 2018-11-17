import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, FuseAnimate} from '@fuse';
import {connect} from 'react-redux';
import {Avatar, Tab, Tabs, Typography} from '@material-ui/core';
import TimelineTab from 'main/content/pages/profile/tabs/TimelineTab';
import PhotosVideosTab from 'main/content/pages/profile/tabs/PhotosVideosTab';
import AboutTab from 'main/content/pages/profile/tabs/AboutTab'; 

const styles = theme => ({
    layoutRoot   : {},
    layoutToolbar: {
        padding: 0
    },
    layoutHeader : {
        height                        : 320,
        minHeight                     : 320,
        background                    : "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
        backgroundSize                : 'cover',
        color                         : '#fff',
        [theme.breakpoints.down('md')]: {
            height   : 240,
            minHeight: 240
        }
    },
    tabsRoot     : {
        height: 64,
        width : '100%'
    },
    tabRoot      : {
        height: 64
    }
});

class ProfilePage extends Component {

    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render()
    {
        const {classes, user} = this.props;
        const {value} = this.state;

        return (
            <FusePageSimple
                classes={{
                    root   : classes.layoutRoot,
                    header : classes.layoutHeader,
                    toolbar: classes.layoutToolbar
                }}
                header={
                    <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
                        <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
                            <FuseAnimate animation="transition.expandIn" delay={300}>
                                <Avatar className="w-96 h-96" src={user.data.photoURL}/>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                <Typography className="md:ml-24" variant="h4" color="inherit">{user.data.displayName}</Typography>
                            </FuseAnimate>
                        </div>

                    {/*    <div className="flex items-center justify-end">
                            <Button className="mr-8 normal-case" variant="contained" color="secondary" aria-label="Follow">Follow</Button>
                            <Button className="normal-case" variant="contained" color="primary" aria-label="Send Message">Send Message</Button>
                        </div> */}
                    </div>
                }
                contentToolbar={
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        scrollable
                        scrollButtons="auto"
                        classes={{
                            root: classes.tabsRoot
                        }}
                    >
                       
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }} label="About"/>
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }} label="Inductions"/>
                            <Tab
                            classes={{
                                root: classes.tabRoot
                            }} label="Edit Profile"/>
                            <Tab
                            classes={{
                                root: classes.tabRoot
                            }} label="Change Password"/>
                    </Tabs>
                }
                content={
                    <div className="p-16 sm:p-24">
                        
                        {value === 0 && (
                            <AboutTab/>
                        )}
                        {value === 1 && (
                            <PhotosVideosTab/>
                        )}
                        {value === 2 && (
                            <TimelineTab/>
                        )}
                    </div>
                }
            />
        )
    };
}

function mapStateToProps({auth})
{
    return {
        user: auth.user
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps)(ProfilePage));
