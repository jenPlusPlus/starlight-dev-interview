const getCans = () => {
  fetch('/api/v1/cans')
    .then(cans => cans.json())
    .then(parsedCans => console.log('cans: ', parsedCans))
    .catch(error => console.log(error));
};

window.onload = () => {
  getCans();
};
