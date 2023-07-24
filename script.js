// Inscription - Connexion
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

// like - dislike 
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

// comment
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