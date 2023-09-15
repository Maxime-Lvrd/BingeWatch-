/* Inscription - Connexion */
const signIn = document.querySelector(".log-in");
const signUp = document.querySelector(".sign-up");
const connexion = document.querySelector(".connexion");
const inscription = document.querySelector(".inscription");

signIn.addEventListener("click", function () {
    signUp.style.border = "none";
    signIn.style.borderBottom = "1px solid black";
    inscription.style.display = "none";
    connexion.style.display = "block";
});

signUp.addEventListener("click", function () {
    signIn.style.border = "none";
    signUp.style.borderBottom = "1px solid black";
    connexion.style.display = "none";
    inscription.style.display = "block";
});

/* like - dislike */
const like = document.querySelector(".like");
const dislike = document.querySelector(".dislike");

like.addEventListener("click", function () {
    dislike.style.display = "block";
    like.style.display = "none";
});

dislike.addEventListener("click", function () {
    dislike.style.display = "none";
    like.style.display = "block";
});

/* comment */
const noComment = document.querySelector(".no-comment");
const comment = document.querySelector(".comment");
const comments = document.querySelector(".comments");

noComment.addEventListener("click", function () {
    comment.style.display = "block";
    comments.style.display = "block";
    noComment.style.display = "none";
});

comment.addEventListener("click", function () {
    comment.style.display = "none";
    comments.style.display = "none";
    noComment.style.display = "block";
});

/* home page 
const seeCoPage = document.querySelector(".see-co-page");
const seeHomePage = document.querySelector(".see-home-page");
const kezako = document.querySelector(".kezako");
const coPage = document.querySelector(".co-page");
const voirPage = document.querySelector(".voir-page");
const voirPageCo = document.querySelector(".voir-page-co");

seeCoPage.addEventListener("click", function () {
    coPage.style.display = "block";
    voirPage.style.display = "none";
    voirPageCo.style.display = "block";
    kezako.style.display = "none";
});

seeHomePage.addEventListener("click", function () {
    coPage.style.display = "none";
    voirPage.style.display = "block";
    voirPageCo.style.display = "none";
    kezako.style.display = "block";
}); */

/* Inscription - Connexion 
const publi = document.querySelector(".publi");
const ami = document.querySelector(".ami");
const publication = document.querySelector(".publication");
const friend = document.querySelector(".friend");

publi.addEventListener("click", function () {
    ami.style.border = "none";
    publi.style.borderBottom = "1px solid black";
    friend.style.display = "none";
    publication.style.display = "block";
});

ami.addEventListener("click", function () {
    publi.style.border = "none";
    ami.style.borderBottom = "1px solid black";
    publication.style.display = "none";
    friend.style.display = "block";
}); */
