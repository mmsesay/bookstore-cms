import axios from 'axios';

export const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/'; 
export const appId = 'bJTtiRJfwS5VIiVRUXvf'; // 'OqBRyKxYO89yzhxhEuf8';

export const getBooksFromApi = async () => {
  const finalData = [];
  const response = await axios.get(`${baseUrl}${appId}/books`);
  // eslint-disable-next-line array-callback-return
  Object.entries(response.data).map((data) => {
    const id = data[0];
    const [{ title, category }] = data[1];

    const obj = {
      id,
      title,
      category,
    };

    finalData.push(obj);
  });
  return finalData;
};

export const postBookToApi = (newBook) => {
  axios.post(`${baseUrl}${appId}/books`, newBook)
    .then((response) => console.log(response.data))
    .catch((error) => { throw new Error(error); });
};
