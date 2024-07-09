import {useTranslation} from 'react-i18next';
import {themeSchema} from '@utils';
import {stylesWithTheme} from '../styles';

export function useMemberDetailsPage() {
  const {t} = useTranslation();
  const styles = stylesWithTheme(themeSchema().theme);

  return {
    t,
    styles,
    colors: themeSchema().theme.colors,
  };
}
