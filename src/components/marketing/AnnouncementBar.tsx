import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/marketing/Container";
import { Badge } from "@/components/ui/badge";

export function AnnouncementBar() {
	return (
		<a
			href={siteConfig.announcement.href}
			className="sticky top-0 z-50 block bg-primary text-primary-foreground"
		>
			<Container className="flex flex-wrap items-center justify-center gap-2 py-5 text-center">
				<Badge className="bg-background text-foreground">New</Badge>
				<span className="text-base font-semibold sm:text-lg">
					2026 Founding Clients Bonus: 
				</span>
				<span className="text-base sm:text-lg">
					See if your property qualifies →
				</span>
			</Container>
		</a>
	);
}
