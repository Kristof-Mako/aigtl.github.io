<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="site-footer mt-24 border-t">
	<div class="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
		<div class="lg:col-span-2">
			<div class="flex items-center gap-3">
				<img
					src={resolve('/AIGTL-full.png')}
					alt="AIGTL"
					class="brand-mark h-9 w-9 rounded-lg object-contain"
				/>
				<div class="flex flex-col leading-tight">
					<span class="brand-name text-sm font-semibold tracking-tight">AIGTL</span>
					<span class="brand-subtitle text-xs">AI Governance, Transformation &amp; Labs</span>
				</div>
			</div>
			<p class="footer-copy mt-6 max-w-md text-sm leading-relaxed">
				Biztonságos AI-használat. Felkészült vezetők. Mérhető üzleti eredmények.
			</p>
			<p class="footer-copy-muted mt-3 max-w-md text-sm leading-relaxed">
				Felelős AI-használat és szervezeti átalakulás
			</p>
		</div>

		<div>
			<h3 class="footer-heading text-xs font-semibold tracking-wider uppercase">Pillérek</h3>
			<ul class="mt-4 space-y-2 text-sm">
				<li><a href={resolve('/eu-ai-act')} class="footer-link">EU AI Act &amp; governance</a></li>
				<li>
					<a href={resolve('/kozepvezetoi-workshop')} class="footer-link">Középvezetői workshop</a>
				</li>
				<li>
					<a href={resolve('/ai-alapvizsga')} class="footer-link">Vállalati AI alapvizsga (HR)</a>
				</li>
				<li><a href={`${resolve('/')}#vezetoi-workshop`} class="footer-link">Vezetői workshop</a></li>
				<li><a href={resolve('/tudastar')} class="footer-link">Tudástár</a></li>
			</ul>
		</div>

		<div>
			<h3 class="footer-heading text-xs font-semibold tracking-wider uppercase">Cég</h3>
			<ul class="mt-4 space-y-2 text-sm">
				<li><a href={resolve('/rolunk')} class="footer-link">Rólunk</a></li>
				<li><a href={resolve('/kapcsolat')} class="footer-link">Kapcsolat</a></li>
				<li><a href={resolve('/adatkezeles')} class="footer-link">Adatkezelés</a></li>
			</ul>
		</div>
	</div>

	<div class="footer-bottom border-t">
		<div
			class="footer-bottom-content mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs sm:flex-row sm:items-center lg:px-10"
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

<style>
	.site-footer {
		border-color: var(--color-border);
		background-color: var(--color-primary);
		color: var(--color-on-primary);
	}
	.brand-mark {
		background-color: color-mix(in srgb, var(--color-on-primary) 10%, var(--color-transparent));
		color: var(--color-on-primary);
	}
	.brand-name { color: var(--color-on-primary); }
	.brand-subtitle,
	.footer-heading,
	.footer-bottom-content,
	.footer-copy-muted { color: color-mix(in srgb, var(--color-on-primary) 72%, var(--color-primary)); }
	.footer-copy,
	.footer-link { color: color-mix(in srgb, var(--color-on-primary) 86%, var(--color-primary)); }
	.footer-link:hover { color: var(--color-on-primary); }
	.footer-bottom { border-color: color-mix(in srgb, var(--color-on-primary) 5%, var(--color-transparent)); }
</style>
