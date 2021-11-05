import axios from 'axios';
import { generateRandomPercentage } from '../../utils/generator';

export const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/'; 
export const appId = 'bJTtiRJfwS5VIiVRUXvf';

export const getBooksFromApi = async () => {
  const finalData = [];
  const response = await axios.get(`${baseUrl}${appId}/books`);
  Object.entries(response.data).forEach((data) => {
    const itemId = data[0];
    const [{ title, category }] = data[1];
    const percentage = generateRandomPercentage();

    const obj = {
      item_id: itemId,
      title,
      category,
      percentage,
    };

    finalData.push(obj);
  });
  return finalData;
};

export const postBookToApi = async (newBook) => {
  let serverResponse;
  axios.post(`${baseUrl}${appId}/books`, newBook)
    .then((response) => { serverResponse = response.data; })
    .catch((error) => { throw new Error(error); });

  return serverResponse;
};

export const deleteBookFromApi = (id) => {
  axios.delete(`${baseUrl}${appId}/books/${id}`, { item_id: id });
};
