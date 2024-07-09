import esCommom from './es-Commom.json';
import esSignIn from '../../screens/SignIn/locale/es.json';
import esWelcome from '../../screens/Welcome/locale/es.json';
import esMembers from '../../screens/Members/locale/es.json';
import esMemberDetails from '../../screens/MemberDetails/locale/es.json';

export const es = {
  translation: {
    ...esCommom,
    ...esWelcome,
    ...esSignIn,
    ...esMembers,
    ...esMemberDetails,
  },
};
