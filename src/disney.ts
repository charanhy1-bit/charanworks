import './styles.css';

const disneyNotionUrl = 'https://saicharan-portfolio.notion.site/Disney-Hotstar-Grow-Engagement-w-o-Content-Acquisition-8b82b3868a81428dbea692f771e88a36?pvs=25';

const renderDisney = () => {
  if (!window.location.hash.match(/^#case\/disney-hotstar$/)) return;
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    <nav class='nav'><div class='wrap nav-inner'>
      <a class='brand' href='#top'>Sai Charan<span>.</span></a>
      <a class='back-link' href='#top'>← Back to home</a>
    </div></nav>
    <main class='tracxn-page'>
      <section class='tracxn-hero'>
        <div class='wrap'>
          <a class='case-back-inline' href='#top'>← Selected work</a>
          <div class='context-reference'>
            <div class='context-browser'>
              <div class='context-body'>
                <div class='context-heading-row'>
                  <div class='context-heading'>
                    <div class='context-eyebrow'>ENGAGEMENT / GROWTH</div>
                    <h1>The mandate:<br>grow engagement <em>without buying content.</em></h1>
                    <p>Disney+ Hotstar had built a huge audience around IPL, but the business needed a more sustainable way to grow after losing the rights. The brief was to find high-value, low-cost “Easy Wins” that could increase time spent on the app without another capital-heavy content bet.</p>
                  </div>
                </div>
                <div class='context-four'>
                  <div class='context-four-item'>
                    <div class='context-step'>01<span>→</span></div>
                    <div class='context-icon'>◉</div>
                    <h3>THE<br>BUSINESS</h3>
                    <p>India’s largest subscription streaming platform, with ~60M monthly active users at the time.</p>
                  </div>
                  <div class='context-four-item'>
                    <div class='context-step'>02<span>→</span></div>
                    <div class='context-icon'>◇</div>
                    <h3>THE<br>CONSTRAINT</h3>
                    <p>IPL rights were moving away, while ARPU remained low. The answer needed to be less capital intensive.</p>
                  </div>
                  <div class='context-four-item'>
                    <div class='context-step'>03<span>→</span></div>
                    <div class='context-icon'>◎</div>
                    <h3>THE<br>USER</h3>
                    <p>Nishit, the “Casual Nerd”: a highly engaged viewer who already left Hotstar for clips and fan conversations elsewhere.</p>
                  </div>
                  <div class='context-four-item'>
                    <div class='context-step'>04<span>→</span></div>
                    <div class='context-icon'>↗</div>
                    <h3>MY<br>MANDATE</h3>
                    <p>Find the behavioural gaps, turn them into product hypotheses, prioritise the bets, and define how to test and launch them.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='tracxn-visuals'>
        <div class='wrap'>
          <figure class='tracxn-image'><img src='./resources/Disney%201.png' alt='Disney+ Hotstar 1 — The Opportunity' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Disney%202.png' alt='Disney+ Hotstar 2 — The Competitive White Space' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Disney%203.png' alt='Disney+ Hotstar 3 — The User Insight' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Disney%204.png' alt='Disney+ Hotstar 4 — Turn Insight Into Hypotheses' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Disney%205.png' alt='Disney+ Hotstar 5 — Prioritisation and Roadmap' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Disney%206.png' alt='Disney+ Hotstar 6 — Go To Market and Success Metrics' loading='lazy' /></figure>
          <a class='notion-link' href='${disneyNotionUrl}' target='_blank' rel='noreferrer'>Read the full case study on Notion ↗</a>
        </div>
      </section>
      <section class='tracxn-close'><div class='wrap'><a class='back-link' href='#top'>← Back to home</a></div></section>
    </main>`;

  document.title = 'DISNEY+ HOTSTAR — Sai Charan';
  window.scrollTo(0, 0);
};

window.addEventListener('hashchange', renderDisney);
renderDisney();
