import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class ChangelogDoc extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <Typography variant="h6">Changelog</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.2.6</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-11-07)</Typography>
                            </div>
                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">
                                    FIX:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Theme Layout-1 Mobile fix (!important)
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.2.5</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-11-06)</Typography>
                            </div>
                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">
                                    NEW:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            FuseDialog Component added to theme layout for easily show dialog messages via redux action.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated (Material-ui, react-redux etc).
                                        </Typography>
                                    </li>
                                </ul>
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">
                                    FIX:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Layout-1 folded navigation broken in macOS safari browser.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.2.4</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-10-26)</Typography>
                            </div>
                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">
                                    NEW:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated (React, Material-ui etc).
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.2.3</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-10-14)</Typography>
                            </div>
                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">
                                    NEW:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated (Redux etc).
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Redux developer tools disabled on production.
                                        </Typography>
                                    </li>
                                </ul>
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">
                                    FIX:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Redux Developer Tools Extension fix: problem occurs if the extension is enabled on Firefox
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.2.2</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-10-09)</Typography>
                            </div>
                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">
                                    NEW:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Initial loading time reduced with code splitting (lazy loading) components and also reducers
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            redux-loadable library added
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            FuseLoadable component created for to avoid repetition
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            webpack-bundle-analyzer package added to devDependencies for to analyze build
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Material UI updated to v3.2.0
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.2.1</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-10-04)</Typography>
                            </div>
                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">
                                    NEW:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            create-react-app updated to v2
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Material UI updated to v3.1.2
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Navigation active item style option added for to use square highlighting(old style).
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            E-commerce App data/assets updated.
                                        </Typography>
                                    </li>
                                </ul>
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">
                                    FIXES:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Synthetically trigger event onChange for higher-order components of formsy.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Edge, Ie font icon ligature fix.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.2.0</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-09-25)</Typography>
                            </div>
                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">
                                    NEW:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            The design is modernized with Google Material Design's new specs.<br/>
                                            + Icons replaced with outlined material icons,<br/>
                                            + Main Font Family changed to Muli<br/>
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Scrumboard App added.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Material UI updated to v3.1.1
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            FuseChipSelect: "variant" attr added for to choose creatable or fixed multi selection.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            @lodash path created to use lodash's mixins.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Webkit scrollbar styles added.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Auth Services(Auth0, Firebase) are revised for to easily disable.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Various mobile device refinements applied.
                                        </Typography>
                                    </li>
                                </ul>
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">
                                    FIXES:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Cleaner approach for Mail App.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.1.8</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-09-08)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            E-commerce App added.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            FuseChipSelect Component added.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Material UI updated to v3.0.2
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.1.7</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-08-27)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            FuseSplashScreen added.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <b>firebaseService</b> and <b>auth0Service</b> created, <b>Auth</b> component added as entry point for authentication.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Login, register pages updated due to adding Auth0 authentication.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            404 page redirection added to the routes.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Material UI updated to v1.5.1
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">BREAKING CHANGES:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            FirebaseAuth Component removed, using Auth component instead.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.1.6</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-08-12)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Chat App added.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Material UI updated to v1.4.3
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.1.5</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-07-18)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Chat Panel added.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            LeftSidePanel RightSidePanel Layout areas added.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Navbar style refined.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Material UI updated to v1.4.0
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Other Dependency packages updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.1.4</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-07-09)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Todo App added.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Material UI updated to v1.3.1
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Other Dependency packages updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.1.3</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-06-28)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Material UI updated to v1.3.0
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.1.2</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-06-18)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Changing default settings with route params.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">FIX:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            FuseAnimate, FuseAnimateGroup inject error.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Folded Navigation extra space fixed between 960px and 1280px of window
                                            width.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.1.1</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-06-10)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>velocity-react</code> added as dependency, its used for fuseAnimation
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>FuseAnimation</code> <code>FuseAnimationGroup</code> created for
                                            easily animate components and applied most of the pages.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>exact</code> property option added to navigation item for matching
                                            location exactly.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.1.0</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-06-06)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Layout system enhanced.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            New Horizontal Layout added (layout-2).
                                        </Typography>
                                    </li>

                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>react-poper</code> added as dependency, its used for horizontal
                                            navigation
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>Material UI</code> updated to v1.2.0
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">FIX:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dialog form of Contacts App and Calendar App fixed due to React 16.4.0
                                            bugfix for getDeriveredStateFromProps
                                        </Typography>
                                        <Typography className="text-14 mb-8">
                                            (https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops).
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Actions and reducers of fuse navigation fixed.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">BREAKING
                                    CHANGES:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Layout and Theme settings data structure changed.
                                        </Typography>
                                        <Typography className="text-14 mb-8">
                                            If you are storing the user data at database, old saved user settings will
                                            not work with this version.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Page Layouts default scroll behaviour changed to singleScroll due to new
                                            layout mechanism, additional innerScroll attribute also added.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            FuseSettings separated from the settings panel.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.5</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-05-29)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>Material UI</code> updated to v1.1.0
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dependency packages updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">FIX:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Extra control added if user.data exist in Firebase Db
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Navigation Collapse fixed due to React 16.4.0 bugfix for
                                            getDeriveredStateFromProps
                                        </Typography>
                                        <Typography className="text-14 mb-8">
                                            (https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops).
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.4</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-05-22)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">BREAKING
                                    CHANGES:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>FuseAuth</code> renamed with FuseAuthorization
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Shortcuts data storage moved under the user.data.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>Material UI</code> updated to v1.0.0
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Firebase integration added as an example for authentication (Also saves user
                                            data to firebase/db).
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Register Page Created for Firebase.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            FuseMessage Component added to theme layout for easily show snackbar
                                            messages via redux action.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.3</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-05-16)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>

                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>Material UI</code> updated to v1.0.0-rc.0
                                        </Typography>
                                        <Typography className="text-12 mb-8">
                                            <a href="https://github.com/mui-org/material-ui/releases/tag/v1.0.0-rc.0"
                                               target="_blank" rel="noopener noreferrer"> Checkout the
                                                breaking
                                                changes</a>
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>google-map-react</code> updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.2</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-05-12)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">FIXES:</Typography>

                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Tailwind error on windows.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            missing <code>.env</code> <code>.babelrc</code> files added.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.1</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-05-10)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            All dependencies updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16"
                                            component="h4">FIXES:</Typography>

                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>cross-env</code> library added for absolute path across platforms.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.0</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary"
                                            component="h3">(2018-04-21)</Typography>
                            </div>

                            <ul>
                                <li><Typography className="text-14 mb-8">Initial Release</Typography></li>
                            </ul>

                        </div>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(ChangelogDoc);
