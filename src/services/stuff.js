export const getNameInfo = async () => {
  const response = await fetch('https://api.genderize.io/?name=fora');
  const data = await response.json();
  console.log('Name: async/await', data);
};
