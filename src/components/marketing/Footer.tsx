import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { ContactDialog } from "@/components/marketing/ContactDialog";
import { Container } from "@/components/marketing/Container";

export function Footer() {
	return (
		<footer className="bg-primary py-12 text-primary-foreground">
			<Container className="space-y-8">
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-start md:gap-8">
					<span className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
						<Image
							src="/placeholders/logo-white.svg"
							alt="Cloverbloom logo"
							width={28}
							height={28}
						/>
						{siteConfig.brand}
					</span>
					<nav className="flex flex-wrap gap-4 text-base font-medium tracking-normal text-primary-foreground/80">
						{siteConfig.navLinks.map((link) =>
							link.label === "Contact" ? (
								<ContactDialog
									key={link.label}
									triggerLabel="Contact"
									triggerClassName="bg-transparent text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground"
								/>
							) : (
								<a
									key={link.label}
									href={link.href}
									className="text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground"
								>
									{link.label}
								</a>
							),
						)}
					</nav>
				</div>
				<div className="flex justify-center text-base font-normal tracking-normal text-primary-foreground/80">
					{siteConfig.footer.utilityLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground"
						>
							{link.label}
						</a>
					))}
				</div>
				<p className="text-xs leading-relaxed text-primary-foreground/80">
					{siteConfig.footer.disclaimer}
				</p>
			</Container>
		</footer>
	);
}
