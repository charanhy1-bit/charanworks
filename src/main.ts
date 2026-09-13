import './styles.css';

const cases = [
  {
    id: 'tracxn', client: 'TRACXN', title: 'Cracking 0 → 1 for a new buyer segment: corporate sales teams', result: '30+', resultLabel: 'new logos, net-new segment', type: 'GTM · ZERO → ONE',
    image: "./resources/Tracxn Cover.png",
    excerpt: 'The growth question I owned: was there a buyer for this same dataset that we were completely ignoring? There was.'
  },
  {
    id: 'lucidity', client: 'LUCIDITY', title: 'Moving GRR 75% → 84% and NRR 107% → 116% on a ~$5M book', result: '+9 / +12', resultLabel: 'GRR / NRR points', type: 'RETENTION · REVENUE',
    image: 'https://saicharan-portfolio.notion.site/image/attachment%3A2e8e2076-8d22-4208-9554-511c31927d4d%3Alucidity_case_study.png?table=block&id=3d47a3f0-397c-80c9-ac93-f7ee106d06c3&spaceId=0be1dcf1-026a-46f6-965a-677a36883281&width=680&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    excerpt: "NRR and GRR aren't things you manage — they're lagging outputs, this year's number a verdict on last year's decisions."
  },
  {
    id: 'byjus-exam-prep', client: "BYJU'S EXAM PREP", title: 'New product launch GTM into a new market', result: '₹5M', resultLabel: 'saved in a spending freeze', type: 'LAUNCH · GTM',
    image: 'https://saicharan-portfolio.notion.site/image/attachment%3A361bb8ff-301c-4014-8a79-622e30c0a206%3Abyjus_exam_prep_gtm_case_study.png?table=block&id=e7b91ae3-880b-4349-9f47-caac9ca1bdc5&spaceId=0be1dcf1-026a-46f6-965a-677a36883281&width=680&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    excerpt: 'A business unit wants to launch an MBA test-prep solution using a new hybrid technology and capture 1% of the Australian market.'
  },
  {
    id: 'dell-wpp', client: 'DELL & WPP', title: 'D2C revenue growth through the COVID lockdown', result: '535%', resultLabel: 'YoY revenue growth', type: 'GROWTH · D2C',
    image: 'https://saicharan-portfolio.notion.site/image/attachment%3A3ea64624-ca23-4bde-9d79-c8577aa99cf7%3Adell_case_study.png?table=block&id=aa81be0e-5e1e-4947-b03a-b6fe2e2ac261&spaceId=0be1dcf1-026a-46f6-965a-677a36883281&width=680&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    excerpt: 'Digital was the new gateway and the new storefront. Why not follow the country by going all in on digital?'
  },
  {
    id: 'disney-hotstar', client: 'DISNEY+ HOTSTAR', title: 'Growing engagement without new content acquisition', result: '5 features', resultLabel: 'shipped in sequence', type: 'ENGAGEMENT · GROWTH',
    image: 'https://saicharan-portfolio.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6b9da02e-a4de-4c89-8ee4-4d5724ab0c8b%2Fdisney-plus-hotstar-india.webp?table=block&id=ad95ed66-fddb-46b2-8c4f-59257d22919f&spaceId=0be1dcf1-026a-46f6-965a-677a36883281&width=680&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    excerpt: 'Growing engagement without content acquisition.'
  },
  {
    id: 'byjus-online-classes', client: "BYJU'S ONLINE CLASSES", title: 'A proficiency-based class plan to lift engagement', result: '+9%', resultLabel: 'post-sales CSAT', type: 'PRODUCT · CUSTOMER SUCCESS',
    image: 'https://saicharan-portfolio.notion.site/image/attachment%3A90888602-2e7f-470b-a051-567a34abfedd%3Abyjus_case_study.png?table=block&id=f0805e97-394f-466a-b908-a6f131c8550a&spaceId=0be1dcf1-026a-46f6-965a-677a36883281&width=680&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    excerpt: 'Customized class planning to increase customer engagement.'
  },
];

const portrait = 'https://saicharan-portfolio.notion.site/image/attachment%3A9eb8a753-ecdc-4910-a8aa-2904953d62e7%3ASai_Charan_LinkedIn.jpeg?id=48e8ceea-f6fa-4c6b-9f23-515522495348&table=block&spaceId=0be1dcf1-026a-46f6-965a-677a36883281&width=900&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl';

const homeMarkup = () => `
  <nav class='nav'><div class='wrap nav-inner'>
    <a class='brand' href='#top'>Sai Charan<span>.</span></a>
    <div class='nav-links'><a href='#work'>Work</a><a href='#approach'>How I work</a><a href='#contact'>Contact</a></div>
  </div></nav>
  <main id='top'>
    <header class='hero'>
      <div class='hero-orb orb-a'></div><div class='hero-orb orb-b'></div>
      <div class='wrap hero-inner'>
        <div class='hero-copy-col'>
          <div class='eyebrow'>GTM · GROWTH · REVENUE</div>
          <div class='hero-headline-row'>
            <h1>I build GTM and revenue systems that make revenue <em>predictable.</em></h1>
            <div class='hero-portrait-wrap'>
              <img class='hero-portrait' src='${portrait}' alt='Sai Charan' />
              <span class='portrait-name'>Sai Charan</span>
              <a class='portrait-link' href='https://www.linkedin.com/in/saicharanhy/' target='_blank' rel='noreferrer'>LinkedIn ↗</a>
            </div>
          </div>
          <div class='hero-lifecycle'>
            <div class='lifecycle-heading'>Across the GTM motion</div>
            <div class='lifecycle-line'><span><b>✓</b> GTM strategy</span><i></i><span><b>✓</b> Pre-sales</span><i></i><span><b>✓</b> Sales</span><i></i><span><b>✓</b> Post-sales</span></div>
          </div>
          <a class='scroll-cue' href='#work'>↓ Selected work</a>
        </div>
      </div>
    </header>
    <section id='work' class='work-section'><div class='wrap'><div class='section-kicker'>SELECTED WORK</div><div class='section-head'><h2>Six problems. Six different contexts.</h2><p>Different businesses, different constraints — the same obsession with making revenue work better.</p></div><div class='case-grid'>
      ${cases.map((item, i) => `<a class='case-card ${i === 0 || i === 3 ? 'wide' : ''}' href='#case/${item.id}' aria-label='Open ${item.client} case study'><div class='case-visual'><img src='${item.image}' alt='${item.client} case study visual'><div class='visual-no'>0${i + 1}</div></div><div class='case-meta'><span>${item.client}</span><small>${item.type}</small></div><h3>${item.title}</h3><div class='case-foot'><div><strong>${item.result}</strong><span>${item.resultLabel}</span></div><span class='arrow'>↗</span></div></a>`).join('')}
    </div></div></section>
    <section id='approach' class='approach-section'><div class='wrap'><div class='section-kicker'>HOW I WORK</div><div class='approach-intro'><h2>Durable revenue lives where <em>systems</em> and <em>relationships</em> meet.</h2><p>Build only systems and you get process nobody trusts. Build only relationships and you get results nobody can repeat. The job is the handshake between the two.</p></div><div class='approach-list'><article><span>01</span><div><h3>Systems &amp; playbooks</h3><p>ICPs, pricing, forecasting and operating models that turn a win into something the whole team can run again.</p></div></article><article><span>02</span><div><h3>Relationships that carry it</h3><p>Customer relationships are part of the system. I work directly with customers to understand the problem, earn trust, and make the solution work in practice.</p></div></article><article><span>03</span><div><h3>Own the number</h3><p>Retention, expansion, pricing, forecasting — accountable to the commercial result, not just the deck.</p></div></article><article><span>04</span><div><h3>Research-backed, first principles</h3><p>Validate segments and pricing in the market before scaling them. Signal first, intuition second.</p></div></article></div></div></section>
    <section id='contact' class='contact-section'><div class='wrap'><div class='section-kicker'>CONTACT</div><h2>Have a messy growth or revenue problem?</h2><p>Let's talk.</p><div class='contact-links'><a href='mailto:charan.hy1@gmail.com'>charan.hy1@gmail.com</a><a href='https://www.linkedin.com/in/saicharanhy/' target='_blank' rel='noreferrer'>LinkedIn ↗</a></div></div></section>
  </main>
  <footer><div class='wrap'><span>Sai Charan — GTM &amp; Revenue</span><span>charanworks.in</span></div></footer>
`;

const caseNotionUrl = (id: string) => ({
  tracxn: 'https://saicharan-portfolio.notion.site/Tracxn-Cracking-0-1-for-a-New-Buyer-Segment-Corporate-Sales-Teams-3d47a3f0397c80068f34e0f84d4f7086?pvs=25',
  lucidity: 'https://saicharan-portfolio.notion.site/Lucidity-Moving-GRR-75-84-and-NRR-107-116-on-a-5M-Book-3d47a3f0397c8075afabf80bc11c3b19?pvs=25',
  'byjus-exam-prep': 'https://saicharan-portfolio.notion.site/Byju-s-Exam-Prep-New-Product-Launch-GTM-6b7909158939478392b32e5d34a4d0db?pvs=25',
  'dell-wpp': 'https://saicharan-portfolio.notion.site/Dell-and-WPP-D2C-Revenue-Growth-during-COVID-lockdown-c25b52cc2ab44418a9a0b55533eb8dc2?pvs=25',
  'disney-hotstar': 'https://saicharan-portfolio.notion.site/Disney-Hotstar-Grow-Engagement-w-o-Content-Acquisition-8b82b3868a81428dbea692f771e88a36?pvs=25',
  'byjus-online-classes': 'https://saicharan-portfolio.notion.site/Byju-s-Online-Classes-Customized-Class-Plan-to-Increase-Customer-Engagement-4e430a7e91e44798a60b6440c708c0b1?pvs=25',
}[id] ?? '');

const caseMarkup = (item: (typeof cases)[number]) => {
  if (item.id !== 'tracxn') return `<nav class='nav'><div class='wrap nav-inner'><a class='brand' href='#top'>Sai Charan<span>.</span></a><a class='back-link' href='#top'>← Back to home</a></div></nav><main class='case-page'><div class='wrap'><a class='case-back-inline' href='#top'>← Selected work</a><div class='case-page-kicker'>CASE STUDY · ${item.type}</div><h1>${item.title}</h1><p class='case-page-lede'>${item.excerpt}</p><div class='placeholder-panel'><span>VISUAL CASE STUDY</span><strong>This is the placeholder page.</strong><p>The visual story for this case will live here.</p><div class='placeholder-rule'></div><a class='notion-link' href='${caseNotionUrl(item.id)}' target='_blank' rel='noreferrer'>Read the detailed case study on Notion ↗</a></div></div></main>`;
  return `<nav class='nav'><div class='wrap nav-inner'><a class='brand' href='#top'>Sai Charan<span>.</span></a><a class='back-link' href='#top'>← Back to home</a></div></nav><main class='tracxn-page'><section class='tracxn-hero'><div class='wrap'><a class='case-back-inline' href='#top'>← Selected work</a><div class='context-reference'><div class='context-browser'><div class='context-windowbar'><span></span><span></span><span></span></div><div class='context-appnav'><div class='context-logo'><span class='context-logo-mark'>◉</span>Tracxn</div><div class='context-navlinks'><span>Work</span><span>About</span><span>Contact</span></div></div><div class='context-body'><div class='context-heading-row'><div class='context-heading'><div class='context-eyebrow'>GTM / ZERO → ONE</div><h1>The mandate:<br>find the next <em>pockets of growth.</em></h1><p>Tracxn is a private-market intelligence platform that helps investors, corporates and advisors understand companies, markets, competitors and people.</p></div></div><div class='context-four'><div class='context-four-item'><div class='context-step'>01<span>→</span></div><div class='context-icon'>▤</div><h3>WHAT<br>TRACXN IS</h3><p>Private-market intelligence on companies, markets, competitors and people.</p></div><div class='context-four-item'><div class='context-step'>02<span>→</span></div><div class='context-icon'>♧</div><h3>WHO IT<br>SERVES</h3><p>Investors (VCs, PEs, analysts), corporates and advisors.</p></div><div class='context-four-item'><div class='context-step'>03<span>→</span></div><div class='context-icon'>▥</div><h3>WHY NEW<br>DEMAND MATTERED</h3><p>Tracxn had gone public with a commitment to keep growing into new markets, new segments and new buyer profiles.</p></div><div class='context-four-item'><div class='context-step'>04<span>→</span></div><div class='context-icon'>◎</div><h3>MY MANDATE</h3><p>Find new pockets of demand.<br><br>New markets.<br>New segments.<br>New buyer profiles.</p></div></div></div></div></div></section></section><section class='tracxn-visuals'><div class='wrap'><figure class='tracxn-image'><img src='./resources/tracxn-01-discovery.png' alt='Tracxn 1 — Discovery' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/tracxn-02-insight.png' alt='Tracxn 2 — Insight' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/tracxn-03-icp-focus.png' alt='Tracxn 3 — ICP and Focus' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/tracxn-04-where-tracxn-could-win.png' alt='Tracxn 4 — Where Tracxn Could Win' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/tracxn-05-sales-engine.png' alt='Tracxn 5 — The Sales Engine' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/tracxn-06-rollout-result.png' alt='Tracxn 6 — Rollout and Result' loading='lazy' /></figure></div></section><section class='tracxn-close'><div class='wrap'><a class='notion-link' href='${caseNotionUrl(item.id)}' target='_blank' rel='noreferrer'>Read the full case study on Notion ↗</a><a class='back-link' href='#top'>← Back to home</a></div></section></main>`;
};

const app = document.querySelector('#app');
if (!app) throw new Error('App root not found');
const render = () => {
  const match = window.location.hash.match(/^#case\/(.+)$/);
  if (match) { const item = cases.find((entry) => entry.id === match[1]); if (item) { app.innerHTML = caseMarkup(item); document.title = `${item.client} — Sai Charan`; window.scrollTo(0, 0); return; } }
  app.innerHTML = homeMarkup(); document.title = 'Sai Charan — GTM & Revenue';
};
window.addEventListener('hashchange', render);
render();
