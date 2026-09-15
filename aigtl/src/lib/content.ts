export type PillarSlug = 'eu-ai-act' | 'workshop' | 'ai-alapvizsga';

export type Pillar = {
	slug: PillarSlug;
	href: string;
	eyebrow: string;
	title: string;
	audience: string;
	promise: string;
	tone: 'trust' | 'action' | 'speed';
	cta: { label: string; href: string };
};

const euAiActLink =
	'<a class="link-brand" href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng" target="_blank" rel="noopener">EU AI Act</a>';
const neumannLink =
	'<a class="link-brand" href="https://neum.hu/" target="_blank" rel="noopener">Neumann</a>';
const neumannPlatformLink =
	'<a class="link-brand" href="https://neum.hu/" target="_blank" rel="noopener">Neumann Technológiai Platform</a>';
const sensaLink =
	'<a class="link-brand" href="https://sensa.hu/" target="_blank" rel="noopener">Sensa</a>';

export const pillars: Pillar[] = [
	{
		slug: 'eu-ai-act',
		href: '/eu-ai-act',
		eyebrow: '1. pillér · Governance',
		title: 'EU AI Act megfelelőség és vállalati AI governance',
		audience: 'CEO · CFO · jogtanácsos · CIO · CISO',
		promise:
			'A jogi bizonytalanságból auditálható kontrollrendszert építünk: AI‑leltár, szabályzat, Shadow AI audit, licencoptimalizálás.',
		tone: 'trust',
		cta: { label: 'Ingyenes AI‑kockázati konzultáció', href: '/kapcsolat?tema=governance' }
	},
	{
		slug: 'workshop',
		href: '/kozepvezetoi-workshop',
		eyebrow: '2. pillér · Adopció',
		title: 'Középvezetői AI workshop és belső use‑case tervezés',
		audience: 'COO · divízió‑ és csoportvezetők',
		promise:
			'A középvezetői ellenállást partnerségre váltjuk: konkrét use‑case‑ek, ROI‑alapú rangsor, AI Champion program.',
		tone: 'action',
		cta: { label: 'Foglalj workshopot a csapatodnak', href: '/kapcsolat?tema=workshop' }
	},
	{
		slug: 'ai-alapvizsga',
		href: '/ai-alapvizsga',
		eyebrow: '3. pillér · AI Literacy',
		title: 'Vállalati AI alapvizsga és munkavállalói AI műveltség',
		audience: 'CHRO · HRBP · L&D vezetők',
		promise: `Az ${euAiActLink} 4. cikkét letesszük az asztalra: ingyenes ${neumannLink} alapkurzus, prémium menedzsment és HR dashboard.`,
		tone: 'speed',
		cta: { label: 'Kérj HR konzultációt', href: '/kapcsolat?tema=hr' }
	}
];

export const trustItems = [
	`${euAiActLink} (2024/1689) hivatkozási alap`,
	`${neumannPlatformLink} partner`,
	`${sensaLink} szervezetfejlesztési módszertan`,
	'Magyar középvállalati referenciák'
];
