import { AnnouncementBar } from "@/components/marketing/AnnouncementBar";
import { Footer } from "@/components/marketing/Footer";
import { Navbar } from "@/components/marketing/Navbar";

type DashboardPageProps = {
	params: {
		userId: string;
	};
};

export default function DashboardPage({ params }: DashboardPageProps) {
	return (
		<>
			<AnnouncementBar />
			<Navbar />
			<main>
				<div className="min-h-screen p-8 sm:p-12 lg:p-16">
					<div className="max-w-5xl mx-auto space-y-4">
						<h1 className="text-3xl sm:text-4xl font-semibold">
							Dashboard placeholder
						</h1>
						<p className="text-base sm:text-lg text-muted-foreground">
							User: {params.userId}
						</p>
						<p className="text-sm text-muted-foreground">
							We’ll add 21st.dev components and real data once designs are
							ready.
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
