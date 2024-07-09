import {StyleSheet} from 'react-native';
import {type themeType} from '@utils';

export const stylesWithTheme = (theme: themeType) =>
  StyleSheet.create({
    container: {
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
      marginBottom: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      height: 24,
      width: 24,
    },
    input: {padding: 0, paddingLeft: 4, flex: 1},
  });
