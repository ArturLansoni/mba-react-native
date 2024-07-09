import firestore from '@react-native-firebase/firestore';

export async function loadMembers(): Promise<Member[]> {
  const members = await firestore().collection('members').get();
  return members.docs.map(member =>
    _jsonToMember({id: member.id, ...member.data()}),
  );
}

function _jsonToMember(json: any): Member {
  return {
    id: json.id,
    name: json.name,
    role: json.role,
    updatedAt: json.updatedAt.toDate(),
    description: json.description,
    imageURL: json.imageURL,
    socials: json.socials.map(
      (social: any) =>
        <Network>{
          network: social.network,
          username: social.username,
          url: social.url,
        },
    ),
  };
}
