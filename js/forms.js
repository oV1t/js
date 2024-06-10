
(() => {
    'use strict'

    const messageDialog = new bootstrap.Modal('#messageDialog');
    const messageDialogText = document.getElementById("messageDialogText");
    const image = document.getElementById('image');
    const imagePreview = document.getElementById('imagePreview');

    image.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) { //перевірка - чи не undifined або ""
            if (file.type.startsWith('image/')) {
                // console.log(`Selected file: `, URL.createObjectURL(file));
                imagePreview.src=URL.createObjectURL(file);
            }
            else {
                messageDialogText.innerHTML="Оберіть фото. Ви хочете нас обманути🤓";
                // console.log("Оберіть фото");
                image.value="";
                messageDialog.show();
            }
        } else {
            console.log('No file selected');
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        //console.log("Load DOM");
        var phoneInput = document.getElementById('phone');
        var maskOptions = {
            mask: '+00(000) 000-00-00'
        };
        var mask = IMask(phoneInput, maskOptions);
    });

    // var forms = document.querySelectorAll('#needs-validation')

    // Array.prototype.slice.call(forms)
    //     .forEach(function (form) {
    //         form.addEventListener('submit', function (event) {
    //             if (!form.checkValidity()) {
    //                 event.preventDefault()
    //                 event.stopPropagation()
    //             }

    //             form.classList.add('was-validated')
    //         }, false)
    //     })
        
})()

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('needs-validation');
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const email_v = document.getElementById("email").value;
            const surname_v = document.getElementById("lastName").value;
            const name_v = document.getElementById("name").value;
            const inputPass_v = document.getElementById("exampleInputPassword1").value;
            const phone_v = document.getElementById('phone').value;

            let user = {
                email: email_v,
                surname: surname_v,
                name: name_v,
                password: inputPass_v,
                phone: phone_v
            };
            
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Реєстрація успішна!");
        }
        form.classList.add('was-validated');
    }, false);
});

