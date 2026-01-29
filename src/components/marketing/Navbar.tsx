import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { ContactDialog } from "@/components/marketing/ContactDialog";
import { Container } from "@/components/marketing/Container";

export function Navbar() {
	return (
		<header className="bg-foreground text-background">
			<Container className="flex items-center justify-between py-5">
				<div className="flex items-center gap-10">
					<a
						href="https://cloverbloom.co"
						className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-background"
					>
						<Image
							src="/placeholders/logo-white.svg"
							alt="Cloverbloom logo"
							width={28}
							height={28}
						/>
						<span>{siteConfig.brand}</span>
					</a>
					<nav className="hidden items-center gap-6 text-base font-medium tracking-normal md:flex">
						{siteConfig.navLinks.map((link) =>
							link.label === "Contact" ? (
								<ContactDialog
									key={link.label}
									triggerLabel="Contact"
									triggerClassName="bg-transparent text-background/80 transition-colors duration-200 hover:text-background"
								/>
							) : (
								<a
									key={link.label}
									href={link.href}
									className="text-background/80 transition-colors duration-200 hover:text-background"
								>
									{link.label}
								</a>
							),
						)}
					</nav>
				</div>
				<details className="relative md:hidden">
					<summary className="cursor-pointer text-base font-normal tracking-normal text-background">
						Menu
					</summary>
					<div className="absolute right-0 mt-3 w-56 rounded-[var(--radius-sm)] border border-white/10 bg-foreground p-4 shadow-sm">
						<nav className="flex flex-col gap-3 text-base font-normal tracking-normal text-background/80">
							{siteConfig.navLinks.map((link) =>
								link.label === "Contact" ? (
									<ContactDialog
										key={link.label}
										triggerLabel="Contact"
										triggerClassName="bg-transparent text-left transition-colors duration-200 hover:text-background"
									/>
								) : (
									<a
										key={link.label}
										href={link.href}
										className="transition-colors duration-200 hover:text-background"
									>
										{link.label}
									</a>
								),
							)}
						</nav>
					</div>
				</details>
			</Container>
		</header>
	);
}
