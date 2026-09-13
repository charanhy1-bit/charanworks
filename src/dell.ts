const renderDell = () => {
  if (!window.location.hash.match(/^#case\/dell-wpp$/)) return;
  const app = document.querySelector('#app');
  if (!app) return;

  document.title = 'DELL & WPP — Sai Charan';
  window.scrollTo(0, 0);

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
              <div class='context-windowbar'><span></span><span></span><span></span></div>
              <div class='context-appnav'>
                <div class='context-logo'><span class='context-logo-mark'>◉</span>Dell × WPP</div>
                <div class='context-navlinks'><span>Work</span><span>About</span><span>Contact</span></div>
              </div>
              <div class='context-body'>
                <div class='context-heading-row'>
                  <div class='context-heading'>
                    <div class='context-eyebrow'>GROWTH / D2C</div>
                    <h1>The mandate:<br>take D2C <em>all-in.</em></h1>
                    <p>COVID-19 disrupted Dell's traditional retail journey overnight. Digital became the new gateway and the new storefront. I led the strategic digital overhaul to help scale Dell's direct-to-consumer e-commerce business through the shock.</p>
                  </div>
                </div>
                <div class='context-four'>
                  <div class='context-four-item'>
                    <div class='context-step'>01<span>→</span></div>
                    <div class='context-icon'>◌</div>
                    <h3>THE<br>MARKET</h3>
                    <p>A sudden shift to digital created a new path to reach and convert consumers directly.</p>
                  </div>
                  <div class='context-four-item'>
                    <div class='context-step'>02<span>→</span></div>
                    <div class='context-icon'>♧</div>
                    <h3>THE<br>AUDIENCE</h3>
                    <p>Young, metropolitan, aspirational consumers — with a primary focus on young millennials and a secondary Gen Z audience.</p>
                  </div>
                  <div class='context-four-item'>
                    <div class='context-step'>03<span>→</span></div>
                    <div class='context-icon'>▤</div>
                    <h3>THE<br>JOURNEY</h3>
                    <p>Map the path from passive prospect to high-propensity, active prospect, brand seeker, purchaser and user.</p>
                  </div>
                  <div class='context-four-item'>
                    <div class='context-step'>04<span>→</span></div>
                    <div class='context-icon'>◎</div>
                    <h3>MY<br>MANDATE</h3>
                    <p>Build a full-funnel digital growth system across audience, media, content, experience and partnerships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='tracxn-visuals'>
        <div class='wrap'>
          <figure class='tracxn-image'><img src='./resources/Dell%201.png' alt='Dell & WPP 1 — The Opportunity' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Dell%202.png' alt='Dell & WPP 2 — The Audience' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Dell%203.png' alt='Dell & WPP 3 — The Customer Journey' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Dell%204.png' alt='Dell & WPP 4 — The Strategic Response' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Dell%205.png' alt='Dell & WPP 5 — The Digital Growth System' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Dell%206.png' alt='Dell & WPP 6 — The Results' loading='lazy' /></figure>
          <a class='notion-link' href='https://saicharan-portfolio.notion.site/Dell-and-WPP-D2C-Revenue-Growth-during-COVID-lockdown-c25b52cc2ab44418a9a0b55533eb8dc2?pvs=25' target='_blank' rel='noreferrer'>Read the full case study on Notion ↗</a>
        </div>
      </section>
      <section class='tracxn-close'><div class='wrap'><a class='back-link' href='#top'>← Back to home</a></div></section>
    </main>
  `;
};

window.addEventListener('hashchange', renderDell);
renderDell();
