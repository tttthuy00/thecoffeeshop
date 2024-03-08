import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Theme'
import FastImage from 'react-native-fast-image'

const AppButton = (props) => {
    const {
        containerStyle,
        titleStyle,
        title = '',
        backgroundColor = '#324A59' ,
        textColor = 'white',
        borderColor,
        borderWidth = 1,
        width,
        height,
        borderRadius,
        onPress,
        alignSelf = 'center',
        disabled,
        fontSize = 18,
        noShadow,
        iconColor,
        icon,
        paddingVertical = 12,
        marginTop,
        iconSize = 16,
    } = props
    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    backgroundColor: backgroundColor,
                    width: width == null ? '100%' : width,
                    height: height,
                    borderRadius: borderRadius,
                    borderColor: borderColor == null ? COLOR.primary : borderColor,
                    elevation: noShadow == null ? 3 : 0,
                    alignSelf: alignSelf,
                    paddingVertical: paddingVertical,
                    borderWidth: borderWidth,
                    marginTop: marginTop,
                }
            ]}
            disabled={disabled == null ? false : disabled}
            onPress={onPress}>
            {icon == null ? (
                <></>
            ) : (
                <FastImage
                    style={{
                        width: 28,
                        height: 28,
                        alignSelf: 'center',
                    }}
                    resizeMode='stretch'
                    source={icon}
                    tintColor={iconColor == null ? 'white' : iconColor}
                />
            )}
            <Text
                style={[
                    styles.titleButton,
                    {
                        color: textColor,
                        fontSize: fontSize,
                    },
                    titleStyle,
                ]}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLOR.primary,
        borderRadius: 8,
        paddingVertical: 14,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',

        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.29,
        // shadowRadius: 1,
        // elevation: 7,
        // borderColor: '#D4D4D4',
        // borderWidth: 0.5,
    },
    titleButton: {
        fontSize: 14,
        color: COLOR.grayText,
        fontWeight: '500',
        alignSelf: 'center',
        marginLeft: 4,
    },
})