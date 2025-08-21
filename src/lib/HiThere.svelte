<section>
  <div class="hi-there-text-wrapper">
    <h2 class="hi-there-title">HI THERE!</h2>
    <div class="hi-there-ps">
      <p class="hi-there-text">
        My name is Valerie. I'm a targeting specialist from Eastern Europe with
        a degree in Social Communications and Marketing.
      </p>
      <p class="hi-there-text">
        In my work, I combine a deep understanding of communication, behavioral
        psychology, and visual perception with a clear, results-driven ad
        strategy.
      </p>
      <p class="hi-there-text">
        <b>Work</b> with clients from around the world
        <br />
        <b>Speak</b> English, Polish and Russian
      </p>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <div class="hi-there-image w-[25vw] h-[50vh]"></div>
  </div>
</section>

<style>
  section {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding-left: clamp(40px, 4.2vw, 80px);
    padding-top: 55px;
    padding-bottom: clamp(75px, 5.21vw, 100px);
    @media (max-width: 1024px) {
      flex-direction: column-reverse;
      padding-right: clamp(40px, 4.2vw, 80px);
    }
  }

  .hi-there-text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1024px) {
      justify-content: center;
      align-items: center;
    }
  }

  .hi-there-title {
    font-size: clamp(48px, 7.3vw, 105pt);
    font-family: var(--playfair);
    font-weight: 400;
    color: var(--color-text-gray);
    @media (max-width: 1024px) {
      margin-bottom: 15px;
      text-align: center;
    }
  }

  .hi-there-ps {
    display: flex;
    flex-direction: column;
    row-gap: clamp(20px, 1.67vw, 32px);
    width: 100%;
    @media (max-width: 1024px) {
      align-items: center;
    }
  }

  .hi-there-text {
    font-size: clamp(17px, 1.25vw, 24px);
    width: 100%;
    max-width: 50vw;
    @media (max-width: 1024px) {
      text-align: center;
      max-width: 80vw;
    }
  }

  .hi-there-image {
    width: clamp(350px, 26.2vw, 503px);
    aspect-ratio: 1;
    background-image: url("/images/hi-there-image.jpg");
    background-position: center;
    background-size: cover;
    @media (max-width: 1024px) {
      margin-bottom: 15px;
    }
  }
</style>
