import {StyleSheet} from 'react-native';

import {type themeType} from '@utils';

export const stylesWithTheme = (theme: themeType) =>
  StyleSheet.create({
    page: {
      ...StyleSheet.absoluteFillObject,
      paddingVertical: 24,
      paddingHorizontal: 12,
      backgroundColor: theme.colors.background,
    },
    image: {
      height: 80,
      width: 80,
      borderRadius: 42,
    },
    name: {
      fontFamily: 'Roboto-Bold',
      color: theme.colors.text,
      fontSize: 20,
      paddingTop: 12,
    },
    role: {
      fontSize: 16,
      paddingTop: 4,
      color: theme.colors.text,
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: `${theme.colors.primary}50`,
      borderRadius: 8,
      paddingVertical: 24,
    },
    social: {
      height: 32,
      width: 32,
    },
    description: {
      fontSize: 16,
      paddingVertical: 12,
      color: theme.colors.text,
    },
    text: {
      color: theme.colors.text,
    },
    buttonsContainer: {
      flexDirection: 'row',
      paddingTop: 12,
    },
    buttons: {
      backgroundColor: theme.colors.buttonBackground,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 8,
      elevation: 3,
    },
    buttonTitle: {
      fontFamily: 'Roboto-Black',
      color: theme.colors.text,
    },
  });
