<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="mt-24 border-t border-ink-100 bg-ink-950 text-ink-200">
	<div class="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
		<div class="lg:col-span-2">
			<div class="flex items-center gap-3">
				<span
					class="grid h-9 w-9 place-items-center rounded-lg bg-white/10 font-semibold tracking-tight text-white"
					>A</span
				>
				<div class="flex flex-col leading-tight">
					<span class="text-sm font-semibold tracking-tight text-white">AIGTL</span>
					<span class="text-xs text-ink-400">AI Governance, Transformation &amp; Lab</span>
				</div>
			</div>
			<p class="mt-6 max-w-md text-sm leading-relaxed text-ink-300">
				Az AIGTL az a megbízható partner, aki a mesterséges intelligencia bevezetésének jogi,
				szervezeti és emberi kockázatát strukturált, bizonyítható eredménnyé alakítja. 50–500 fős
				vállalatoknak, magyarul.
			</p>
		</div>

		<div>
			<h3 class="text-xs font-semibold tracking-wider text-ink-400 uppercase">Pillérek</h3>
			<ul class="mt-4 space-y-2 text-sm">
				<li><a href={resolve('/eu-ai-act')} class="hover:text-white">EU AI Act &amp; governance</a></li>
				<li>
					<a href={resolve('/kozepvezetoi-workshop')} class="hover:text-white">Középvezetői workshop</a>
				</li>
				<li>
					<a href={resolve('/ai-alapvizsga')} class="hover:text-white">Vállalati AI alapvizsga (HR)</a>
				</li>
				<li><a href={resolve('/tudastar')} class="hover:text-white">Tudástár</a></li>
			</ul>
		</div>

		<div>
			<h3 class="text-xs font-semibold tracking-wider text-ink-400 uppercase">Cég</h3>
			<ul class="mt-4 space-y-2 text-sm">
				<li><a href={resolve('/rolunk')} class="hover:text-white">Rólunk</a></li>
				<li><a href={resolve('/kapcsolat')} class="hover:text-white">Kapcsolat</a></li>
				<li><a href={resolve('/adatkezeles')} class="hover:text-white">Adatkezelés</a></li>
			</ul>
		</div>
	</div>

	<div class="border-t border-white/5">
		<div
			class="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-ink-400 sm:flex-row sm:items-center lg:px-10"
		>
			<p>© {new Date().getFullYear()} AIGTL. Minden jog fenntartva.</p>
			<p>
				Hivatkozási keret: <a
					class="link-brand-invert"
					href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
					target="_blank"
					rel="noopener">EU AI Act</a
				> (Regulation (EU) 2024/1689). A tartalom nem minősül konkrét
				jogi tanácsadásnak.
			</p>
		</div>
	</div>
</footer>
