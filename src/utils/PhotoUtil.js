import 'whatwg-fetch';

const buildUrl = (request) => {
  const url = 'https://api.nasa.gov/planetary/apod';
  const apiKey = `?api_key=RfT7kz52akVCfw8bHGwqqURc7b4TOYbqPLSPsnVe`;
  const date = `&date=${request.date}`;

  return url + apiKey + date;
};

export const fetchPhotoData = (request) => {
  return fetch(buildUrl(request)).then((res) => res.json());
};
