import { API_BASE_URL } from '../consts';

const getCharacter = async (id: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/character/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getCharacter