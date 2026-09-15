<script lang="ts">
	import { resolve } from '$app/paths';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import Cta from '$lib/components/Cta.svelte';
</script>

<svelte:head>
	<title>Rólunk | AIGTL</title>
	<meta
		name="description"
		content="Az AIGTL az AI‑governance, adopció és képzés hármasát egyben kezelő magyar szakértői csapat. 50–500 fős cégekre szabva."
	/>
</svelte:head>

<section class="bg-ink-950 text-white">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-[0.2em] text-accent-300 uppercase">Rólunk</div>
			<h1 class="mt-5 text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
				Nem AI‑ügynökség vagyunk. Vezetői kockázat‑partner.
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 md:text-xl">
				Az AIGTL az AI bevezetés három kritikus szeletét (jog, szervezet, ember) egyben kezelő
				csapat. Nem technológiát adunk el, hanem strukturált, dokumentálható eredményt.
			</p>
		</div>
	</div>
</section>

<TrustBar variant="light" />

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
	<div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
		<div>
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">Küldetés</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900">
				Az AI bevezetés kockázatát mérhető vállalati eredménnyé alakítjuk.
			</h2>
			<p class="mt-4 text-base leading-relaxed text-ink-600">
				A 50–500 fős magyar cégek olyan partnert érdemelnek, aki ismeri a helyi jogi
				környezetet, érti a középvezetői dinamikát, és nem próbál egy nemzetközi termékkatalógust
				rájuk erőltetni. Az AIGTL ilyen partner.
			</p>
		</div>

		<div>
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">Módszertan</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900">
				Három szintű pillér modell, összekapcsolt eredményekkel.
			</h2>
			<p class="mt-4 text-base leading-relaxed text-ink-600">
				A governance, az operatív adopció és a HR AI‑műveltség külön‑külön is szolgálható,
				de a legnagyobb ROI akkor jelenik meg, amikor ezek egy stratégiai keretben mozognak.
			</p>
		</div>
	</div>

	<div class="mt-16 grid gap-6 md:grid-cols-3">
		<div class="rounded-2xl border border-ink-100 bg-ink-50/60 p-8">
			<div class="text-3xl font-semibold tracking-tight text-ink-900">Jog</div>
			<p class="mt-3 text-sm text-ink-700">
				<a
					class="link-brand"
					href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
					target="_blank"
					rel="noopener">EU AI Act</a>, szabályzatok, kockázati besorolás, licenc‑governance. Vezetői
				audit‑szintű dokumentumokat állítunk elő.
			</p>
		</div>
		<div class="rounded-2xl border border-ink-100 bg-ink-50/60 p-8">
			<div class="text-3xl font-semibold tracking-tight text-ink-900">Szervezet</div>
			<p class="mt-3 text-sm text-ink-700">
				Változásvezetés, workshop, use‑case tervezés, AI Champion program. A csapat bevonása
				nélkül nincs valós ROI.
			</p>
		</div>
		<div class="rounded-2xl border border-ink-100 bg-ink-50/60 p-8">
			<div class="text-3xl font-semibold tracking-tight text-ink-900">Ember</div>
			<p class="mt-3 text-sm text-ink-700">
				AI‑műveltség, HR folyamatok, digitális iker, tehermentesítés. A dolgozók félelmét
				kompetenciára fordítjuk.
			</p>
		</div>
	</div>
</section>

<section class="border-t border-ink-100 bg-ink-50/40">
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
		<div class="max-w-3xl">
			<div class="text-xs font-semibold tracking-widest text-ink-500 uppercase">Alapelveink</div>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
				Négy elv, amit sosem sértünk meg.
			</h2>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2">
			<div class="rounded-xl border border-ink-100 bg-white p-6">
				<h3 class="text-base font-semibold text-ink-900">Nem hype‑oljuk az AI‑t</h3>
				<p class="mt-2 text-sm leading-relaxed text-ink-600">
					Nem ígérünk „forradalmat”. Konkrét folyamatokat mérünk és javítunk, dokumentált
					ROI‑val.
				</p>
			</div>
			<div class="rounded-xl border border-ink-100 bg-white p-6">
				<h3 class="text-base font-semibold text-ink-900">A megfelelés nem opció</h3>
				<p class="mt-2 text-sm leading-relaxed text-ink-600">
					Minden bevezetést az <a
						class="link-brand"
						href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
						target="_blank"
						rel="noopener">EU AI Act</a> keretében gondolunk végig. A governance nem
					utólagos foltozás.
				</p>
			</div>
			<div class="rounded-xl border border-ink-100 bg-white p-6">
				<h3 class="text-base font-semibold text-ink-900">Emberközpontú változás</h3>
				<p class="mt-2 text-sm leading-relaxed text-ink-600">
					A dolgozói félelmet nem tagadjuk. Kezeljük, kommunikáljuk, és partnerségre
					váltjuk.
				</p>
			</div>
			<div class="rounded-xl border border-ink-100 bg-white p-6">
				<h3 class="text-base font-semibold text-ink-900">Költséghatékonyság</h3>
				<p class="mt-2 text-sm leading-relaxed text-ink-600">
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
