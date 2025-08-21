<script>
  import { visible } from "../actions/visible";
</script>

<section class="section" use:visible>
  <div class="lets-check-out-images">
    <h2 class="lets-check-out-title">Let’s check out some feedbacks</h2>
    <div class="lets-check-out-feedbacks-1-2">
      <div class="lets-check-out-feedback-1">
        <img
          class="lets-check-out-feedback-img-1"
          src="/advertvibes/images/feedback-1.jpg"
          alt=""
          loading="lazy"
        />
      </div>
      <div class="lets-check-out-feedback-2">
        <img
          class="lets-check-out-feedback-img-2"
          src="/advertvibes/images/feedback-2.jpg"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
    <div class="lets-check-out-feedback-3">
      <img
        class="lets-check-out-feedback-img-3"
        src="/advertvibes/images/feedback-3.jpg"
        alt=""
        loading="lazy"
      />
    </div>
    <div class="lets-check-out-feedback-4">
      <img
        class="lets-check-out-feedback-img-4"
        src="/advertvibes/images/feedback-4.jpg"
        alt=""
        loading="lazy"
      />
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--color-light-orange);
    padding-inline: 120px;
    padding-top: 55px;
    padding-bottom: 100px;
  }

  .lets-check-out-images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    justify-content: space-between;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, auto);
      justify-items: center;
      gap: 15px;
    }
  }

  .lets-check-out-title {
    color: var(--color-text-gray);
    line-height: 1.2;
    font-size: clamp(48px, 2.6vw, 37pt);
    grid-row: 1 / 2;
    font-family: var(--playfair);
    text-transform: uppercase;
    margin-bottom: 50px;
    @media (max-width: 1024px) {
      text-align: center;
      margin-bottom: 25px;
    }
  }

  .lets-check-out-feedbacks-1-2 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    @media (max-width: 1024px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .lets-check-out-feedback-1 {
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(187px, 19vw, calc(280px * 1.3));
    height: clamp(117px, 11.85vw, calc(175px * 1.3));
    background-color: white;
    padding: clamp(15px, 1.46vw, 28px);
    @media (max-width: 1024px) {
      width: 100%;
      aspect-ratio: 280 / 175;
      height: auto;
      max-height: 450px;
      transform: translate(0);
      margin-bottom: 15px;
    }
    @media (max-width: 650px) {
      max-height: 250px;
    }
  }

  .lets-check-out-feedback-2 {
    transform: translateX(40%) translateY(100px);
    position: relative;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(253px, 25.73vw, calc(380px * 1.3));
    height: clamp(160px, 16.25vw, calc(240px * 1.3));
    background-color: white;
    z-index: 100;
    padding: clamp(15px, 1.46vw, 28px);
    @media (max-width: 1024px) {
      width: 100%;
      aspect-ratio: 380 / 240;
      height: auto;
      max-height: 450px;
      transform: translate(0);
    }
    @media (max-width: 650px) {
      max-height: 250px;
    }
  }

  .lets-check-out-feedback-3 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    border-radius: 10px;
    transform: rotate(-16deg);
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(239px, 24.24vw, calc(358px * 1.3));
    height: clamp(274px, 25.05vw, calc(370px * 1.3));
    background-color: white;
    padding: clamp(15px, 1.46vw, 28px);
    @media (max-width: 1210px) {
      transform: translateY(-60px) rotate(-16deg);
    }
    @media (max-width: 1024px) {
      transform: translate(0);
      width: 100%;
      aspect-ratio: 358 / 370;
      height: auto;
      grid-row: 3 / 4;
      grid-column: 1 / 2;
    }
  }

  .lets-check-out-feedback-4 {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    border-radius: 10px;
    transform: rotate(4deg);
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(273px, 27.7vw, calc(409px * 1.3));
    height: clamp(371px, 37.7vw, calc(557px * 1.3));
    background-color: white;
    padding: clamp(15px, 1.46vw, 28px);
    @media (max-width: 1024px) {
      width: 100%;
      aspect-ratio: 409 / 557;
      height: auto;
      grid-row: 4 / 5;
      grid-column: 1 / 2;
      transform: rotate(0);
    }
  }

  .lets-check-out-feedback-img-1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .lets-check-out-feedback-img-2 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    background-position: center;
    background-size: cover;
  }

  .lets-check-out-feedback-img-3 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    background-position: center;
    background-size: cover;
  }

  .lets-check-out-feedback-img-4 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    background-position: center;
    background-size: cover;
  }
</style>
