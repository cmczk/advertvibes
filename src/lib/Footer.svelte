<script>
  import { visible } from "../actions/visible";
</script>

<footer class="footer section" use:visible>
  <div class="footer-block footer-make-step">
    <h2>MAKE A STEP INTO GROWTH AND RESULTS</h2>
    <button class="footer-button" type="button"> SUBMIT REQUEST </button>
  </div>
  <div class="footer-block footer-image">
    <a href="#top" class="footer-button" type="button"> SEND ME A DM </a>
  </div>
  <div class="footer-contacts">
    <p class="footer-contacts-socials">SOCIALS</p>
    <a href="#top" class="footer-contacts-instagram">@Valerie_Advertvibes</a>
  </div>
</footer>

<style>
  .footer {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr 1fr;
  }

  .footer-block {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding-bottom: 10vh;
    row-gap: 20vh;
    @media (max-width: 1024px) {
      row-gap: 15vh;
    }
  }

  .footer-block > h2 {
    line-height: 1.2;
    text-align: center;
    font-size: clamp(48px, 3.5vw, 67px);
    font-family: var(--playfair);
    color: var(--color-text-gray);
  }

  .footer-image {
    background-image: url("/images/valeria-footer-image.jpg");
    background-position: center;
    background-size: cover;
  }

  .footer-make-step {
    padding-inline: 8vw;
    @media (max-width: 1024px) {
      padding-block: 16vw;
    }
  }

  .footer-button {
    align-self: center;
    font-size: 24px;
    font-family: var(--playfair);
    background-color: var(--color-light-orange);
    padding-block: 2vh;
    padding-inline: clamp(25px, 2.7vw, 50px);
    border-radius: 12px;
    cursor: pointer;
    color: var(--color-text-gray-darker);
  }

  .footer-button:hover {
    transform: scale(102%);
  }

  .footer-contacts {
    background-color: var(--color-bg-gray);
    grid-column: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 8px;
    color: white;
  }

  .footer-contacts-socials {
    font-size: 24px;
  }

  .footer-contacts-instagram {
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    .footer {
      grid-template-columns: 1fr;
      grid-template-rows: 1.5fr 1.5fr 0.5fr;
    }

    .footer-contacts {
      grid-column: auto;
    }
  }
</style>
