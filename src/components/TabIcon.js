import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { TabIconStyles } from './Styles';

const Styles = TabIconStyles;

export const TabIcon = ({ route, renderIcon, focused, activeTintColor, inactiveTintColor, onPress, labelText }) => (
  <TouchableOpacity
    style={Styles.tabStyle}
    onPress={() => onPress && onPress()}
  >
    {renderIcon({
      route,
      focused,
      tintColor: focused
        ? activeTintColor
        : inactiveTintColor
    })} 
    {(labelText && labelText !== 'Charities')&& (
      <Text
        style={[Styles.labelStyle, { color: focused ? activeTintColor : inactiveTintColor }]}>{labelText}</Text>
    )}
  </TouchableOpacity>
);

TabIcon.propTypes = {
  route: PropTypes.object.isRequired,
  renderIcon: PropTypes.func.isRequired,
  activeTintColor: PropTypes.string.isRequired,
  inactiveTintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool,
  onPress: PropTypes.func
};

TabIcon.defaultProps = {
  focused: false
};
