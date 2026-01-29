import { AnnouncementBar } from "@/components/marketing/AnnouncementBar";
import { Footer } from "@/components/marketing/Footer";
import { Hero } from "@/components/marketing/Hero";
import { Navbar } from "@/components/marketing/Navbar";
import { FaqSection } from "@/components/marketing/FaqSection";
import { ProfileSection } from "@/components/marketing/ProfileSection";
import { FreeResources } from "@/components/marketing/FreeResources";
import { ValueProps } from "@/components/marketing/ValueProps";

export function MarketingPage() {
	return (
		<>
			<AnnouncementBar />
			<Navbar />
			<main>
				<Hero />
				<ValueProps />
				<ProfileSection imageSrc="/placeholders/portrait-meet.svg" dark />
				<FreeResources />
				<FaqSection />
			</main>
			<Footer />
		</>
	);
}
