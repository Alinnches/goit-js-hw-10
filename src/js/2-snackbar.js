import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import pathSuccesIcon from '../img/success-icon.svg';
import pathErrorIcon from '../img/error-icon.svg'


document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();

    const delay = parseInt(event.target.elements.delay.value);
    const state = event.target.elements.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.success({
                title: "Success",
                message: `Fulfilled promise in ${delay}ms`,
                position: "topRight",
                backgroundColor: "#59a10d",
                titleColor: "#fff",
                messageColor: "#fff",
                iconUrl: pathSuccesIcon,
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: "Error",
                message: `Rejected promise in ${delay}ms`,
                position: "topRight",
                backgroundColor: "#ef4040",
                titleColor: "#fff",
                messageColor: "#fff",
                iconUrl: pathErrorIcon,
            });
        });
});