<script>
  import { visible } from "../actions/visible";
</script>

<section class="section" use:visible>
  <h2 class="choose-format-header">CHOOSE COLLABORATION FORMAT</h2>
  <div class="choose-format-body">
    <h3 class="choose-format-card-header">Profile Audit</h3>
    <h3 class="choose-format-card-header">
      Targeted Ads Setup with your Materials
    </h3>
    <h3 class="choose-format-card-header">End-to-End Targeted Ads Setup</h3>
    <div class="choose-format-card">
      <div class="choose-format-card-lines">
        <p class="choose-format-card-line">
          Analysis of your posts, highlights, visuals, and positioning
        </p>
        <p class="choose-format-card-line">Competitor and niche overview</p>
        <p class="choose-format-card-line">
          Clear recommendations for improvement: structure, messaging, visuals,
          and overall presentation
        </p>
      </div>
    </div>
    <div class="choose-format-card">
      <div class="choose-format-card-lines">
        <p class="choose-format-card-line">Campaign setup</p>
        <p class="choose-format-card-line">Target audience selection</p>
        <p class="choose-format-card-line">Using your visuals and ad texts</p>
        <p class="choose-format-card-line">
          Tracking ad performance and sharing what works
        </p>
        <p class="choose-format-card-line">Ongoing analysis and adjustments</p>
      </div>
    </div>
    <div class="choose-format-card">
      <div class="choose-format-card-lines">
        <p class="choose-format-card-line">
          Analysis of your Instagram profile and website (if you have one)
        </p>
        <p class="choose-format-card-line">
          Research on competitors and target audience
        </p>
        <p class="choose-format-card-line">
          Creation of ad creatives - both visuals and copy
        </p>
        <p class="choose-format-card-line">
          Instagram Ads setup through Meta (Facebook Ads Manager)
        </p>
        <p class="choose-format-card-line">
          Ad analytics + adjustments and improvements
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 40px;
    padding-inline: clamp(20px, 6.25vw, 120px);
    padding-block: 77px;
  }

  .choose-format-header {
    text-align: center;
    font-size: clamp(48px, 3.5vw, 67px);
    line-height: 1.2;
    font-family: var(--playfair);
    color: var(--color-text-gray);
  }

  .choose-format-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    column-gap: clamp(30px, 5.21vw, 100px);
    row-gap: 20px;
  }

  .choose-format-body > h3 {
    align-self: center;
    font-family: var(--playfair);
  }

  .choose-format-card {
    @media (max-width: 1024px) {
      margin-bottom: 30px;
    }
  }

  .choose-format-card-header {
    font-size: 24px;
    text-align: center;
  }

  .choose-format-card-lines {
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    border: clamp(3px, 0.36vw, 7px) solid var(--color-light-orange);
    border-radius: 12px;
    padding: clamp(15px, 2.34vw, 45px);
  }

  .choose-format-card-line {
    font-size: clamp(17px, 0.94vw, 18px);
    background-color: var(--color-light-orange);
    border-radius: 12px;
    padding: 15px;
  }

  @media (max-width: 1024px) {
    .choose-format-body {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "h1"
        "c1"
        "h2"
        "c2"
        "h3"
        "c3";
    }

    .choose-format-body > h3:nth-of-type(1) {
      grid-area: h1;
    }
    .choose-format-body > h3:nth-of-type(2) {
      grid-area: h2;
    }
    .choose-format-body > h3:nth-of-type(3) {
      grid-area: h3;
    }

    .choose-format-body > .choose-format-card:nth-of-type(4) {
      grid-area: c1;
    }
    .choose-format-body > .choose-format-card:nth-of-type(5) {
      grid-area: c2;
    }
    .choose-format-body > .choose-format-card:nth-of-type(6) {
      grid-area: c3;
    }
  }
</style>
