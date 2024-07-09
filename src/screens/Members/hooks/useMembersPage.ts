import {useTranslation} from 'react-i18next';
import {coordinator} from '@routes';
import {themeSchema} from '@utils';
import {stylesWithTheme} from '../styles';

export function useMembersPage() {
  const {t} = useTranslation();
  const styles = stylesWithTheme(themeSchema().theme);
  const {goToMemberDetails} = coordinator;

  return {
    t,
    styles,
    colors: themeSchema().theme.colors,
    goToMemberDetails,
  };
}
