"use client";

import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

type ContactDialogProps = {
	triggerClassName?: string;
	triggerLabel?: string;
};

export function ContactDialog({
	triggerClassName,
	triggerLabel = "Contact",
}: ContactDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button
					type="button"
					className={triggerClassName}
					aria-label="Open contact information"
				>
					{triggerLabel}
				</button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{siteConfig.contact.title}</DialogTitle>
					<DialogDescription>{siteConfig.contact.body}</DialogDescription>
				</DialogHeader>
				<div className="space-y-3 text-sm">
					<div className="card-soft p-4">
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
							Email
						</p>
						<a
							href={siteConfig.contact.cta.href}
							className="mt-2 block text-sm font-semibold text-primary hover:underline"
						>
							{siteConfig.contact.cta.href.replace("mailto:", "")}
						</a>
					</div>
					<div className="card-soft p-4">
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
							LinkedIn
						</p>
						<a
							href="https://www.linkedin.com/in/garrettfnelson"
							target="_blank"
							rel="noreferrer"
							className="mt-2 block text-sm font-semibold text-primary hover:underline"
						>
							View profile
						</a>
					</div>
				</div>
				<DialogFooter>
					<Button asChild>
						<a href={siteConfig.contact.cta.href}>Send an email</a>
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
