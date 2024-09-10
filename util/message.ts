export const getLikeMessage = (people: string[]) => {
  const count = people.length;
  if (count === 0) return "";
  if (count === 1) return `Liked by ${people[0]}`;
  else return `Liked by ${people[0]} and ${count - 1} others`;
};
