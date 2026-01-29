import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/marketing/Container";

type ProfileSectionProps = {
	imageSrc: string;
	reverse?: boolean;
	dark?: boolean;
};

export function ProfileSection({
	imageSrc,
	reverse,
	dark,
}: ProfileSectionProps) {
	return (
		<section
			className={`relative z-10 py-12 sm:py-16 lg:py-20 ${
				dark ? "bg-[#0b1022] text-white" : ""
			}`}
			id="about"
		>
			<Container
				className={`grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] ${
					reverse ? "lg:[&>div:first-child]:order-2" : ""
				}`}
			>
				<div className="space-y-3">
					<h2 className="section-title">
						<span>Meet </span>
						<span className="text-primary">Garrett</span>
					</h2>
					<div
						className={`section-subtitle space-y-3 font-light ${
							dark ? "text-white/80" : "text-muted-foreground"
						}`}
					>
						{siteConfig.meet.body.map((paragraph, index) => (
							<p
								key={paragraph.slice(0, 24)}
								className={index === 1 ? "font-semibold text-white" : ""}
							>
								{paragraph}
							</p>
						))}
					</div>
				</div>
				<div className="rounded-[var(--radius-md)]">
					<Image
						src={imageSrc}
						alt="Team portrait placeholder"
						width={520}
						height={640}
						className="h-auto w-full rounded-[var(--radius-sm)] object-cover"
					/>
				</div>
			</Container>
		</section>
	);
}
