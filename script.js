const addCards = (items) => {
    const cardSection = document.getElementById('card-section');
    items.forEach(item => {
        let contentcard = `
      <div class="col s4 center-align">
          <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${item.path}">
              </div>
              <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                  <p><a href="#">${item.subTitle}</a></p>
              </div>
              <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                  <p class="card-text">${item.description}</p>
              </div>
          </div>
          </div>
      `;

        $(cardSection).append(contentcard)
    });
};

const formSubmitted = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.path = $('#path').val();
    formData.subTitle = $('#subTitle').val();
    formData.description = $('#description').val();

    console.log(formData);
    postAnime(formData);
};

function validateForm() {
    const title = $('#title').val();
    const path = $('#path').val();
    const subTitle = $('#subTitle').val();
    const description = $('#description').val();

    if (title === '' || path === '' || subTitle === '' || description === '') {
        alert('Please enter all required fields.');
    } else {
        formSubmitted();
        $('.modal').modal('close');
        alert('Thanks for submitting the data');
    }
}


function postAnime(anime) {
    $.ajax({
        url: '/api/anime',
        type: 'POST',
        data: anime,
        success: (result) => {
            if (result.statusCode === 201) {
                alert('anime posted');
            }
        }
    });
}

function getAllAnime() {
    $.get('/api/anime', (result) => {
        if (result.statusCode === 200) {
            addCards(result.data);
        }
    });
}

const formCanceled = () => {
    $('.modal').modal('close');
};

$(document).ready(function () {
    $('.materialboxed').materialbox();

    $('#formcancel').click(() => {
        formCanceled();
    });
    $('.modal').modal();
    getAllAnime();
});
