import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/marketing/Button";
import { Container } from "@/components/marketing/Container";
import { Card, CardContent } from "@/components/ui/card";

export function Hero() {
	return (
		<section className="pt-12 pb-0 sm:pt-16 sm:pb-0 lg:pt-20 lg:pb-0">
			<Container className="flex flex-col items-center text-center">
				<div className="space-y-6">
					<h1 className="text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
						<span className="block">{siteConfig.hero.titlePrefix}</span>
						<span className="block">
							A{" "}
							<span className="text-primary">
								{siteConfig.hero.highlight}
							</span>
							{siteConfig.hero.titleSuffix}
						</span>
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-2xl font-light text-muted-foreground sm:text-3xl">
						{siteConfig.hero.subtitle}
					</p>
					<div className="mt-6 flex justify-center">
						<Button href={siteConfig.hero.cta.href} size="lg">
							{siteConfig.hero.cta.label}
						</Button>
					</div>
				</div>
				<Card className="relative z-0 -mb-px mt-6 w-full max-w-full overflow-hidden sm:mt-8 sm:max-w-[47rem] lg:max-w-[72rem]">
					<CardContent className="p-0">
					<Image
						src="/placeholders/hero.svg"
						alt="Property interior placeholder"
						width={900}
						height={1100}
						className="block h-auto w-full object-contain"
					/>
					</CardContent>
				</Card>
			</Container>
		</section>
	);
}
