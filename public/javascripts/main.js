
var main = function (event) {
    $("form").parsley({
        uiEnabled: true,
        trigger: 'blur',
        errorClass: 'has-error',
        classHandler: function (ParsleyField) {
            return ParsleyField.$element.parents(".form-group");
        },
        errorsContainer: function (ParsleyField) {
            return ParsleyField.$element.parents(".form-group");
        },
        errorsWrapper: '<div class="parsley-errors-list"></div>',
        errorTemplate: '<span class="help-block"></span>'
    });
};

$(document).on('ready page:load', main);
