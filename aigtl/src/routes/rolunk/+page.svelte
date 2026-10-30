<script lang="ts">
	import { base, resolve } from '$app/paths';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';
</script>

<svelte:head>
	<title>Rólunk | AIGTL</title>
	<meta
		name="description"
		content="Az AIGTL az AI-governance, adopció és képzés hármasát egyben kezelő magyar szakértői csapat. 50-500 fős cégekre szabva."
	/>
</svelte:head>

<section class="relative isolate overflow-hidden" data-circuit-hero style="background-color: var(--color-bg); color: var(--color-text);">
	<CircuitBackdrop variant="about" />
	<div class="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-[0.2em] uppercase" style="color: var(--color-accent);">Rólunk</div>
			<h1 class="mt-5 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
				Biztonságos AI-használat.<br>Felkészült vezetők.<br>Mérhető üzleti eredmények.
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style="color: var(--color-text-muted);">
				Az AIGTL az AI bevezetés három kritikus szeletét (jog, szervezet, ember) egyben kezelő
				csapat. Nem technológiát adunk el, hanem strukturált, dokumentálható eredményt.
			</p>
		</div>
		<figure class="mx-auto w-full max-w-md overflow-hidden rounded-3xl border shadow-xl lg:ml-auto" style="border-color: var(--color-border); background-color: var(--color-surface); box-shadow: 0 24px 60px var(--color-shadow);">
			<img
				src={resolve('/AIGTL.png')}
				alt="AIGTL"
				class="block h-auto w-full object-contain"
				fetchpriority="high"
			/>
		</figure>
	</div>
</section>

<TrustBar variant="light" />

<section class="border-t" style="border-color: var(--color-border); background-color: var(--color-surface-alt); color: var(--color-text);">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest uppercase" style="color: var(--color-text-muted);">Szakértőink</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
				Szervezeti és AI governance szakértelem
			</h2>
			<p class="mt-4 text-base leading-relaxed" style="color: var(--color-text-muted);">
				Az AIGTL a Sensa és a ReadimConsult partnerségében kapcsolja össze a változáskezelést és a műszaki, szabályozási felkészültséget.
			</p>
		</div>

		<div class="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
			<article class="overflow-hidden rounded-2xl border" style="border-color: var(--color-border); background-color: var(--color-surface);">
				<img
					src={`${base}/VorosAkos.jpg`}
					alt="Vörös Ákos portréja"
					width="861"
					height="1291"
					loading="lazy"
					class="block aspect-[4/5] w-full object-cover object-[center_24%]"
				/>
				<div class="p-6">
					<h3 class="text-lg font-semibold tracking-tight">Vörös Ákos</h3>
					<p class="mt-2 text-sm leading-relaxed" style="color: var(--color-text-muted);">
						AI governance és vállalati AI-transzformációs szakértő · ReadimConsult
					</p>
				</div>
			</article>
			<article class="overflow-hidden rounded-2xl border" style="border-color: var(--color-border); background-color: var(--color-surface);">
				<img
					src={`${base}/placeholder-person.png`}
					alt="Makula Tibor portréjának helye"
					width="861"
					height="1291"
					loading="lazy"
					class="block aspect-[4/5] w-full object-cover object-center"
				/>
				<div class="p-6">
					<h3 class="text-lg font-semibold tracking-tight">Makula Tibor</h3>
					<p class="mt-2 text-sm leading-relaxed" style="color: var(--color-text-muted);">
						Szenior szervezetfejlesztési és vezetőfejlesztési tanácsadó
					</p>
				</div>
			</article>
		</div>
	</div>
</section>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
		<div>
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">Küldetés</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)]">
				Az AI bevezetés kockázatát mérhető vállalati eredménnyé alakítjuk.
			</h2>
			<p class="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
				A 50-500 fős magyar cégek olyan partnert érdemelnek, aki ismeri a helyi jogi
				környezetet, érti a középvezetői dinamikát, és nem próbál egy nemzetközi termékkatalógust
				rájuk erőltetni. Az AIGTL ilyen partner.
			</p>
		</div>

		<div>
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">Módszertan</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)]">
				Három szintű pillér modell, összekapcsolt eredményekkel.
			</h2>
			<p class="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
				A governance, az operatív adopció és a HR AI-műveltség külön-külön is szolgálható,
				de a legnagyobb ROI akkor jelenik meg, amikor ezek egy stratégiai keretben mozognak.
			</p>
		</div>
	</div>

	<div class="mt-16 grid gap-6 md:grid-cols-3">
		<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-8">
			<div class="text-3xl font-semibold tracking-tight text-[var(--color-text)]">Jog</div>
			<p class="mt-3 text-sm text-[var(--color-text-muted)]">
				<a
					class="link-brand"
					href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
					target="_blank"
					rel="noopener">EU AI Act</a>, szabályzatok, kockázati besorolás, licenc-governance. Vezetői
				audit-szintű dokumentumokat állítunk elő.
			</p>
		</div>
		<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-8">
			<div class="text-3xl font-semibold tracking-tight text-[var(--color-text)]">Szervezet</div>
			<p class="mt-3 text-sm text-[var(--color-text-muted)]">
				Változásvezetés, workshop, use-case tervezés, AI Champion program. A csapat bevonása
				nélkül nincs valós ROI.
			</p>
		</div>
		<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-8">
			<div class="text-3xl font-semibold tracking-tight text-[var(--color-text)]">Ember</div>
			<p class="mt-3 text-sm text-[var(--color-text-muted)]">
				AI-műveltség, HR folyamatok, digitális iker, tehermentesítés. A dolgozók félelmét
				kompetenciára fordítjuk.
			</p>
		</div>
	</div>
</section>

<section class="border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest text-[var(--color-text-subtle)] uppercase">Alapelveink</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
				Négy elv, amit sosem sértünk meg.
			</h2>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2">
			<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
				<h3 class="text-base font-semibold text-[var(--color-text)]">Nem hype-oljuk az AI-t</h3>
				<p class="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
					Nem ígérünk „forradalmat”. Konkrét folyamatokat mérünk és javítunk, dokumentált
					ROI-val.
				</p>
			</div>
			<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
				<h3 class="text-base font-semibold text-[var(--color-text)]">A megfelelés nem opció</h3>
				<p class="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
					Minden bevezetést az <a
						class="link-brand"
						href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
						target="_blank"
						rel="noopener">EU AI Act</a> keretében gondolunk végig. A governance nem
					utólagos foltozás.
				</p>
			</div>
			<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
				<h3 class="text-base font-semibold text-[var(--color-text)]">Emberközpontú változás</h3>
				<p class="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
					A dolgozói félelmet nem tagadjuk. Kezeljük, kommunikáljuk, és partnerségre
					váltjuk.
				</p>
			</div>
			<div class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
				<h3 class="text-base font-semibold text-[var(--color-text)]">Költséghatékonyság</h3>
				<p class="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
					Ingyenes hazai eszközökre (például <a
						class="link-brand"
						href="https://neum.hu/"
						target="_blank"
						rel="noopener">Neumann Platform</a>) építünk, ahol lehet. Nem
					licencdíjból élünk.
				</p>
			</div>
		</div>
	</div>
</section>

<Cta
	title="Beszéljünk arról, hol tart most a céged."
	description="30 perc alatt megnézzük együtt, melyik pillérből érdemes indulni, és milyen konkrét lépések adnak 90 napon belüli látható eredményt."
	primaryLabel="Konzultáció foglalása"
	primaryHref={resolve('/kapcsolat')}
	secondaryLabel="Nézd meg a pilléreket"
	secondaryHref={resolve('/#pillars')}
/>
