


function Validator(object) {
    // var formElement = document.querySelector("#form-1");
    var formElement = document.querySelector(object.idForm);
    // console.log(object.idForm);

    // console.log(formElement.querySelector(".form-group #fullName").placeholder);
    // Đặt vấn đề: nếu có một trang web khác không sử dụng class="form-group" và id="fullName" thì sao ? Hoặc trong quá trình bảo trì, họ đổi tên các class và id trong file html ???
    // console.log(formElement.querySelector(".? #?").placeholder);


    if (formElement) { //Nếu formElement có tồn tại, thực hiện đoạn mã phía dưới

        object.rules.forEach( (rule) => {
            var inputElement = formElement.querySelector(rule.selector);
            // console.log(inputElement);

            //Để truy suất đến value nằm trong thẻ input: inputElement.value

            var parentInputElement = inputElement.par

            if (inputElement) {
                inputElement.onblur = () => {
                    // rule.test(inputElement.value)
                    // console.log( rule.test(inputElement.value) );
                    let formMessage = rule.test(inputElement.value);
                    console.log(formMessage);
                    
                }
            }
        });
    }
}


Validator.isRequid = (selector) => {
    //return 1 object
    return {
        string: "return đối tượng Tên",
        selector: selector,
        test: function (value) {
            return value ? value.trim()  : "Nhập lại trường Tên";
        }
    };
}


Validator.isEmail = (selector) => {
    //return 1 object
    return {
        string: "return đối tượng Email",
        selector: selector,
        test: function (value) {
            return value ? value.trim() : "Nhập lại trường email"
        }
    }
};