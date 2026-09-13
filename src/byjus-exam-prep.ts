const byjusExamPrepMarkup = () => `
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
              <div class='context-logo'><span class='context-logo-mark'>◉</span>BYJU'S EXAM PREP</div>
              <div class='context-navlinks'><span>Work</span><span>About</span><span>Contact</span></div>
            </div>
            <div class='context-body'>
              <div class='context-heading-row'>
                <div class='context-heading'>
                  <div class='context-eyebrow'>LAUNCH / GTM</div>
                  <h1>The mandate:<br>take a new hybrid <em>technology to market.</em></h1>
                  <p>BYJU'S had acquired a company with a hardware + software learning technology and wanted to use it to launch an MBA test-prep solution in Australia, with an ambition to capture 1% of the market.</p>
                </div>
              </div>
              <div class='context-four'>
                <div class='context-four-item'>
                  <div class='context-step'>01<span>→</span></div>
                  <div class='context-icon'>▤</div>
                  <h3>WHAT<br>WE HAD</h3>
                  <p>Camera-based sheet reading, interactive AI guidance, and educational content from experienced Ivy League teachers.</p>
                </div>
                <div class='context-four-item'>
                  <div class='context-step'>02<span>→</span></div>
                  <div class='context-icon'>♧</div>
                  <h3>THE<br>LAUNCH</h3>
                  <p>A new MBA test-prep offering for the Australian market, built around the acquired hybrid learning technology.</p>
                </div>
                <div class='context-four-item'>
                  <div class='context-step'>03<span>→</span></div>
                  <div class='context-icon'>▥</div>
                  <h3>THE<br>SITUATION</h3>
                  <p>Global players dominated the category, local tutors remained relevant, and live chat plus score guarantee were clear competitive gaps.</p>
                </div>
                <div class='context-four-item'>
                  <div class='context-step'>04<span>→</span></div>
                  <div class='context-icon'>◎</div>
                  <h3>MY<br>MANDATE</h3>
                  <p>Define the customer, prioritise the product, shape the user experience, set the price, and build the GTM plan and success metrics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='tracxn-visuals'>
      <div class='wrap'>
        <div class='placeholder-panel' style='min-height:220px;margin-top:0;'>
          <span>BYJU'S EXAM PREP · VISUAL STORY</span>
          <strong>The condensed case study starts here.</strong>
          <p>The six visual sections will follow this context: situation & market, customer research, customer definition, feature prioritisation, product experience, and go-to-market.</p>
          <div class='placeholder-rule'></div>
          <a class='notion-link' href='https://saicharan-portfolio.notion.site/Byju-s-Exam-Prep-New-Product-Launch-GTM-6b7909158939478392b32e5d34a4d0db?pvs=25' target='_blank' rel='noreferrer'>Read the full case study on Notion ↗</a>
        </div>
      </div>
    </section>
    <section class='tracxn-close'><div class='wrap'><a class='back-link' href='#top'>← Back to home</a></div></section>
  </main>
`;

const renderByjusExamPrep = () => {
  const match = window.location.hash.match(/^#case\/byjus-exam-prep$/);
  if (!match) return false;
  const app = document.querySelector('#app');
  if (!app) return false;
  app.innerHTML = byjusExamPrepMarkup();
  document.title = "BYJU'S Exam Prep — Sai Charan";
  window.scrollTo(0, 0);
  return true;
};

window.addEventListener('hashchange', renderByjusExamPrep);
renderByjusExamPrep();
