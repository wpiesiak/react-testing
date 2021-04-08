const fakeData = [
  {
    id: 12312321,
    name: 'Character name',
    status: 'Alive',
    gender: 'male',
  },
  {
    id: 4243242,
    name: 'Character name',
    status: 'Alive',
    gender: 'male',
  },
  {
    id: 4323432,
    name: 'Character name',
    status: 'Dead',
    gender: 'unknown',
  },
];

export const getCharacterList = async () => {
  return await new Promise((resolve) => {
    resolve(fakeData);
  });
};
