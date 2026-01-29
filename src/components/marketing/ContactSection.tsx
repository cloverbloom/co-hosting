import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/marketing/Button";
import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";

export function ContactSection() {
	return (
		<Section id="contact" className="border-t border-border">
			<Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
				<div className="max-w-xl space-y-3">
					<h2 className="text-2xl font-semibold uppercase tracking-[var(--tracking-wide)] sm:text-3xl">
						{siteConfig.contact.title}
					</h2>
					<p className="text-base text-muted-foreground sm:text-lg">
						{siteConfig.contact.body}
					</p>
				</div>
				<Button href={siteConfig.contact.cta.href} size="lg">
					{siteConfig.contact.cta.label}
				</Button>
			</Container>
		</Section>
	);
}
