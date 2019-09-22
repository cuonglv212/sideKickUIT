import LeftMenuComponent from '../../components/views/LeftMenuComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as AppActions from '../../actions/AppActions';
import * as UserActions from '../../actions/UserActions';
import * as SettingActions from '../../actions/SettingActions';

function mapStateToProps(rootState) {
    return {
        appState: rootState.appState,
        userState: rootState.userState,
        settingState: rootState.settingState,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        appActions: bindActionCreators(AppActions, dispatch),
        userActions: bindActionCreators(UserActions, dispatch),
        settingActions: bindActionCreators(SettingActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftMenuComponent)