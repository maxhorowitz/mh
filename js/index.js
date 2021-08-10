$(document).ready(function() {
    $('#reach-out-form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh',
        },
        fields: {
            name: {
                message: 'Invalid name entry',
                validators: {
                    notEmpty: {
                        message: 'Name is required, cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Name must be [0..30] characters'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'Can only accept alphabetical input'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Email address is required, cannot be empty'
                    },
                    emailAddress: {
                        message: 'Invalid email address entry'
                    }
                }
            },
        }
    }).on('success.form.bv', function(e) {
        e.preventDefault();
        submitForm();

    });
});

function submitForm() {
    alert('Success')
}