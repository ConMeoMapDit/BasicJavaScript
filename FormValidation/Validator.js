
function Validator(object) {


    // console.log(formElement.querySelector(".form-group #fullName").placeholder);
    // Đặt vấn đề: nếu có một trang web khác không sử dụng class="form-group" và id="fullName" thì sao ? Hoặc trong quá trình bảo trì, họ đổi tên các class và id trong file html ???
    // console.log(formElement.querySelector(".? #?").placeholder);

    function validate(rule, inputElement, messageElement) {
        // rule.test(inputElement.value)
        // console.log( rule.test(inputElement.value) );
        let formMessage = rule.checkInput(inputElement.value);
        
        if (formMessage != null) {
            messageElement.innerText = formMessage;
            inputElement.classList.add("invalid");
        } else {
            messageElement.innerText = formMessage;
            inputElement.classList.remove("invalid");
        }
    }

    // var formElement = document.querySelector("#form-1");
    var formElement = document.querySelector(object.idForm); // Lấy element của form cần validate
    // console.log(object.idForm); => Kết quả trả về là: #form-1
    if (formElement) { //Nếu formElement có tồn tại, thực hiện đoạn mã phía dưới


        object.rules.forEach( (rule) => {
            var inputElement = formElement.querySelector(rule.selector);
            var messageElement = inputElement.parentElement.querySelector(object.messageForm);

            console.log(messageElement);
            // console.log(inputElement);


            if (inputElement) {
                // Khi blur khỏi element
                inputElement.onblur = () => {
                    validate(rule, inputElement, messageElement);
                }

                // Khi vẫn đang nhập element
                inputElement.oninput = () => {
                    inputElement.classList.remove("invalid");
                    messageElement.innerText = null;
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
        checkInput: function (value) {
            return value.trim() ? null  : "Nhập lại Họ và Tên";
        }
    };
}

Validator.isPassword = (selector) => {
    //return 1 object
    return {
        string: "return đối tượng Password",
        selector: selector,
        checkInput: function (value, length) {
            /* 
                /^
                    (?=.*\d)          // should contain at least one digit
                    (?=.*[a-z])       // should contain at least one lower case
                    (?=.*[A-Z])       // should contain at least one upper case
                    [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
                $/
            */
            let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{${length},}$/;
            value = value.trim();
            // if (value < length)
            return regexPassword.test(value) ? null : `Mật khẩu phải có ít ${length} ký tự, trong đó gồm một chữ in hoa, một chữ thường và một sô`;
        }
    };
}


Validator.isEmail = (selector) => {
    //return 1 object
    return {
        string: "return đối tượng Email",
        selector: selector,
        checkInput: function (value) {
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return emailRegex.test(value) ? null : "Nhập lại Email";
        }
    }
};