import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function FreeResources() {
	return (
		<Section id="resources">
			<Container className="space-y-6">
				<div className="space-y-3 text-center">
					<h2 className="section-title">
						<span>Free </span>
						<span className="text-primary">Resources</span>
					</h2>
					<p className="section-subtitle font-light">
						{siteConfig.training.intro}
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{siteConfig.training.cards.map((card) => (
						<Card key={card.title} className="relative card-hover text-center">
							<Badge
								variant={card.bannerLabel === "COMING SOON" ? "secondary" : "destructive"}
								className="absolute right-4 top-4 whitespace-nowrap"
							>
								{card.bannerLabel}
							</Badge>
							<CardContent className="flex flex-col items-center gap-4 pt-12">
								<a
									href={card.href}
									aria-label={`Read ${card.title}`}
									target="_blank"
									rel="noreferrer"
									className="flex h-32 w-32 items-center justify-center overflow-visible rounded-full bg-foreground"
								>
									<Image
										src={card.imageSrc}
										alt={`${card.title} placeholder`}
										width={120}
										height={120}
										className="h-24 w-24 object-contain"
									/>
								</a>
								<h3 className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.08em] text-foreground sm:text-base">
									{card.title}
								</h3>
							</CardContent>
							<CardFooter className="justify-center pt-0">
								<Button
									href={card.href}
									target="_blank"
									rel="noreferrer"
									size="lg"
								>
									{card.ctaLabel}
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</Container>
		</Section>
	);
}
