<header class="header gap-20">
  <div class="header-inner">
    <p class="header-subtext">MARKETING</p>
    <div class="header-image">
      <h1 class="header-advertvibes">ADVERTVIBES</h1>
    </div>
    <p class="header-subtext">TARGETED ADS</p>
  </div>
  <p class="header-approach">A holistic approach to your promotion</p>
</header>

<style>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg-gray);
    min-height: 100vh;
  }

  .header-inner {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    column-gap: 12px;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      row-gap: 2vh;
    }
  }

  .header-subtext {
    font-family: var(--playfair);
    color: white;
    white-space: nowrap;
    color: white;
    font-size: clamp(22px, 1.6vw, 30px);
  }

  .header-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(350px, 26.04vw, 500px);
    aspect-ratio: 1;
    background-image: url("/images/header-image.jpg");
    background-position: center;
    background-size: cover;
    background-color: #1f1f1f80;
    background-blend-mode: multiply;
    margin-bottom: 12px;
    @media (max-width: 1024px) {
      margin-bottom: 0;
    }
  }

  .header-advertvibes {
    font-family: var(--playfair);
    font-weight: bold;
    position: absolute;
    bottom: 80px;
    font-size: clamp(53px, 11.46vw, 220px);
    color: var(--color-light-orange);
    @media (max-width: 1024px) {
      position: static;
    }
  }

  .header-approach {
    font-family: var(--inter);
    font-weight: 400;
    font-size: clamp(20px, 1.25vw, 24px);
    text-align: center;
    color: white;
  }
</style>
