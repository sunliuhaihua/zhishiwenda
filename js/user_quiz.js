$(document).ready(function () {

    // $('#protocolInfo').modal('show');

    $('.editorial_icon').tooltip();
    $('.interest_type .interest_list li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })

    $('.autid_wrapper ul li').click(function () {
        $(this).find('a').addClass('active').removeClass('new_msg');
        $(this).siblings().find('a').removeClass('active');
    })

    $('.editorial_content #short_answers').on('input', function () {
        var length = $(this).val().length;
        $('.editorial_content .words_number .number').text(length)
    })
    $('#confirm_back').click(function () {
        history.back(-1)
    })

    /*****领取问题******/
    var num = 0;
    $('table td .actions .receive_question').click(function () {
        $('#receive_question .modal-content').hide();
        if (num < 5) $('#receive_question .receive_msg').show();
        else $('#receive_question .receive_error').show();
    })
    $('#confirm_receive_question').click(function () {
        $('#receive_question .receive_success').show();
        $('#receive_question .receive_msg').hide();
        setTimeout(() => {
            $('#receive_question').modal('hide');
        }, 1000)
        num++;
    })

    /*****放弃问题****/ 
    $('.actions .reason').click(function(){
        $('#audit_reason .modal-content').hide();
        $('#audit_reason .reason-content').show();
    })
    $('#audit_reason .abandon_btn').click(function(){
        $('#audit_reason .modal-content').hide();
        $('#audit_reason .abandon').show();
    })




    $('#convert .codeBtn').click(function (event) {
        var time = 60;
        settime($(this));

        function settime(obj) {
            if (time == 0) {
                $(obj).attr('disabled', false);
                $(obj).html("点击获取验证码");
                time = 60;
                return;
            } else {
                $(obj).attr('disabled', true);
                $(obj).html(time + "s后重新发送");
                time--;
            }
            setTimeout(function () {
                settime(obj)
            }, 1000)
        }
    });



    laydate.render({
        elem: '#date_commission',
        range: true,
        trigger: 'click',
        btns: ['today', 'prveday', 'threeday', 'sevenday', 'beforeweek', 'week', 'frontmonth',
            'month', 'confirm', 'clear'
        ]
    });





})