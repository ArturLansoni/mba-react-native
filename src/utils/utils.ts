import {Images} from '@assets';
import {Linking, Platform} from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

export async function openLink(url: string) {
  url = url.replace(' ', '').trim();
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  }
}

export function socialLogoResolver(network: string) {
  return {
    github: Images.social.github,
    linkedin: Images.social.linkedin,
    twitter: Images.social.twitter,
    youtube: Images.social.youtube,
  }[network];
}

export function dateStringToDDMMYYYY(dateString: string) {
  const date = new Date(dateString);
  const pad = (value: number) => value.toString().padStart(2, '0');
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${pad(
    date.getFullYear(),
  )}`;
}
