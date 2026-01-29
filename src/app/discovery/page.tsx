import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/marketing/Button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";

export const metadata: Metadata = {
	title: "Discovery Call | Cloverbloom Co-hosting",
	description: "Book a discovery call with Cloverbloom Co-hosting.",
};

export default function DiscoveryPage() {
	return (
		<main className="bg-background text-foreground">
			<Section className="pt-12 sm:pt-16 lg:pt-20">
				<Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-6">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
							Discovery Call
						</p>
						<h1 className="text-4xl font-extrabold uppercase tracking-[var(--tracking-tight)] sm:text-5xl lg:text-6xl">
							Are you leaving revenue on the table?
						</h1>
						<p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
							Book a 1:1 listing review to identify operational leaks, pricing
							gaps, and high-impact upgrades that turn your rental into a durable,
							low-touch asset.
						</p>
						<div className="flex flex-wrap gap-3">
							<Button href="#schedule" size="lg">
								Schedule My Call
							</Button>
							<Button variant="secondary" href="#fit" size="lg">
								See If I Qualify
							</Button>
						</div>
						<div className="flex flex-wrap gap-3">
							<Badge variant="outline">Owner-first recommendations</Badge>
							<Badge variant="outline">No-pressure assessment</Badge>
							<Badge variant="outline">Clear next steps</Badge>
						</div>
					</div>
					<Card className="card-hover">
						<CardContent className="p-6">
						<div className="aspect-video w-full overflow-hidden rounded-[var(--radius-sm)] bg-muted">
							<Image
								src="/placeholders/hero.svg"
								alt="Listing review preview"
								width={960}
								height={540}
								className="h-full w-full object-contain"
							/>
						</div>
							<p className="mt-4 text-sm text-muted-foreground">
								Preview of the evaluation framework used on every call.
							</p>
						</CardContent>
					</Card>
				</Container>
			</Section>

			<Section className="pt-0">
				<Container className="space-y-5">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
						Trusted by detail-obsessed owners
					</p>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{["Owner Referrals", "5-Star Operators", "Design-Forward", "Performance First"].map(
							(label) => (
								<Card key={label} className="text-center">
									<CardContent className="px-4 py-6 text-sm font-semibold uppercase tracking-[0.12em]">
										{label}
									</CardContent>
								</Card>
							),
						)}
					</div>
				</Container>
			</Section>

			<Section>
				<Container className="space-y-6">
					<div className="space-y-2">
						<h2 className="section-title">
							What you get on the call
						</h2>
						<p className="section-subtitle">
							Three high-impact outcomes tailored to your listing and market.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{[
							{
								label: "#1",
								title: "Listing performance audit",
								desc: "Pinpoint pricing gaps, conversion leaks, and operational friction.",
							},
							{
								label: "#2",
								title: "Market-ready playbook",
								desc: "Get prioritized actions that improve occupancy and nightly rate.",
							},
							{
								label: "#3",
								title: "Execution roadmap",
								desc: "Leave with 3-5 tactical next steps you can act on immediately.",
							},
						].map((item) => (
							<Card key={item.title} className="card-hover">
								<CardContent className="p-6">
									<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
										{item.label}
									</p>
									<h3 className="mt-3 text-lg font-semibold uppercase tracking-[0.08em]">
										{item.title}
									</h3>
									<p className="mt-3 text-sm text-muted-foreground sm:text-base">
										{item.desc}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="pt-2">
						<Button href="#schedule" size="lg">
							Book My Strategy Session
						</Button>
					</div>
				</Container>
			</Section>

			<Section>
				<Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
					<div className="space-y-2">
						<h2 className="section-title">
							What happens during the call
						</h2>
						<p className="section-subtitle">
							No fluff. We audit, prioritize, and map the highest ROI actions for
							your listing in a single session.
						</p>
					<div className="space-y-4">
						<Card className="card-hover">
							<CardContent className="p-4">
								<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
									Phase 1
								</p>
								<p className="mt-2 text-base font-semibold">
									Listing + market review
								</p>
							</CardContent>
						</Card>
						<Card className="card-hover">
							<CardContent className="p-4">
								<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
									Phase 2
								</p>
								<p className="mt-2 text-base font-semibold">
									Gap analysis + prioritization
								</p>
							</CardContent>
						</Card>
						<Card className="card-hover">
							<CardContent className="p-4">
								<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
									Phase 3
								</p>
								<p className="mt-2 text-base font-semibold">
									Execution roadmap + next steps
								</p>
							</CardContent>
						</Card>
					</div>
					</div>
					<Card className="card-hover">
						<CardContent className="p-6">
							<div className="grid gap-4">
								<div className="rounded-[var(--radius-sm)] bg-muted p-6 text-sm text-muted-foreground">
									You’ll walk away with clear, owner-specific actions you can implement
									immediately.
								</div>
								<div className="rounded-[var(--radius-sm)] bg-muted p-6 text-sm text-muted-foreground">
									If it makes sense, we outline how Cloverbloom could execute the plan
									for you.
								</div>
							</div>
						</CardContent>
					</Card>
				</Container>
			</Section>

			<Section id="fit">
				<Container className="space-y-3">
					<h2 className="section-title">
						Who this is for
					</h2>
					<div className="grid gap-6 md:grid-cols-2">
						<Card className="card-hover">
							<CardContent className="p-6">
								<h3 className="text-base font-semibold uppercase tracking-[0.12em]">
									Great fit if you:
								</h3>
								<ul className="mt-4 space-y-2 text-sm text-muted-foreground sm:text-base">
									<li>Own a short-term rental with stable occupancy</li>
									<li>Want a data-driven plan to improve revenue</li>
									<li>Prefer hands-on execution over theory</li>
								</ul>
							</CardContent>
						</Card>
						<Card className="card-hover">
							<CardContent className="p-6">
								<h3 className="text-base font-semibold uppercase tracking-[0.12em]">
									Not ready if:
								</h3>
								<ul className="mt-4 space-y-2 text-sm text-muted-foreground sm:text-base">
									<li>You&rsquo;re still deciding to launch</li>
									<li>You need a DIY coaching program</li>
									<li>You prefer fully passive ownership</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</Container>
			</Section>

			<Section>
				<Container className="space-y-3 text-center">
					<h2 className="section-title">
						Investment
					</h2>
					<p className="text-3xl font-extrabold text-primary sm:text-4xl">
						$0 for qualified owners
					</p>
					<p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
						We only accept a limited number of listings so the review stays
						highly specific and actionable.
					</p>
					<Button href="#schedule" size="lg">
						Reserve My Spot
					</Button>
				</Container>
			</Section>

			<Section id="schedule">
				<Container className="space-y-3">
					<h2 className="section-title">
						Schedule your call
					</h2>
					<p className="section-subtitle">
						Select a time that works for you. We’ll confirm details by email.
					</p>
					<Card>
						<CardContent className="p-8 text-center text-sm text-muted-foreground">
							Calendar embed placeholder
						</CardContent>
					</Card>
				</Container>
			</Section>
		</main>
	);
}
