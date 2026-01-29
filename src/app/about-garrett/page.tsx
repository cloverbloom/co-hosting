import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/marketing/AnnouncementBar";
import { Container } from "@/components/marketing/Container";
import { Footer } from "@/components/marketing/Footer";
import { Navbar } from "@/components/marketing/Navbar";
import { Section } from "@/components/marketing/Section";

export const metadata: Metadata = {
	title: "About Garrett | Cloverbloom Co-hosting",
	description: "Learn more about Garrett Nelson and Cloverbloom Co-hosting.",
};

export default function AboutGarrettPage() {
	return (
		<>
			<AnnouncementBar />
			<Navbar />
			<main>
				<Section>
					<Container className="space-y-6 text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
							About Garrett
						</p>
						<h1 className="text-3xl font-semibold uppercase tracking-[var(--tracking-tight)] sm:text-4xl lg:text-5xl">
							Coming Soon
						</h1>
						<p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
							This page will be updated with Garrett&rsquo;s background, operating
							philosophy, and full biography. Check back soon.
						</p>
					</Container>
				</Section>
			</main>
			<Footer />
		</>
	);
}
