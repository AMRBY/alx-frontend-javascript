export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Succes');
    } else {
      reject(Error('Failure'));
    }
  });
}
