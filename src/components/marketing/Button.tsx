import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ReactElement,
} from "react";
import { Button as UiButton } from "@/components/ui/button";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary";
	size?: "default" | "sm" | "lg";
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	variant?: "primary" | "secondary";
	size?: "default" | "sm" | "lg";
};

type CombinedProps = ButtonProps | ButtonLinkProps;

export function Button({
	className,
	variant = "primary",
	size = "lg",
	...props
}: CombinedProps): ReactElement {
	const variantMap = {
		primary: "default",
		secondary: "secondary",
	} as const;

	if ("href" in props && props.href) {
		return (
			<UiButton
				asChild
				variant={variantMap[variant]}
				size={size}
				className={className}
			>
				<a {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />
			</UiButton>
		);
	}

	return (
		<UiButton
			variant={variantMap[variant]}
			size={size}
			className={className}
			{...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
		/>
	);
}
