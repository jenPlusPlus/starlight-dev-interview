const addCansToPage = (cansArray) => {
  if (cansArray.length > 0) {
    console.log(cansArray);

    const cansHTML = cansArray.map(can => {
      return `<div class='card' id=${can.id} key=${can.id}>
      <p class='can-name'>
        <span class='can-label can-name-label'id='can-name-label-${can.id}'>Name: </span>
        <span class='can-value can-name-value' id='can-name-value-${can.id}'>${can.name}</span>
      </p>
      <p class='can-serial'>
        <span class='can-label can-serial-label' id='can-serial-label-${can.id}'>Serial:</span>
        <span class='can-value can-serial-value' id='can-serial-value-${can.id}'>${can.serial}</span>
      </p>
      <p class='can-size'>
        <span class='can-label can-size-label' id='can-size-label-${can.id}'>Size:</span>
        <span class='can-value can-size-value' id='can-size-value-${can.id}'>${can.size}</span>
      </p>
      <p class='can-created-date'>
        <span class='can-label can-created-label' id='can-created-label-${can.id}'>Created:</span>
        <span class='can-value can-created-value' id='can-created-value-${can.id}'>${can.createdDate}</span>
      </p>
      <p class='can-modified-date'>
        <span class='can-label can-modified-label' id='can-modified-label-${can.id}'>Last Modified:</span>
        <span class='can-value can-modified-value' id='can-modified-value-${can.id}'>${can.modifiedDate}</span>
      </p>
      </div>`;
    });
    $('#cans-card-container').append(cansHTML);
  } else {
    $('#cans-card-container').append(`<p id='no-cans'>No cans found.</p>`)
  }
};

const getCans = () => {
  fetch('/api/v1/cans')
    .then(cans => cans.json())
    .then(parsedCans => addCansToPage(parsedCans))
    .catch(error => console.log(error));
};

window.onload = () => {
  getCans();
};
