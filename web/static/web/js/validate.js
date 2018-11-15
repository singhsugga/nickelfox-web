window.validate = function ($form) {
    $form.find('.input-wrapper').removeClass('error');
    $form.find('span.error').remove();

    var $isValid = true;
    var name_re = /^[a-zA-Z ]+$/;
    var email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var Url_re = /^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$/;
    var fb_re = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
    var mbl_re = /^(\+|00){0,2}(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
    var link_re = /(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    var twitter_re = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/;
    $form.find('span.form-error').remove();
    $form.find('.required').each(function () {
        var $this = $(this);
        var $fieldName = $this.attr('data-field-name');
        var $fieldType = $this.attr('data-field-type');
        var $value = $this.val();
        var $textLength = null;
        if (Array.isArray($value) && $fieldType == 'multiselect') {
            $textLength = $value.length; // for multiselect ($value will be an array)
        } else {
            $textLength = $value.replace(/\s/g, '').length;
        }
        switch ($fieldType) {
            case 'select':
                if ($textLength <= 0) {
                    $this.parent().append('<span class="error">' + $fieldName + ' required!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                }
                break;
            case 'multiselect':
                if ($textLength <= 0) {
                    $this.parent().append('<span class="error">' + $fieldName + ' required!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                }
                break;
            case 'text':
                if ($textLength <= 0) {
                    $this.parent().append('<span class="error">' + $fieldName + ' required!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                } else if (name_re.test($value) == false) {
                    $this.parent().append('<span class="error">Invalid ' + $fieldName + '!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                }
                break;
            case 'url':
                if ($textLength <= 0) {
                    $this.parent().append('<span class="error">' + $fieldName + ' required!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                } else if (Url_re.test($value) == false) {
                    $this.parent().append('<span class="error">Invalid ' + $fieldName + '!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                }
                break;
            case 'fb_url':
                if ($textLength <= 0) {
                    $this.parent().append('<span class="error">' + $fieldName + ' required!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                } else if (fb_re.test($value) == false) {
                    $this.parent().append('<span class="error">Invalid ' + $fieldName + '!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                }
                break;
            case 'text_not_req':
                if (isNaN($value) == true) {
                    $this.parent().append('<span class="error">Invalid ' + $fieldName + '!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                }
                break;
            case 'email':
                if ($textLength <= 0) {
                    $this.parent().append('<span class="error">' + $fieldName + ' required!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                } else if (email_re.test($value.toLowerCase()) == false) {
                    console.log($value.toLowerCase());
                    $this.parent().append('<span class="error">Invalid ' + $fieldName + '!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                }
                break;
            case 'mobile_number':
                if ($textLength <= 0) {
                    $this.parent().append('<span class="error">' + $fieldName + ' required!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                } else if (mbl_re.test($value) == false) {
                    $this.parent().append('<span class="error">Invalid ' + $fieldName + '!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                }
                break;
            case 'link':
                if ($textLength <= 0) {
                    $this.parent().append('<span class="error">' + $fieldName + ' required!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                } else if (link_re.test($value) == false) {
                    $this.parent().append('<span class="error">Invalid ' + $fieldName + '!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                }
                break;
            case 'twitter':
                if ($textLength <= 0) {
                    $this.parent().append('<span class="error">' + $fieldName + ' required!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                } else if (twitter_re.test($value) == false) {
                    $this.parent().append('<span class="error">Invalid ' + $fieldName + '!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                }
                break;
            case 'select':
                if ($value == '*' || $textLength <= 0) {
                    $this.parent().append('<span class="error">Select ' + $fieldName + '!</span>');
                    $this.parent().addClass('error');
                    $isValid = false;
                }
                break;
        }
    });

    return $isValid;
}
