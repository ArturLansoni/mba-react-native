import {navigation} from './navigation';
import {AuthStackScreenNames} from '../stacks/AuthStack.routes';
import {LoggedStackScreenNames} from '../stacks/Logged.routes';

const AuthCoordinator = {
  goToSignIn: () => navigation.push(AuthStackScreenNames.SignIn),
};

const LoggedCoordinator = {
  goToNews: () => navigation.push(LoggedStackScreenNames.News),
  goToMaps: () => navigation.push(LoggedStackScreenNames.Maps),
  goToMembers: () => navigation.push(LoggedStackScreenNames.Members),
  goToMemberDetails: () =>
    navigation.push(LoggedStackScreenNames.MemberDetails),
};

export const coordinator = {
  goBack: () => navigation.goBack(),
  ...AuthCoordinator,
  ...LoggedCoordinator,
};
