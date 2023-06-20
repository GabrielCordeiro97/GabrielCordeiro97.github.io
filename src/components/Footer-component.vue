<template>
    <div class="footer">
        <div class="footer__logo">
            <img class="footer__logo-img" src="../assets/icons/logoGray.png" alt="">
        </div>
        <div class="footer__description">
            <h2 class="footer__description-text">
                Gabriel Cordeiro | Front-end Developer
            </h2>
            <h2 class="footer__description-text">
                © 2023
            </h2>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .footer {
        display: flex;
        background-color: rgba(60,60,60);
        flex-direction: column;
        align-items: center;
    }
    .footer__logo {
        justify-content: center;
    }
    .footer__logo-img {
        height: 6rem;
    }
    .footer__description {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .footer__description-text{
        font-size: 1rem;
        color: darkorange;
    }
</style>