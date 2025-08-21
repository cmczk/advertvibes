<script>
  import { visible } from "../actions/visible";
</script>

<section class="section" use:visible>
  <div class="what-mean-header-wrapper">
    <h2 class="what-mean-title">Okay, but what does that actually mean?</h2>
    <p class="what-mean-subtitle">It means I’ll help you:</p>
  </div>

  <div class="what-mean-bullets-wrapper">
    <div class="what-mean-bullets">
      <p class="what-mean-text">
        Increase your reach, grow your followers, and spark real interest in
        your product
      </p>
      <p class="what-mean-text">
        Clearly deliver your offer to the people who truly need it, or create
        that need 😉
      </p>
      <p class="what-mean-text">
        Make your profile more attractive and more effective
      </p>
      <p class="what-mean-text">
        Boost sales, bookings, or any other key actions through precise
        targeting and the right presentation
      </p>
    </div>
  </div>
</section>

<style>
  section {
    min-height: 100vh;
    background-color: var(--color-light-orange);
    display: flex;
    column-gap: 15px;
    align-items: center;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: clamp(80px, 18.23vw, 350px);
    padding-top: 55px;
    padding-bottom: clamp(75px, 5.21vw, 100px);
    @media (max-width: 1024px) {
      flex-direction: column;
      row-gap: 15px;
      padding-inline: clamp(40px, 4.2vw, 80px);
    }
  }

  .what-mean-header-wrapper {
    width: 100%;
    max-width: 500px;
  }

  .what-mean-title {
    font-family: var(--playfair);
    font-weight: 400;
    font-size: clamp(48px, 2.77vw, 40pt);
    color: var(--color-text-gray);
    text-transform: uppercase;
    line-height: 1.2;
    margin-bottom: clamp(20px, 1.82vw, 35px);
  }

  .what-mean-subtitle {
    font-family: var(--inter);
    font-weight: 400;
    font-size: clamp(24px, 1.4vw, 20pt);
  }

  .what-mean-title,
  .what-mean-subtitle {
    @media (max-width: 1024px) {
      text-align: center;
    }
  }

  .what-mean-bullets-wrapper {
    position: relative;
    width: 550px;
    height: 615px;
    background-image: url("/images/what-mean-phone-image.jpg");
    background-position: center;
    background-size: cover;
    padding: 20px;
    @media (max-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }

  .what-mean-bullets {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, 25%);
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    max-width: 500px;
    @media (max-width: 1024px) {
      position: static;
      width: 100%;
      transform: translate(0);
    }
  }

  .what-mean-text {
    font-family: var(--inter);
    font-size: clamp(17px, 1.07vw, 20px);
    background-color: var(--color-bg-gray);
    border-radius: 10px;
    padding-inline: 20px;
    padding-block: 10px;
    color: white;
  }
</style>
