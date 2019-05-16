import { contrast, background, spacing, font, deviceHeight } from '../core/variables';
import merge from '../core/_helperfunctions/mergeobjects';
import { Platform } from 'react-native';

//== Temporary Classes
//## Helper classes to create the desired look & feel
//-------------------------------------------------------------------------------------------------------------------//
// Home

export const ActionButtonCustom = {
    container: {
        borderColor: '#f9f9f9',
        backgroundColor: '#e9e9e9',
    },
    icon: {
        color: '#444',
    },
    caption: {
        color: '#444',
    },
};

export const homeImageBackground = {
    container: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        zIndex: 0,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
};

export const homeImageIllustration = {
    container: {
        zIndex: 1,
        marginTop: 100,
    },
    image: {
        width: 200,
        height: deviceHeight / 2.5,
        resizeMode: 'contain',
    },
};

export const homeFooter = {
    container: {
        zIndex: 1,
        width: '100%',
    },
};

export const homeFooterLogo = {
    container: {
        alignSelf: 'center',
    },
    image: {
        height: 60,
        resizeMode: 'contain',
    },
};

export const homeFooterText = {
    container: {},
    text: {
        lineHeight: 25,
    },
};

// Buttons
export const btnListItem = {
    container: {
        borderWidth: 0,
        borderRadius: 0,
        borderBottomWidth: 1,
        borderColor: contrast.lowest,
        backgroundColor: background.primary,
        paddingHorizontal: spacing.small,
        paddingVertical: Platform.select({ ios: spacing.smaller, android: spacing.small }),
    },
    icon: {
        color: contrast.higher,
    },
    caption: {
        fontSize: font.size,
        ...Platform.select({
            ios: {
                color: contrast.higher,
            },
            android: {
                color: contrast.high,
            },
        }),
    },
};
export const btnListItemTop = merge(btnListItem, {
    container: {
        borderTopWidth: 1,
    },
});

export const square = {
    container: {
        aspectRatio: 1,
    },
};

export const cardFOB = {
    container: {
        height: 150,
    },
};
