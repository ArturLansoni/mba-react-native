type Network = {
  network: string;
  username: string;
  url: string;
};

type Member = {
  id: string;
  name: string;
  role: string;
  description: string;
  imageURL: string;
  socials: Network[];
  updatedAt: string;
};
