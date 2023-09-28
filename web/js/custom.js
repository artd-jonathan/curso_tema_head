jQuery(document).ready(function () {
    var dataForm = jQuery('#contact-form');

    dataForm.on('submit', function () {
        jQuery('#loading-div').show(); // Muestra el div de carga al enviar el formulario.
        jQuery(this).find(':submit').attr('disabled', 'disabled');
        if (this.isValid === false) {
            jQuery(this).find(':submit').prop('disabled', false);
        }
        this.isValid = true;
        console.log(this.isValid);
    });
    dataForm.on('invalid-form.validate', function () {
        jQuery('#loading-div').show(); // Muestra el div de carga al enviar el formulario.
        jQuery(this).find(':submit').prop('disabled', false);
        this.isValid = false;
        jQuery('#loading-div').hide(); // Muestra el div de carga al enviar el formulario.
    });
});