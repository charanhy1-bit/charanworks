import './styles.css';

const dellWppNotionUrl = 'https://saicharan-portfolio.notion.site/Dell-and-WPP-D2C-Revenue-Growth-during-COVID-lockdown-c25b52cc2ab44418a9a0b55533eb8dc2?pvs=25';

const renderDellWpp = () => {
  if (!window.location.hash.match(/^#case\/dell-wpp$/)) return;
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
                    <div class='context-eyebrow'>GROWTH / D2C</div>
                    <h1>The mandate:<br>move D2C when the <em>storefront disappeared.</em></h1>
                    <p>COVID lockdown disrupted the traditional retail journey. Dell and WPP needed to rethink how consumers discovered, evaluated and bought PCs — and take the D2C experience further online.</p>
                  </div>
                </div>
                <div class='context-four'>
                  <div class='context-four-item'>
                    <div class='context-step'>01<span>→</span></div>
                    <div class='context-icon'>▤</div>
                    <h3>THE<br>BUSINESS</h3>
                    <p>Dell consumer PCs, with WPP as strategic media and growth partner.</p>
                  </div>
                  <div class='context-four-item'>
                    <div class='context-step'>02<span>→</span></div>
                    <div class='context-icon'>◇</div>
                    <h3>THE<br>SHOCK</h3>
                    <p>Physical retail became constrained overnight. Digital became the new gateway to the customer.</p>
                  </div>
                  <div class='context-four-item'>
                    <div class='context-step'>03<span>→</span></div>
                    <div class='context-icon'>◎</div>
                    <h3>THE<br>AUDIENCE</h3>
                    <p>Young, metropolitan consumers — Young Millennials first, with Elder Gen Z as a secondary audience.</p>
                  </div>
                  <div class='context-four-item'>
                    <div class='context-step'>04<span>→</span></div>
                    <div class='context-icon'>↗</div>
                    <h3>MY<br>MANDATE</h3>
                    <p>Build a digital-first path from awareness and consideration through online purchase and growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='tracxn-visuals'>
        <div class='wrap'>
          <figure class='tracxn-image'><img src='./resources/Dell%201.png' alt='Dell and WPP 1 — The Opportunity' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Dell%202.png' alt='Dell and WPP 2 — The Audience' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Dell%203.png' alt='Dell and WPP 3 — The Customer Journey' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Dell%204.png' alt='Dell and WPP 4 — The Strategic Response' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Dell%205.png' alt='Dell and WPP 5 — The Digital Growth System' loading='lazy' /></figure>
          <figure class='tracxn-image'><img src='./resources/Dell%206.png' alt='Dell and WPP 6 — The Results' loading='lazy' /></figure>
          <a class='notion-link' href='${dellWppNotionUrl}' target='_blank' rel='noreferrer'>Read the full case study on Notion ↗</a>
        </div>
      </section>
      <section class='tracxn-close'><div class='wrap'><a class='back-link' href='#top'>← Back to home</a></div></section>
    </main>`;

  document.title = 'DELL & WPP — Sai Charan';
  window.scrollTo(0, 0);
};

window.addEventListener('hashchange', renderDellWpp);
renderDellWpp();
