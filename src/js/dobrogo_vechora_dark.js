/*-- loader start --*/
function hideLoader() {
    let loader = document.getElementById('loader');
    loader.style.opacity = 0;
    setTimeout(() => {
        loader.remove();
    }, 1500);
}
document.addEventListener('DOMContentLoaded', hideLoader);
/*-- loader end --*/

const toggleButton = document.querySelector(".navbar-toggler");
const menuContainer = document.querySelector(".navbar-collapse");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("menu-open");
});

const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
    link.addEventListener("click", function () {
        menuContainer.classList.remove("show");
        document.body.classList.remove("menu-open");
        toggleButton.classList.toggle("collapsed");
    });
});

const closeButton = document.querySelector("#registerModalToggle .close");
const form = document.getElementById("register-participants");

function highlightField(inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.classList.add("error");
}

function clearFieldHighlight(inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.classList.remove("error");
}

$(document).ready(function () {
    jQuery(".phone-number").inputmask({
        mask: "+38 (999) 999-99-99",
        greedy: false,
    });


    const lang = document.documentElement.lang;
    let isFormValid = false;
    let elemForCheckCaptcha;
    document.querySelectorAll(".check-form").forEach((elem) =>
        elem.addEventListener("click", (event) => {
            event.preventDefault();
            const isform = elem.closest(".registration-form");
            elemForCheckCaptcha = isform;
            function checkName() {
                const inputName = isform.querySelector(".input-name");
                const regexName =
                    /^(?:(.)(?!\1{2,}))[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s'-]*$/;
                if (inputName.value.trim() == "") {
                    inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").textContent =
                        "Це поле є обов’язковим для заповнення";
                    inputName
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.add("error-box");
                } else if (!regexName.test(inputName.value)) {
                    inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").innerHTML =
                        "Поле має містити не менше двох символів";

                    inputName
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.add("error-box");
                } else {
                    inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").innerHTML = "";
                    inputName
                        .closest(".input-wrapper")
                        .classList.remove("error");
                    inputName
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.remove("error-box");
                }
                return regexName.test(inputName.value);
            }

            function CheckSurname() {
                const inputName = isform.querySelector(".input-surname");
                const regexName =
                    /^(?:(.)(?!\1{2,}))[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s'-]*$/;
                if (inputName.value.trim() == "") {
                    inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").textContent =
                        "Це поле є обов’язковим для заповнення";
                    inputName
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.add("error-box");
                } else if (!regexName.test(inputName.value)) {
                    inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").innerHTML =
                        "Поле має містити не менше двох символів";

                    inputName
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.add("error-box");
                } else {
                    inputName
                        .closest(".input-wrapper")
                        .querySelector(".error-text").innerHTML = "";
                    inputName
                        .closest(".input-wrapper")
                        .classList.remove("error");
                    inputName
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.remove("error-box");
                }
                return regexName.test(inputName.value);
            }
            function checkPhone() {
                const inputPhone = isform.querySelector(".phone-number");
                const regexPhone = /^\+38 \(0\d{2}\) \d{3}-\d{2}-\d{2}$/;

                if (inputPhone.value.trim() == "") {
                    switch (lang) {
                        case "uk":
                            inputPhone
                                .closest(".input-wrapper")
                                .querySelector(".error-text").textContent =
                                "Це поле є обов’язковим для заповнення";
                            break;
                        case "en":
                            inputPhone
                                .closest(".input-wrapper")
                                .querySelector(".error-text").textContent =
                                "This field is required";
                            break;
                        default:
                            break;
                    }
                    inputPhone
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.add("error-box");
                } else if (!regexPhone.test(inputPhone.value)) {
                    switch (lang) {
                        case "uk":
                            inputPhone
                                .closest(".input-wrapper")
                                .querySelector(".error-text").textContent =
                                "Поле заповнено не коректно";
                            break;
                        case "en":
                            inputPhone
                                .closest(".input-wrapper")
                                .querySelector(".error-text").textContent =
                                "The field is filled out incorrectly";
                            break;
                        default:
                            break;
                    }
                    inputPhone
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.add("error-box");
                } else {
                    inputPhone
                        .closest(".input-wrapper")
                        .querySelector(".error-text").textContent = "";
                    inputPhone
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.remove("error-box");
                }
                return regexPhone.test(inputPhone.value);
            }

            function checkEmail() {
                const inputPhone = isform.querySelector(".input-email");
                const regexPhone =
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (inputPhone.value.trim() == "") {
                    switch (lang) {
                        case "uk":
                            inputPhone
                                .closest(".input-wrapper")
                                .querySelector(".error-text").textContent =
                                "Це поле є обов’язковим для заповнення";
                            break;
                        case "en":
                            inputPhone
                                .closest(".input-wrapper")
                                .querySelector(".error-text").textContent =
                                "This field is required";
                            break;
                        default:
                            break;
                    }
                    inputPhone
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.add("error-box");
                } else if (!regexPhone.test(inputPhone.value)) {
                    switch (lang) {
                        case "uk":
                            inputPhone
                                .closest(".input-wrapper")
                                .querySelector(".error-text").textContent =
                                "Поле заповнено не коректно";
                            break;
                        case "en":
                            inputPhone
                                .closest(".input-wrapper")
                                .querySelector(".error-text").textContent =
                                "The field is filled out incorrectly";
                            break;
                        default:
                            break;
                    }
                    inputPhone
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.add("error-box");
                } else {
                    inputPhone
                        .closest(".input-wrapper")
                        .querySelector(".error-text").textContent = "";
                    inputPhone
                        .closest(".input-wrapper")
                        .querySelector("input")
                        .classList.remove("error-box");
                }
                return regexPhone.test(inputPhone.value);
            }
            function checkCity() {
                const inputCity = isform.querySelector("#current-city");
                if (!inputCity) {
                    return true;
                }
                if (inputCity.value.trim() === "") {
                    const inputWrapper = inputCity.closest(".input-wrapper");
                    const errorText =
                        lang === "en"
                            ? "This field is required"
                            : "Це поле є обов'язковим для заповнення";
                    inputWrapper.querySelector(".error-text").textContent =
                        errorText;
                    inputWrapper
                        .querySelector("input")
                        .classList.add("error-box");
                    // Add underlining in red
                    inputCity.style.borderBottom = "2px solid red";
                    // Set the label color to red
                    inputWrapper.querySelector("label").style.color = "red";
                } else if (
                    !/^(?:(.)(?!\1{2,}))[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s'-]*$/.test(
                        inputCity.value
                    )
                ) {
                    const inputWrapper = inputCity.closest(".input-wrapper");
                    inputWrapper.querySelector(".error-text").textContent =
                        "Поле має містити не менше двох символів та не більше двох однакових символів підряд";
                    inputWrapper
                        .querySelector("input")
                        .classList.add("error-box");
                    // Add underlining in red
                    inputCity.style.borderBottom = "2px solid red";
                    // Set the label color to red
                    inputWrapper.querySelector("label").style.color = "red";
                } else {
                    const inputWrapper = inputCity.closest(".input-wrapper");
                    inputWrapper.querySelector(".error-text").textContent = "";
                    inputWrapper
                        .querySelector("input")
                        .classList.remove("error-box");
                    // Remove the underlining in red
                    inputCity.style.borderBottom = "none";
                    // Return the label color to default
                    inputWrapper.querySelector("label").style.color = ""; // An empty line overrides the style
                }
                return inputCity.value.trim() !== "";
            }

            function checkCitym() {
                const inputCitym = isform.querySelector("#current-city-2");
                if (!inputCitym) {
                    return true;
                }
                if (inputCitym.value.trim() === "") {
                    const inputWrappers = inputCitym.closest(".input-wrapper");
                    const errorText =
                        lang === "en"
                            ? "This field is required"
                            : "Це поле є обов'язковим для заповнення";
                    inputWrappers.querySelector(".error-text").textContent =
                        errorText;
                    inputWrappers
                        .querySelector("input")
                        .classList.add("error-box");
                    // Add underlining in red
                    inputCitym.style.borderBottom = "2px solid red";
                    // Set the label color to red
                    inputWrappers.querySelector("label").style.color = "red";
                } else if (
                    !/^(?:(.)(?!\1{2,}))[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s'-]*$/.test(
                        inputCitym.value
                    )
                ) {
                    const inputWrapper = inputCitym.closest(".input-wrapper");
                    inputWrapper.querySelector(".error-text").textContent =
                        "Поле має містити не менше двох символів та не більше двох однакових символів підряд";
                    inputWrapper
                        .querySelector("input")
                        .classList.add("error-box");
                    // Add underlining in red
                    inputCitym.style.borderBottom = "2px solid red";
                    // Set the label color to red
                    inputWrapper.querySelector("label").style.color = "red";
                } else {
                    const inputWrappers = inputCitym.closest(".input-wrapper");
                    inputWrappers.querySelector(".error-text").textContent = "";
                    inputWrappers
                        .querySelector("input")
                        .classList.remove("error-box");
                    // Remove the underlining in red
                    inputCitym.style.borderBottom = "none";
                    // Return the label color to default
                    inputWrappers.querySelector("label").style.color = ""; //  An empty line overrides the style
                }
                return inputCitym.value.trim() !== "";
            }

            checkName();
            CheckSurname();
            checkPhone();
            checkEmail();
            checkCity();
            checkCitym();
            if (
                checkName() &&
                CheckSurname() &&
                checkPhone() &&
                checkEmail() &&
                checkCity() &&
                checkCitym()
            ) {
                isFormValid = true;
            }
        })
    );

    //checbox start
    document.querySelectorAll(".cchl").forEach((element) => {
        element.addEventListener("click", orderFunction);
    });

    function orderFunction() {
        let checkboxes = document.querySelectorAll(".cchl");
        let checkedCount = 0;

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                checkedCount++;
            }
        });

        if (checkedCount > 2) {
            this.checked = false; // We prohibit selection of the current checkbox if two others are already selected
        }
    }
    //checbox end
    // reCAPTCHA start
    listenSubmit();
    function listenSubmit() {
        document.querySelectorAll(".check-form").forEach((elem) =>
            elem.addEventListener("click", (event) => {
                event.preventDefault();
                // submit to the server if the form is valid
                if (isFormValid) {
                    grecaptcha.ready(function () {
                        grecaptcha
                            .execute(
                                "6LcwRRUaAAAAADavxcmw5ShOEUt1xMBmRAcPf6QP",
                                {
                                    action: "submit",
                                }
                            )
                            .then(function (token) {
                                if (elemForCheckCaptcha.checkValidity()) {
                                    const actionUrl =
                                        "https://intita.com/api/v1/entrant";
                                    const entrantFormData = new FormData(
                                        elemForCheckCaptcha
                                    );
                                    entrantFormData.append(
                                        "g-recaptcha-response",
                                        token
                                    );
                                    const http = new XMLHttpRequest();
                                    http.open("POST", actionUrl, true);
                                    http.send(entrantFormData);
                                    http.onreadystatechange = function () {
                                        if (
                                            +http.readyState === 4 &&
                                            +http.status === 201
                                        ) {
                                            entrantSubmitResponse();
                                        } else if (+http.status === 400) {
                                            switch (lang) {
                                                case "uk":
                                                    entrantSubmitResponse(
                                                        "Дякуємо! Ваша анкета успішно відправлена. Наш менеджер зв’яжеться з Вами в найближчий час"
                                                    );
                                                    break;
                                                case "en":
                                                    entrantSubmitResponse(
                                                        "Yes! Your application has been successfully submitted. Our manager will contact you as soon as possible"
                                                    );
                                                    break;
                                                default:
                                                    break;
                                            }
                                        }
                                    };
                                    http.onload = function () {
                                        if (+http.status !== 201) {
                                            switch (lang) {
                                                case "uk":
                                                    entrantSubmitResponse(
                                                        "Дякуємо! Ваша анкета успішно відправлена. Наш менеджер зв’яжеться з Вами в найближчий час"
                                                    );
                                                    break;
                                                case "en":
                                                    entrantSubmitResponse(
                                                        "Yes! Your application has been successfully submitted. Our manager will contact you as soon as possible"
                                                    );
                                                    break;
                                                default:
                                                    break;
                                            }
                                            return;
                                        }
                                        entrantSubmitResponse();
                                    };
                                }
                            });
                    });
                }
            })
        );
    }

    function entrantSubmitResponse(errorStr) {
        const secondWindow = document.getElementById("second-window");
        if (getComputedStyle(secondWindow, null).display === "none") {
            const elementAnketeText =
                document.querySelector(".form-name-content");
            if (errorStr) {
                elementAnketeText.innerText = errorStr;
                document.getElementById("modal-overlay").style.display =
                    "block";
                document.getElementById("second-window").style.display =
                    "block";
            } else {
                switch (lang) {
                    case "uk":
                        elementAnketeText.innerHTML =
                            "Дякую!<br>Я зателефоную Вам найближчим часом!";
                        break;
                    case "en":
                        elementAnketeText.innerText =
                            "We will contact you shortly";
                        break;
                    default:
                        break;
                }
                document.getElementById("second-window").style.display = "flex";
            }
            secondWindow.style.display = "block";
            document.getElementById("modal-overlay").style.display = "block";
            document.getElementById("second-window").style.display = "block";
        }
        // Close the modal window
        $("#registerModalToggle").modal("hide");
        $("#windowPartners").modal("hide");
    }

    $(function () {
        closeButton.addEventListener("click", function () {
            $("#registerModalToggle").modal("hide");
        });

        $("#registerModalToggle").on("hidden.bs.modal", function () {
            form.reset();
        });
    });

    document
        .getElementById("close-second-window")
        .addEventListener("click", () => {
            document.getElementById("second-window").style.display = "none";
            document.getElementById("modal-overlay").style.display = "none";
            // field clearing
            document
                .querySelectorAll(".registration-form input")
                .forEach((elem) => (elem.value = ""));
            location.reload(); // update
        });
});
// reCAPTCHA end

// validation name oninput
document.addEventListener("DOMContentLoaded", function () {
    const clientInputs = document.querySelectorAll(
        ".input-name, .input-surname"
    );
    clientInputs.forEach(function (input) {
        input.addEventListener("input", function () {
            const inputValue = input.value;
            const sanitizedValue = sanitizeInput(inputValue);
            if (inputValue !== sanitizedValue) {
                input.value = sanitizedValue;
            }
        });
    });
    function sanitizeInput(input) {
        const regex = /[^a-zA-Zа-яА-ЯїЇєЄіІґҐ'-]/g;
        return input.replace(regex, "");
    }
});
//modal erasure of data upon closing start
document.getElementById("overlay").addEventListener("click", function () {
    var modal = document.getElementById("windowPartners");
    var modalBackdrop = document.querySelector(".modal-backdrop");

    // We check whether the modal window is open before closing it
    if (modal.classList.contains("show")) {
        modal.style.display = "none";
        modalBackdrop.style.display = "none";
        document.body.classList.remove("modal-open");
        document.body.style.overflow = "auto"; // Unlock page scrolling
    }
});
// We get a link to the modal window
const modal = document.getElementById("windowPartners");

// We get all the form fields that need to be cleared
const formFields = modal.querySelectorAll("input, textarea");

// We add an event handler for closing the modal window
modal.addEventListener("hidden.bs.modal", function () {
    // Clear the values of all form fields
    formFields.forEach(function (field) {
        field.value = "";
    });
});
//modal erasure of data upon closing end

// footer start
const scrollUp = $(".scroll-up");
const offset = 100;
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
if (scrollUp) {
    window.addEventListener("scroll", () => {
        if (getTop() > offset) {
            scrollUp.addClass("scroll-up-active");
        } else {
            scrollUp.removeClass("scroll-up-active");
        }
    });
    scrollUp.on("click", (event) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
// Delay the removal of the element to ensure it's available in the DOM
let Inter;
$(".arrow").on("mouseenter", function () {
    $(".hov-1").slideUp(300).fadeIn(100);
    $(".hov-2").slideUp(200).fadeIn(200);
    $(".hov-3").slideUp(100).fadeIn(300);
    Inter = setInterval(function () {
        $(".hov-1").slideUp(300).fadeIn(100);
        $(".hov-2").slideUp(200).fadeIn(200);
        $(".hov-3").slideUp(100).fadeIn(300);
    }, 600);
});
$(".arrow").on("click", function () {
    clearInterval(Inter);
});
$(".arrow").on("mouseleave", function () {
    clearInterval(Inter);
});
// footer section end
// language switch
const languageSelect = document.getElementById("language");
languageSelect.addEventListener("change", function () {
    const selectedLanguage =
        languageSelect.options[languageSelect.selectedIndex].id;

    if (selectedLanguage === "ukrainian") {
        window.location.href = "index.html";
    } else if (selectedLanguage === "english") {
        window.location.href = "index-en.html";
    }
});
//switch for language selection end
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("registerModalToggle"); // We get a link to the modal window

    // We get all form fields that need to be cleared and highlighted
    const formFields = modal.querySelectorAll("input, textarea");

    // We add an event handler for closing the modal window
    modal.addEventListener("hidden.bs.modal", function () {
        // We clear the values of all form fields and remove the backlight
        formFields.forEach(function (field) {
            field.value = ""; // Clear the field values
            field.classList.remove("error-box"); // We remove the backlight with a red border
        });

        // We clean up the error text
        const errorTexts = modal.querySelectorAll(".error-text");
        errorTexts.forEach(function (errorText) {
            errorText.textContent = "";
        });

        // We remove the backlight with a red border from all the fields of the city
        const cityFields = modal.querySelectorAll(
            "#current-city, #current-city-2"
        );
        cityFields.forEach(function (cityField) {
            cityField.style.borderBottom = "none";
        });

        // Remove the red color for the labels
        const labels = modal.querySelectorAll("label");
        labels.forEach(function (label) {
            label.style.color = "";
        });
    });
});

//clearing the fields after closing the start forms
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("windowPartners"); // We get a link to the modal window

    // We get all form fields that need to be cleared and highlighted
    const formFields = modal.querySelectorAll("input, textarea");

    // We add an event handler for closing the modal window
    modal.addEventListener("hidden.bs.modal", function () {
        // We clear the values of all the fields of the form and remove the highlighting with a red border
        formFields.forEach(function (field) {
            field.value = ""; // Clear the field values
            field.classList.remove("error-box"); // We remove the backlight with a red border
        });

        // We clean up the error text
        const errorTexts = modal.querySelectorAll(".error-text");
        errorTexts.forEach(function (errorText) {
            errorText.textContent = "";
        });

        // We remove the backlight with a red border from all the fields of the city
        const cityFields = modal.querySelectorAll("textarea");
        cityFields.forEach(function (cityField) {
            cityField.style.border = "none";
        });
    });
});
//clearing the fields after closing the finish forms
