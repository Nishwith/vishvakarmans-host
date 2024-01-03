window.onload = () => {
    setTimeout(() => {
        const userUID = localStorage.getItem('userUID');
        if (!userUID) {
            window.location.href = "login.html";
        }
    }, 3000);
};


const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
    window.location.href = "login.html";
    localStorage.removeItem("userUID");
})

const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
const navBtns = document.querySelectorAll(".navBtn");
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navBar.classList.toggle('active');
    });
});

function openContent1() {
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(200%)";
    content4.style.transform = "translateX(300%)";
    btn1.style.background = "#ff7f00";
    btn1.style.color = "#001C30";
    btn1.style.border = "2px solid #001C30";
    btn2.style.background = "#fff";
    btn2.style.color = "#001C30";
    btn2.style.border = "2px solid #001C30";
    btn3.style.background = "#fff";
    btn3.style.color = "#001C30";
    btn3.style.border = "2px solid #001C30";
    btn4.style.background = "#fff";
    btn4.style.color = "#001C30";
    btn4.style.border = "2px solid #001C30";

}

function openContent2() {
    content1.style.transform = "translateX(-100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    content4.style.transform = "translateX(200%)";
    btn2.style.background = "#ff7f00";
    btn2.style.color = "#001C30";
    btn2.style.border = "2px solid #001C30";
    btn1.style.background = "#fff";
    btn1.style.color = "#001C30";
    btn1.style.border = "2px solid #001C30";
    btn3.style.background = "#fff";
    btn3.style.color = "#001C30";
    btn3.style.border = "2px solid #001C30";
    btn4.style.background = "#fff";
    btn4.style.color = "#001C30";
    btn4.style.border = "2px solid #001C30";
}

function openContent3() {
    content1.style.transform = "translateX(-200%)";
    content2.style.transform = "translateX(-100%)";
    content3.style.transform = "translateX(0%)";
    content4.style.transform = "translateX(100%)";
    btn3.style.background = "#ff7f00";
    btn3.style.color = "#001C30";
    btn3.style.border = "2px solid #001C30";
    btn2.style.background = "#fff";
    btn2.style.color = "#001C30";
    btn2.style.border = "2px solid #001C30";
    btn1.style.background = "#fff";
    btn1.style.color = "#001C30";
    btn1.style.border = "2px solid #001C30";
    btn4.style.background = "#fff";
    btn4.style.color = "#001C30";
    btn4.style.border = "2px solid #001C30";
}

function openContent4() {
    content1.style.transform = "translateX(-300%)";
    content2.style.transform = "translateX(-200%)";
    content3.style.transform = "translateX(-100%)";
    content4.style.transform = "translateX(0%)";
    btn4.style.background = "#ff7f00";
    btn4.style.color = "#001C30";
    btn4.style.border = "2px solid #001C30";
    btn2.style.background = "#fff";
    btn2.style.color = "#001C30";
    btn2.style.border = "2px solid #001C30";
    btn3.style.background = "#fff";
    btn3.style.color = "#001C30";
    btn3.style.border = "2px solid #001C30";
    btn1.style.background = "#fff";
    btn1.style.color = "#001C30";
    btn1.style.border = "2px solid #001C30";
}
