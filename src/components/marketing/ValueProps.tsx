import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Card, CardContent } from "@/components/ui/card";

export function ValueProps() {
	return (
		<Section id="management">
			<Container className="space-y-6">
				<div className="space-y-3 text-center">
					<h2 className="section-title">
						<span>About </span>
						<span className="text-primary">Cloverbloom</span>
					</h2>
					<p className="section-subtitle font-light">
						{siteConfig.about.intro.split("Cloverbloom")[0]}
						<span className="font-semibold text-foreground">Cloverbloom</span>
						{siteConfig.about.intro.split("Cloverbloom")[1] ?? ""}
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{siteConfig.about.values.map((value) => (
						<Card key={value.title} className="card-hover text-center">
							<CardContent className="p-6">
								<h3 className="whitespace-nowrap text-lg font-bold text-foreground sm:text-xl">
									{value.title}
								</h3>
								<p className="mt-3 text-sm text-muted-foreground sm:text-base">
									{value.body}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</Container>
		</Section>
	);
}
