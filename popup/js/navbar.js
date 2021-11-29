$('#lemmyInfoDropdown').hide();

function getSiteCustoms(url) {
    if (url) {
        axios({
            method: 'GET',
            params: {"auth": lemmyJwt},
            url: url+'api/v3/site'
        }).then((response) => {
            if (response.data.site_view.site.icon.match(/^https?:\/\/[A-Za-z0-9.\-\/]+$/))
                $('#serverLogo').attr('src', response.data.site_view.site.icon)
            $('#serverTitle').text(response.data.site_view.site.name)
        })
    } else console.log('elese site costul')
}

$('#dropdownLemmyBtn').on('click', (e) => {
    $('#dropLemmySuccess').hide()
    $('#dropLemmyPasswordOrEmailInvalid').hide()
    e.preventDefault();
    if ($('div#addLemmyDropdownDiv').hasClass('is-active'))
        $('div#addLemmyDropdownDiv').removeClass('is-active')
    else
        $('div#addLemmyDropdownDiv').addClass('is-active')
})

let togglePassword = $('#dropLemmyInputPasswordToggle')
let toggleIcon = togglePassword.children('i')
togglePassword.on('click', () => {
    if (toggleIcon.attr('data-feather') === 'eye-off') {
        $('input#dropLemmyInputPassword').attr('type', 'text')
        toggleIcon.attr('data-feather', 'eye')
        feather.replace()
    } else {
        $('input#dropLemmyInputPassword').attr('type', 'password')
        toggleIcon.attr('data-feather', 'eye-off')
        feather.replace()
    }
})

togglePassword = $('#dropInputPasswordToggle')
toggleIcon = togglePassword.children('i')
togglePassword.on('click', () => {
    if (toggleIcon.attr('data-feather') === 'eye-off') {
        $('input#dropInputPassword').attr('type', 'text')
        toggleIcon.attr('data-feather', 'eye')
        feather.replace()
    } else {
        $('input#dropInputPassword').attr('type', 'password')
        toggleIcon.attr('data-feather', 'eye-off')
        feather.replace()
    }
})

var dropFieldsOk = {"URL": false, "login": false, "password": false}


$('#dropLemmyPasswordOrEmailInvalid').hide();