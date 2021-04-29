let colorCheck = $('.color-item');
let memoryCheck = $('.memory-item');
colorCheck.on('click', function(e) {
    $(this).addClass('active').siblings().removeClass('active')
})
memoryCheck.on('click', function(e) {
    $(this).addClass('active').siblings().removeClass('active')
})

$('#credit-card').validate({
    rules: {
        numCard: {
            required: true,

        },
        dateCard: {
            required: true,
        },
        cvv: {
            required: true,
        },
        agree: {
            required: true,
        }
    },
    messages: {
        numCard: {
            required: "Error",
        },
        dateCard: {
            required: "Error",
        },
        cvv: {
            required: "Error",
        },
        agree: {
            required: "Підтвердіть угоду",
        }
    },
    highlight: function(element) {
        $(element).parent().addClass("field-error");
    },
    unhighlight: function(element) {
        $(element).parent().removeClass("field-error");
        $('#numCard').siblings('.input--numCard__type').show();
    },
})
$('#accept').on('change', () => {

    if ($('#accept').is(':checked')) {
        $('#card-btn').removeAttr('disabled')
    } else {
        $('#card-btn').prop('disabled', true)
    }
})

$('#agree').on('change', () => {
    if ($('#agree').is(':checked')) {
        $('#personalForm-btn').removeAttr('disabled')
    } else {
        $('#personalForm-btn').prop('disabled', true)
    }
})
$('#phone').on('change', function() {
    let val = document.querySelector('#phone')
})
$('#personalForm').validate({
    rules: {
        phone: {
            required: true,
            minlength: 17,
        },
        date: {
            required: true,
        },
    },
    messages: {
        phone: {
            required: "Error",
            minlength: "Error",
        },
        date: {
            required: "Error",
        },
    },
    highlight: function(element) {
        $(element).parent().addClass("field-error");
        $('.credit__vidget-label--phone').addClass('label-error');
    },
    unhighlight: function(element) {
        $(element).parent().removeClass("field-error");
        $('.credit__vidget-label--phone').removeClass('label-error');
    },
    success: function(element) { $('#personalForm-btn').removeAttr('disabled') }
})
$('#userForm').validate({
    rules: {
        name: {
            required: true,
        },
        date: {
            required: true,
        },
        passport: {
            required: true,
        },
        dateGet: {
            required: true,
        },
        whoGet: {
            required: true,
        },
        INN: {
            required: true,
        },
        adress: {
            required: true,
        },
    },
    messages: {
        name: {
            required: "Error",
        },
        date: {
            required: "Error",
        },
        passport: {
            required: "Error",
        },
        dateGet: {
            required: "Error",
        },
        whoGet: {
            required: "Error",
        },
        INN: {
            required: "Error",
        },
    },

    highlight: function(element) {
        $(element).parent().addClass("field-error");
    },
    unhighlight: function(element) {
        $(element).parent().removeClass("field-error");
    }
})
$('#numCard').mask("0000 0000 0000 0000", {
    placeholder: "0000 0000 0000 0000",
    selectOnFocus: true
});
$('#dateCard').mask("00 / 00", {
    placeholder: "MM / РР",
    selectOnFocus: true
});
$('#cvv').mask("000", {
    placeholder: "XXX",
    selectOnFocus: true
});
$('#phone').mask("+380 ZZ ZZZ ZZ ZZ", {
    translation: {
        'Z': {
            pattern: /[0-9]/,
            optional: true
        },
        '0': { pattern: /\d/ },
    }
});
let smscCodeValidate = () => {
    $('#sms-code').validate({
        rules: {
            sms: {
                required: true,
                number: true,
                maxlength: 4
            }
        },
        messages: {
            sms: {
                required: "Введите код",
                number: "Код состоит из цифр"
            }
        },
        highlight: function(element) {
            $(element).parent().addClass("field-error");
        },
        unhighlight: function(element) {
            $(element).parent().removeClass("field-error");
        }
    })
}
let smsCodeValue = $('#sms')
smsCodeValue.on('change', function(e) {
    let smsCodeValueLength = $('#sms').val().length
    if (smsCodeValueLength === 4) {
        $('#sms-code').submit()
    }
}, smscCodeValidate())
smsCodeValue.on('keydown', function(e) {
    let smsCodeValueLength = $('#sms').val().length
    if (smsCodeValueLength === 3) {
        $('#sms-code').submit()
    }
}, smscCodeValidate())

const timerBlock = document.querySelector('#sms-timer')
if (timerBlock) {
    let seconds = 1 * 30 + 0,
        h, m, s, t;

    function countDown() {
        if (seconds > 0) {
            seconds--;
            h = seconds / 3600 ^ 0,
                m = (seconds - h * 3600) / 60 ^ 0,
                s = seconds - h * 3600 - m * 60,
                time = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
            $("#sms-timer").text(time);
        } else {
            $("#sms-timer").hide();
            $("#sms-btn").show();
        }
        setTimeout(function() {
            countDown();
        }, 1000);
    }
    countDown()
}



// ````

(function() {

    let smscCodeValidate_2 = () => {
        $('#sms-code_2').validate({
            rules: {
                sms: {
                    required: true,
                    number: true,
                    maxlength: 4
                }
            },
            messages: {
                sms: {
                    required: "Введите код",
                    number: "Код состоит из цифр"
                }
            },
            highlight: function(element) {
                $(element).parent().addClass("field-error");
            },
            unhighlight: function(element) {
                $(element).parent().removeClass("field-error");
            }
        })
    }

    let smsCodeValue_2 = $('#sms_2')
    smsCodeValue_2.on('change', function(e) {
        let smsCodeValueLength = $('#sms_2').val().length
        if (smsCodeValueLength === 4) {
            $('#sms-code_2').submit()
        }
    }, smscCodeValidate())
    smsCodeValue_2.on('keydown', function(e) {
        let smsCodeValueLength = $('#sms').val().length
        if (smsCodeValueLength === 3) {
            $('#sms-code_2').submit()
        }
    }, smscCodeValidate_2())
    let seconds = 1 * 30 + 0,
        h, m, s, t;

    function countDown() {
        if (seconds > 0) {
            seconds--;
            h = seconds / 3600 ^ 0,
                m = (seconds - h * 3600) / 60 ^ 0,
                s = seconds - h * 3600 - m * 60,
                time = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
            $("#sms-timer_2").text(time);
        } else {
            $("#sms-timer_2").hide();
            $("#sms-btn_2").show();
        }
        setTimeout(function() {
            countDown();
        }, 1000);
    }
    countDown()
})();
// ````

$('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    closeOnBgClick: true,
    enableEscapeKey: true,
    closeBtnInside: false
});

$('.popup__content').mCustomScrollbar({
    axis: "y",
});
$('.credit-flex__content--scroll').mCustomScrollbar({
    axis: "y",
});

// 
var momentFormat = 'DD.MM.YYYY';
var dateMask = IMask(
    document.getElementById('dateBorn'), {
        mask: Date,
        min: new Date(1900, 0, 1),
        max: new Date(2020, 0, 1),
        pattern: momentFormat,
        lazy: true,
        blocks: {
            YYYY: {
                mask: IMask.MaskedRange,
                from: 1970,
                to: 2030
            },
            MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12
            },
            DD: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 31
            }
        }
    });
var dateMask = IMask(
    document.getElementById('userDate'), {
        mask: Date,
        min: new Date(1900, 0, 1),
        max: new Date(2020, 0, 1),
        pattern: momentFormat,
        lazy: true,
        blocks: {
            YYYY: {
                mask: IMask.MaskedRange,
                from: 1970,
                to: 2030
            },
            MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12
            },
            DD: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 31
            }
        }
    });
var dateMask = IMask(
    document.getElementById('dateGet'), {
        mask: Date,
        min: new Date(1900, 0, 1),
        max: new Date(2020, 0, 1),
        pattern: momentFormat,
        lazy: true,
        blocks: {
            YYYY: {
                mask: IMask.MaskedRange,
                from: 1970,
                to: 2030
            },
            MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12
            },
            DD: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 31
            }
        }
    })

// adapt height



const contentGetHeight = () => {
    let popupHeight = $('.popup').height();
    let popupHeaderHeight = $('.popup__header').height() + parseInt($('.popup__header').css('padding-top')) * 2;
    let popupFooterHeight = $('.popup__footer').height() + parseInt($('.popup__footer').css('padding-top')) * 2;
    contentHeight = popupHeight - popupHeaderHeight - popupFooterHeight
    $('.popup__content').height(contentHeight)
}
contentGetHeight()

$(window).resize(function() {
    contentGetHeight()
});

// adapt height


// widget
(function() {
    let widgetBtn = $("#openVidjet")
    let creditPopup = document.querySelector('.credit')
        // const btnNext = document.querySelector('.credit__vidget-next')
    let btnPrev = $('.btn-prev')
    let btnNext = $('.btn-next')
    let count = 0
    let creditWidget = document.querySelectorAll('.credit__vidget')

    const closeModal = (e) => {
        creditPopup.classList.remove('show')
    };
    const openModal = (e) => {
        creditPopup.classList.add('show')
    };

    const nextStep = (e) => {
        count++
        creditWidget.forEach((el, i) => {
            if (i === count) {
                el.classList.add('visible')
            } else {
                el.classList.remove('visible')
            }
        })
    }
    const prevStep = (e) => {
        count--
        creditWidget.forEach((el, i) => {
            if (i === count) {
                el.classList.add('visible')
            } else {
                el.classList.remove('visible')
            }
        })
    }
    btnNext.on('click', function() {
        nextStep()
    })
    btnPrev.on('click', function() {
        prevStep()
    })
    const target = (e) => {
        if (e.target == document.querySelector('.credit__inner')) {
            closeModal()
        }
    };
    document.addEventListener('click', e => {
        let target = e.target
        if (target == document.querySelector('.credit__inner')) {
            closeModal()
        }
        if (target == document.querySelector('#openVidjet')) {
            document.body.classList.add('overley')
            $('body').addClass('overley')
            openModal()
        }
    })

})();