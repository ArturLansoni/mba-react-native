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
    title: {
      fontFamily: 'Roboto-Black',
      color: theme.colors.text,

      fontSize: 20,
    },
    subtitle: {
      fontFamily: 'Roboto',
      color: theme.colors.text,
      fontSize: 16,
      marginTop: 24,
      marginBottom: 12,
    },
    item: {
      padding: 12,
      elevation: 1,
      backgroundColor: 'white',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 2.8,
        height: 2.8,
      },
      shadowOpacity: 0.02,
      shadowRadius: 2.2,
      flexDirection: 'row',
    },
    itemContent: {
      flexDirection: 'column',
      paddingLeft: 12,
    },
    itemName: {
      fontFamily: 'Roboto-Medium',
      fontSize: 16,
    },
    itemImage: {
      height: 42,
      width: 42,
      borderRadius: 42,
    },
    separator: {height: 12},
    text: {
      color: theme.colors.text,
    },
    emptyImage: {height: 120, width: 120},
  });
