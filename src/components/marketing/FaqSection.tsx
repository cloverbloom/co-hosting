import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/marketing/Container";
import { Section } from "@/components/marketing/Section";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export function FaqSection() {
	return (
		<Section id="faq">
			<Container className="space-y-6">
				<div className="space-y-3 text-center">
					<h2 className="section-title">
						<span>FAQ</span>
					</h2>
					<p className="section-subtitle font-light">
						{siteConfig.faq.intro}
					</p>
				</div>
				<Card className="p-2">
					<Accordion type="single" collapsible className="w-full">
						{siteConfig.faq.items.map((item) => (
							<AccordionItem key={item.question} value={item.question}>
								<AccordionTrigger>{item.question}</AccordionTrigger>
								<AccordionContent>{item.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</Card>
			</Container>
		</Section>
	);
}
