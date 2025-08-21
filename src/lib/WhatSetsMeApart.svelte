<script>
  import { visible } from "../actions/visible";
</script>

<section class="section" use:visible>
  <h2 class="sets-me-apart-title">What sets me apart</h2>
  <div class="sets-me-apart-card-wrapper wrapper-1">
    <div class="sets-me-apart-card card-1">
      <h3 class="sets-me-apart-card-title">Comprehensive approach</h3>
      <p class="sets-me-apart-card-body">
        I integrate ads into your business processes, from niche analysis to
        warming-up strategies and sales funnels
      </p>
    </div>
  </div>
  <div class="sets-me-apart-card-wrapper wrapper-2">
    <div class="sets-me-apart-card card-2">
      <h3 class="sets-me-apart-card-title">Eastern European precision</h3>
      <p class="sets-me-apart-card-body">
        A keen eye for detail, and a high standard of quality
      </p>
    </div>
  </div>
  <div class="sets-me-apart-card-wrapper wrapper-3">
    <div class="sets-me-apart-card card-3">
      <h3 class="sets-me-apart-card-title">Transparent workflow</h3>
      <p class="sets-me-apart-card-body">
        Every step is clear and open - you know what’s happening, why, and where
        we’re headed
      </p>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    min-height: 100vh;
    background-color: var(--color-bg-gray);
    padding-left: clamp(20px, 6.25vw, 120px);
    padding-right: clamp(20px, 2.6vw, 50px);
    padding-top: 80px;
    padding-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
    gap: 40px;
    @media (max-width: 1360px) {
      display: flex;
      flex-wrap: wrap;
      row-gap: 20px;
    }
    @media (max-width: 768px) {
      flex-wrap: nowrap;
      flex-direction: column;
    }
  }

  .sets-me-apart-title {
    white-space: nowrap;
    line-height: 1.2;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 80px;
    margin-left: clamp(20px, 6.25vw, 120px);
    font-size: clamp(48px, 3.47vw, 50pt);
    font-family: var(--playfair);
    color: var(--color-light-orange);
    text-transform: uppercase;
    @media (max-width: 1360px) {
      flex-basis: 100%;
      text-align: center;
      white-space: wrap;
      position: static;
      margin: 0;
      margin-bottom: 25px;
    }
  }

  .sets-me-apart-card-wrapper {
    position: relative;
    background-position: center;
    background-size: cover;
    @media (max-width: 1360px) {
      padding-inline: 20px;
    }
  }

  .wrapper-1 {
    background-image: url("/images/wrapper-1.jpg");
    width: clamp(250px, 18.75vw, calc(300px * 1.2));
    aspect-ratio: 360 / 492;
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    justify-self: left;
  }

  .wrapper-2 {
    background-image: url("/images/wrapper-2.jpg");
    width: clamp(250px, 32vw, calc(512px * 1.2));
    aspect-ratio: 614 / 451;
    grid-row: 2 / 4;
    grid-column: 2 / 3;
    justify-self: right;
  }

  .wrapper-3 {
    background-image: url("/images/wrapper-3.jpg");
    width: clamp(250px, 14.11vw, calc(226px * 1.2));
    aspect-ratio: 271 / 444;
    grid-row: 3 / 4;
    grid-column: 3 / 4;
    justify-self: right;
    background-position: bottom;
  }

  .sets-me-apart-card {
    position: absolute;
    background-color: var(--color-light-orange);
    border-radius: 12px;
    padding: 24px;
    width: clamp(250px, 15.625vw, 300px);
    @media (max-width: 1360px) {
      position: static;
      width: 75%;
    }
  }

  .card-1 {
    left: 30%;
    bottom: 50%;
    transform: translate(50%, 50%);
    z-index: 100;
  }

  .card-2 {
    right: 50%;
    top: 70%;
    transform: translate(50%, 50%);
  }

  .card-3 {
    top: -75%;
    right: 90%;
    transform: translate(50%, 50%);
  }

  .sets-me-apart-card-title {
    font-size: clamp(20px, 1.11vw, 16pt);
    font-family: var(--playfair);
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .sets-me-apart-card-body {
    font-size: clamp(17px, 1.04vw, 15pt);
    font-family: var(--inter);
    padding-inline: 10px;
  }

  @media (max-width: 1360px) {
    .wrapper-1,
    .wrapper-2,
    .wrapper-3 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    }

    .wrapper-2 {
      width: 100%;
      order: 3;
    }

    .wrapper-3 {
      order: 2;
    }

    .wrapper-1,
    .wrapper-3 {
      flex: 1 1 45%;
    }

    .card-1,
    .card-2,
    .card-3 {
      position: static;
      transform: translate(0);
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .wrapper-1,
    .wrapper-3 {
      width: 100%;
      flex: 1 1 100%;
    }
  }
</style>
