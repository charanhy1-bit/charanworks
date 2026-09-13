import './styles.css';

const cases = [
  {
    id: 'tracxn',
    client: 'TRACXN',
    title: 'Cracking 0 → 1 for a new buyer segment: corporate sales teams',
    result: '30+',
    resultLabel: 'new logos, net-new segment',
    type: 'GTM · ZERO → ONE',
    image: "./resources/Tracxn Cover.png",
    excerpt: 'The growth question I owned: was there a buyer for this same dataset that we were completely ignoring? There was.'
  },
  {
    id: 'lucidity',
    client: 'LUCIDITY',
    title: 'Moving GRR 75% → 84% and NRR 107% → 116% on a ~$5M book',
    result: '+9 / +12',
    resultLabel: 'GRR / NRR points',
    type: 'RETENTION · REVENUE',
    image: "./resources/Lucidity Cover.png",
    excerpt: "NRR and GRR aren't things you manage — they're lagging outputs, this year's number a verdict on last year's decisions."
  },
  {
    id: 'byjus-exam-prep',
    client: "BYJU'S EXAM PREP",
    title: 'New product launch GTM into a new market',
    result: '₹5M',
    resultLabel: 'saved in a spending freeze',
    type: 'LAUNCH · GTM',
    image: "./resources/Byju%27s%20Exam%20Prep%20Cover.png",
    excerpt: 'A business unit wants to launch an MBA test-prep solution using a new hybrid technology and capture 1% of the Australian market.'
  },
  {
    id: 'dell-wpp',
    client: 'DELL & WPP',
    title: 'D2C revenue growth through the COVID lockdown',
    result: '535%',
    resultLabel: 'YoY revenue growth',
    type: 'GROWTH · D2C',
    image: "./resources/Dell WPP Cover.png",
    excerpt: 'Digital was the new gateway and the new storefront. Why not follow the country by going all in on digital?'
  },
  {
    id: 'disney-hotstar',
    client: 'DISNEY+ HOTSTAR',
    title: 'Growing engagement without new content acquisition',
    result: '5 features',
    resultLabel: 'shipped in sequence',
    type: 'ENGAGEMENT · GROWTH',
    image: "./resources/Disney Cover.png",
    excerpt: 'Growing engagement without content acquisition.'
  },
  {
    id: 'byjus-online-classes',
    client: "BYJU'S ONLINE CLASSES",
    title: 'A proficiency-based class plan to lift engagement',
    result: '+9%',
    resultLabel: 'post-sales CSAT',
    type: 'PRODUCT · CUSTOMER SUCCESS',
    image: "./resources/Byju's Classes Cover.png",
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

const byjusExamPrepMarkup = (item: (typeof cases)[number]) => `<nav class='nav'><div class='wrap nav-inner'><a class='brand' href='#top'>Sai Charan<span>.</span></a><a class='back-link' href='#top'>← Back to home</a></div></nav><main class='tracxn-page'><section class='tracxn-hero'><div class='wrap'><a class='case-back-inline' href='#top'>← Selected work</a><div class='context-reference'><div class='context-browser'><div class='context-body'><div class='context-heading-row'><div class='context-heading'><div class='context-eyebrow'>LAUNCH / GTM</div><h1>The mandate:<br>launch a new <em>MBA prep</em> product.</h1><p>Byju’s wanted to take an acquired hybrid learning technology into the Australian MBA test-prep market. The job was to understand the customer, shape the product, set the commercial proposition, and build the launch plan around a 1% market-share ambition.</p></div><div class='context-rail'><span class='context-rail-label'>BYJU’S EXAM PREP</span><div class='context-rail-rule'></div><span>NEW PRODUCT<br>NEW MARKET<br>NEW GTM</span></div></div><div class='context-four'><div class='context-four-item'><div class='context-step'>01<span>→</span></div><div class='context-icon'>◉</div><h3>THE<br>PRODUCT</h3><p>Hybrid hardware + software, interactive AI guidance and Ivy League-developed content.</p></div><div class='context-four-item'><div class='context-step'>02<span>→</span></div><div class='context-icon'>◎</div><h3>THE<br>MARKET</h3><p>Australian MBA test prep. A premium, competitive category with established global players and local tutors.</p></div><div class='context-four-item'><div class='context-step'>03<span>→</span></div><div class='context-icon'>▥</div><h3>THE<br>CUSTOMER</h3><p>Working professionals who need flexible prep, structure, interactive technology and human support.</p></div><div class='context-four-item'><div class='context-step'>04<span>→</span></div><div class='context-icon'>◎</div><h3>MY<br>MANDATE</h3><p>Bridge customer, product and GTM — from research and prioritization through pricing and launch.</p></div></div></div></div></div></section><section class='tracxn-visuals'><div class='wrap'><figure class='tracxn-image'><img src='./resources/Byju%27s%20Exam%20Prep%201.png' alt='Byju’s Exam Prep 1 — The Opportunity' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/Byju%27s%20Exam%20Prep%202.png' alt='Byju’s Exam Prep 2 — The Customer Insight' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/Byju%27s%20Exam%20Prep%203.png' alt='Byju’s Exam Prep 3 — The Customer Definition' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/Byju%27s%20Exam%20Prep%204.png' alt='Byju’s Exam Prep 4 — Turn Insight Into Product' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/Byju%27s%20Exam%20Prep%205.png' alt='Byju’s Exam Prep 5 — Make the Product Buyable' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/Byju%27s%20Exam%20Prep%206.png' alt='Byju’s Exam Prep 6 — Build the Launch Engine' loading='lazy' /></figure><a class='notion-link' href='${caseNotionUrl(item.id)}' target='_blank' rel='noreferrer'>Read the full case study on Notion ↗</a></div></section><section class='tracxn-close'><div class='wrap'><a class='back-link' href='#top'>← Back to home</a></div></section></main>`;

const lucidityMarkup = (item: (typeof cases)[number]) => `<nav class='nav'><div class='wrap nav-inner'><a class='brand' href='#top'>Sai Charan<span>.</span></a><a class='back-link' href='#top'>← Back to home</a></div></nav><main class='tracxn-page'><section class='tracxn-hero'><div class='wrap'><a class='case-back-inline' href='#top'>← Selected work</a><div class='context-reference'><div class='context-browser'><div class='context-windowbar'><span></span><span></span><span></span></div><div class='context-appnav'><div class='context-logo'><span class='context-logo-mark'>◉</span>Lucidity</div><div class='context-navlinks'><span>Work</span><span>About</span><span>Contact</span></div></div><div class='context-body'><div class='context-heading-row'><div class='context-heading'><div class='context-eyebrow'>RETENTION / REVENUE</div><h1>The mandate:<br>make retention a <em>system.</em></h1><p>Lucidity helps enterprises get more out of what they already spend on cloud. I led Customer Success across a ~$5M ARR book of 40–60 enterprise accounts with a small team. The desired range was 85–90% GRR and 120–125% NRR; we started at 75% and 107%.</p></div></div><div class='context-four'><div class='context-four-item'><div class='context-step'>01<span>→</span></div><div class='context-icon'>▤</div><h3>WHAT<br>LUCIDITY IS</h3><p>Cloud infrastructure optimization that helps enterprises reduce waste and keep environments efficient.</p></div><div class='context-four-item'><div class='context-step'>02<span>→</span></div><div class='context-icon'>♧</div><h3>WHERE WE<br>STARTED</h3><p>~$5M ARR across 40–60 enterprise accounts, managed by a small CS team.</p></div><div class='context-four-item'><div class='context-step'>03<span>→</span></div><div class='context-icon'>▥</div><h3>THE<br>PROBLEM</h3><p>75% GRR / 107% NRR. The metrics showed the outcome, not where revenue was leaking upstream.</p></div><div class='context-four-item'><div class='context-step'>04<span>→</span></div><div class='context-icon'>◎</div><h3>MY<br>MANDATE</h3><p>Find the drivers. Fix what CS could influence. Change the operating and commercial model where it needed to change.</p></div></div></div></div></div></section><section class='tracxn-visuals'><div class='wrap lucidity-visual-story'><figure class='tracxn-image'><img src='./resources/Lucidity 1.png' alt='Lucidity 1 — The Reframe' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/Lucidity 2.png' alt='Lucidity 2 — The Driver Map' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/Lucidity 3.png' alt='Lucidity 3 — The ICP Finding' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/Lucidity 4.png' alt='Lucidity 4 — The Operating Model' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/Lucidity 5.png' alt='Lucidity 5 — The Value Reframe' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/Lucidity 6.png' alt='Lucidity 6 — The Result' loading='lazy' /></figure><a class='notion-link' href='${caseNotionUrl(item.id)}' target='_blank' rel='noreferrer'>Read the full case study on Notion ↗</a></div></section><section class='tracxn-close'><div class='wrap'><a class='back-link' href='#top'>← Back to home</a></div></section></main>`;

const caseMarkup = (item: (typeof cases)[number]) => {
  if (item.id === 'lucidity') return lucidityMarkup(item);
  if (item.id === 'byjus-exam-prep') return byjusExamPrepMarkup(item);
  if (item.id !== 'tracxn') return `<nav class='nav'><div class='wrap nav-inner'><a class='brand' href='#top'>Sai Charan<span>.</span></a><a class='back-link' href='#top'>← Back to home</a></div></nav><main class='case-page'><div class='wrap'><a class='case-back-inline' href='#top'>← Selected work</a><div class='case-page-kicker'>CASE STUDY · ${item.type}</div><h1>${item.title}</h1><p class='case-page-lede'>${item.excerpt}</p><div class='placeholder-panel'><span>VISUAL CASE STUDY</span><strong>This is the placeholder page.</strong><p>The visual story for this case will live here.</p><div class='placeholder-rule'></div><a class='notion-link' href='${caseNotionUrl(item.id)}' target='_blank' rel='noreferrer'>Read the detailed case study on Notion ↗</a></div></div></main>`;
  return `<nav class='nav'><div class='wrap nav-inner'><a class='brand' href='#top'>Sai Charan<span>.</span></a><a class='back-link' href='#top'>← Back to home</a></div></nav><main class='tracxn-page'><section class='tracxn-hero'><div class='wrap'><a class='case-back-inline' href='#top'>← Selected work</a><div class='context-reference'><div class='context-browser'><div class='context-windowbar'><span></span><span></span><span></span></div><div class='context-appnav'><div class='context-logo'><span class='context-logo-mark'>◉</span>Tracxn</div><div class='context-navlinks'><span>Work</span><span>About</span><span>Contact</span></div></div><div class='context-body'><div class='context-heading-row'><div class='context-heading'><div class='context-eyebrow'>GTM / ZERO → ONE</div><h1>The mandate:<br>find the next <em>pockets of growth.</em></h1><p>Tracxn is a private-market intelligence platform that helps investors, corporates and advisors understand companies, markets, competitors and people.</p></div></div><div class='context-four'><div class='context-four-item'><div class='context-step'>01<span>→</span></div><div class='context-icon'>▤</div><h3>WHAT<br>TRACXN IS</h3><p>Private-market intelligence on companies, markets, competitors and people.</p></div><div class='context-four-item'><div class='context-step'>02<span>→</span></div><div class='context-icon'>♧</div><h3>WHO IT<br>SERVES</h3><p>Investors (VCs, PEs, analysts), corporates and advisors.</p></div><div class='context-four-item'><div class='context-step'>03<span>→</span></div><div class='context-icon'>▥</div><h3>WHY NEW<br>DEMAND MATTERED</h3><p>Tracxn had gone public with a commitment to keep growing into new markets, new segments and new buyer profiles.</p></div><div class='context-four-item'><div class='context-step'>04<span>→</span></div><div class='context-icon'>◎</div><h3>MY MANDATE</h3><p>Find new pockets of demand.<br><br>New markets.<br>New segments.<br>New buyer profiles.</p></div></div></div></div></div></section><section class='tracxn-visuals'><div class='wrap'><figure class='tracxn-image'><img src='./resources/tracxn-01-discovery.png' alt='Tracxn 1 — Discovery' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/tracxn-02-insight.png' alt='Tracxn 2 — Insight' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/tracxn-03-icp-focus.png' alt='Tracxn 3 — ICP and Focus' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/tracxn-04-where-tracxn-could-win.png' alt='Tracxn 4 — Where Tracxn Could Win' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/tracxn-05-sales-engine.png' alt='Tracxn 5 — The Sales Engine' loading='lazy' /></figure><figure class='tracxn-image'><img src='./resources/tracxn-06-rollout-result.png' alt='Tracxn 6 — Rollout and Result' loading='lazy' /></figure></div></section><section class='tracxn-close'><div class='wrap'><a class='notion-link' href='${caseNotionUrl(item.id)}' target='_blank' rel='noreferrer'>Read the full case study on Notion ↗</a><a class='back-link' href='#top'>← Back to home</a></div></section></main>`;
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