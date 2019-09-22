import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet, TextInput,
    LayoutAnimation,
    Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';
import { Actions, ActionConst } from 'react-native-router-flux';
import ScreenName from '../../constants/ScreenName';
import GlobalKeys from '../../constants/GlobalKeys';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';

import Icon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import OIcon from 'react-native-vector-icons/Octicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FTIcon from 'react-native-vector-icons/Feather';

import Button from './../commons/Button';
import CustomTab from './../commons/CustomTab';
import Container from './../commons/Container';
import { ToastTypes } from './../commons/Toast';

import Home from '../../containers/tabs/HomeContainer';
import News from '../../containers/tabs/NewsContainer';
import Menu from '../../containers/tabs/MenuContainer';

import * as CommonUtils from '../../utils/CommonUtils';
import BuildUtils from '../../utils/BuildUtils';
import * as Themes from '../../themes';
import Strings from '../../constants/Strings';

export default class DashboardComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
        };
    }

    render() {
        const tabLabels = ['HOME', 'NEWS', 'WATCH', 'SCORES', 'MENU']; // [Strings.checklist, Strings.notifications, Strings.favorite, Strings.admin]
        const initialTab = 0;
        return (
            <Container title={'DASHBOARD TITLE'} style={styles.container}
                titleTextStyle={{ color: Themes.Colors.background }}

                statusBarColor={Themes.Colors.background}
                statusBarProps={{ barStyle: "dark-content" }}
                headerLeft={
                    <Button width={Themes.Metrics.headerButtonWidth} color={'transparent'} onPress={() => this.onMenuPress()}>
                        <Icon name='ios-menu' style={{ color: Themes.Colors.background, fontSize: 26 }} />
                    </Button>
                }
                // headerRight={(activeTab == 1 || activeTab == 0) &&
                //     this.renderSearchButton()
                // }
                // headerContent={
                //     // <Image
                //     //     style={styles.headerImg}
                //     //     source={require('../../assets/images/header_logo.png')}
                //     // />
                // }
            >
                <ScrollableTabView style={{ borderBottomColor: 'transparent' }}
                    initialPage={initialTab} tabBarPosition={'bottom'}
                    renderTabBar={(props) =>
                        <CustomTab {...props} initialPage={initialTab} activeColor={Themes.Colors.activeTab}
                            hideLabelInactive={false}
                            inActiveColor={Themes.Colors.grey}
                            style={{
                                ...props.style,
                                height: Themes.Metrics.tabHeight,
                                borderTopColor: Themes.Colors.grey,
                                borderTopWidth: Themes.Metrics.borderWidth,
                                backgroundColor: Themes.Colors.background,
                                paddingHorizontal: CommonUtils.isTablet() ? '20%' : 0,
                            }}
                            iconStyle={{}}
                            labelStyle={{ fontFamily: Themes.Fonts.type.regular, fontWeight: 'normal', fontSize: 12 }}
                        />}
                    ref={(tabView) => { this.tabView = tabView; }}
                    onChangeTab={({ i, ref }) => this.onChangeTab(i, ref)}
                >
                    <Home tabLabel={{ label: tabLabels[0], icon: 'home', iconComponent: EIcon }} />

                    <News tabLabel={{ label: tabLabels[1], icon: 'newspaper-o', iconComponent: FAIcon }} />

                    <Menu tabLabel={{ label: tabLabels[4], icon: 'menu', iconComponent: EIcon }} />

                </ScrollableTabView>
            </Container>
        );
    }

    componentDidMount() {
        // this.props.productActions.fetchProducts(1, 10).then(products => {
        //     // TODO: Do somethings with product
        //     CommonUtils.log(products);
        // }, error => {
        //     // show Toast Error
        //     CommonUtils.log("=== ERROR:", error.message);
        //     this.showError(error.message || error);
        // });
    }

    onChangeTab(index, ref) {
        this.setState({ activeTab: index });
    }

    onMenuPress() {
        Actions.drawerOpen();
    }

    showError(message, timeout = 4000) {
        this.props.showToast(ToastTypes.ERROR, message, timeout);
    }


}

DashboardComponent.defaultProps = {
    // name: null,
};

// DashboardComponent.propTypes = {
//     // name: React.PropTypes.string,
// };

const styles = EStyleSheet.create(shorthand({
    container: {
        flex: 1,
        backgroundColor: Themes.Colors.background,
    },
    contents: {
    },
    headerImg: {
        flex: 1,
        resizeMode: 'contain',
        backgroundColor: Themes.Colors.background
    }
}));