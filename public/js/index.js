const filterCans = () => {
  event.preventDefault();
  $('#cans-card-container').empty();
  fetch('/api/v1/cans')
    .then(cans => cans.json())
    .then(parsedCans => parsedCans.filter(can => can.size === $('#size-filter-input').val()))
    .then(filteredCans => addCansToPage(filteredCans))
    // eslint-disable-next-line
    .catch(error => console.log(error));
};

const clearFilter = () => {
  $('#cans-card-container').empty();
  getAllCans();
};

const addCansToPage = (cansArray) => {
  if (cansArray.length > 0) {
    const cansHTML = cansArray.map(can => {
      return `<div class='card' id=${can.id} key=${can.id}>
      <p class='can-text can-name'>
        <span class='can-label can-name-label' id='can-name-label-${can.id}'>Name: </span>
        <span class='can-value can-name-value' id='can-name-value-${can.id}'>${can.name}</span>
      </p>
      <p class='can-text can-serial'>
        <span class='can-label can-serial-label' id='can-serial-label-${can.id}'>Serial:</span>
        <span class='can-value can-serial-value' id='can-serial-value-${can.id}'>${can.serial}</span>
      </p>
      <p class='can-text can-size'>
        <span class='can-label can-size-label' id='can-size-label-${can.id}'>Size:</span>
        <span class='can-value can-size-value' id='can-size-value-${can.id}'>${can.size}</span>
      </p>
      <p class='can-text can-created-date'>
        <span class='can-label can-created-label' id='can-created-label-${can.id}'>Created:</span>
        <span class='can-value can-created-value' id='can-created-value-${can.id}'>${can.createdDate}</span>
      </p>
      <p class='can-text can-modified-date'>
        <span class='can-label can-modified-label' id='can-modified-label-${can.id}'>Last Modified:</span>
        <span class='can-value can-modified-value' id='can-modified-value-${can.id}'>${can.modifiedDate}</span>
      </p>
      <p class='can-text can-current-location'>
        <span class='can-label can-current-location-label' id='can-current-location-label-${can.id}'>Location:</span>
        <span class='can-value can-current-location-value' id='can-current-location-value-${can.id}'>${can.location.name}</span>
      </p>
      </div>`;
    });
    $('#cans-card-container').append(cansHTML);
  } else {
    $('#cans-card-container').append(`<p id='no-cans'>No cans found.</p>`);
  }
};

const getAllCans = () => {
  fetch('/api/v1/cans')
    .then(cans => cans.json())
    .then(parsedCans => addCansToPage(parsedCans))
    // eslint-disable-next-line
    .catch(error => console.log(error));
};

const enableSubmitButton = () => {
  if ($('#size-filter-input').val() !== '') {
    $('#size-filter-submit').attr("disabled", false);
  } else {
    $('#size-filter-submit').attr("disabled", true);
  }
};

$('#size-filter-submit').on('click', filterCans);
$('#size-filter-clear').on('click', clearFilter);
$('#size-filter-input').on('keyup', enableSubmitButton);

window.onload = () => {
  getAllCans();
};
