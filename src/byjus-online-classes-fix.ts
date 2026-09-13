import './styles.css';

const byjusOnlineClassesNotionUrl = 'https://saicharan-portfolio.notion.site/Byju-s-Online-Classes-Customized-Class-Plan-to-Increase-Customer-Engagement-4e430a7e91e44798a60b6440c708c0b1?pvs=25';

const renderByjusOnlineClasses = () => {
  if (!window.location.hash.match(/^#case\/byjus-online-classes$/)) return;
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
                    <div class='context-eyebrow'>PRODUCT / CUSTOMER SUCCESS</div>
                    <h1>The mandate:<br>make online classes <em>work better for every student.</em></h1>
                    <p>BYJU'S Online Classes saw declining engagement. The work was to understand what was different across student proficiency levels, identify the root causes inside the class experience, and redesign the model around those differences.</p>
                  </div>
                </div>
                <div class='context-four'>
                  <div class='context-four-item'><div class='context-step'>01<span>→</span></div><div class='context-icon'>◎</div><h3>THE<br>PROBLEM</h3><p>Engagement was declining, with the existing one-size-fits-all class model not working equally well for every student.</p></div>
                  <div class='context-four-item'><div class='context-step'>02<span>→</span></div><div class='context-icon'>◫</div><h3>THE<br>SEGMENTATION</h3><p>Students were analysed across A1, A2 and A3 proficiency cohorts to understand how their classroom needs differed.</p></div>
                  <div class='context-four-item'><div class='context-step'>03<span>→</span></div><div class='context-icon'>◇</div><h3>THE<br>DIAGNOSIS</h3><p>A3 learners showed distinct needs around motivation, confidence, language, tutor interaction and concept clarity.</p></div>
                  <div class='context-four-item'><div class='context-step'>04<span>→</span></div><div class='context-icon'>↗</div><h3>MY<br>ROLE</h3><p>Translate the analysis into a proficiency-based class model spanning tutor, class dynamics and content.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='tracxn-visuals'><div class='wrap'>
        <figure class='tracxn-image'><img src='./resources/Byju%27s%20Classes%201.png' alt="Byju's Online Classes 1 — The Problem" loading='lazy' /></figure>
        <figure class='tracxn-image'><img src='./resources/Byju%27s%20Classes%202.png' alt="Byju's Online Classes 2 — The Segmentation" loading='lazy' /></figure>
        <figure class='tracxn-image'><img src='./resources/Byju%27s%20Classes%203.png' alt="Byju's Online Classes 3 — The A3 Insight" loading='lazy' /></figure>
        <figure class='tracxn-image'><img src='./resources/Byju%27s%20Classes%204.png' alt="Byju's Online Classes 4 — The Redesign" loading='lazy' /></figure>
        <figure class='tracxn-image'><img src='./resources/Byju%27s%20Classes%205.png' alt="Byju's Online Classes 5 — The Result" loading='lazy' /></figure>
        <a class='notion-link' href='${byjusOnlineClassesNotionUrl}' target='_blank' rel='noreferrer'>Read the full case study on Notion ↗</a>
      </div></section>
      <section class='tracxn-close'><div class='wrap'><a class='back-link' href='#top'>← Back to home</a></div></section>
    </main>`;

  document.title = "BYJU'S ONLINE CLASSES — Sai Charan";
  window.scrollTo(0, 0);
};

window.addEventListener('hashchange', renderByjusOnlineClasses);
renderByjusOnlineClasses();
