// @flow

import { connect } from 'react-redux';

import { translate } from '../../base/i18n';

import {
    AbstractClosedCaptionButton,
    _abstractMapStateToProps
} from './AbstractClosedCaptionButton';

/**
 * A button which starts/stops the transcriptions.
 */
class ClosedCaptionButton
    extends AbstractClosedCaptionButton {

    accessibilityLabel = 'toolbar.accessibilityLabel.cc';
    iconName = 'closed_caption';
    label = 'transcribing.start';
    toggledIconName = 'closed_caption';
    toggledLabel = 'transcribing.stop';
}

export default translate(connect(_abstractMapStateToProps)(
    ClosedCaptionButton));
