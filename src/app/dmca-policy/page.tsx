import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/marketing/AnnouncementBar";
import { Container } from "@/components/marketing/Container";
import { Footer } from "@/components/marketing/Footer";
import { Navbar } from "@/components/marketing/Navbar";
import { Section } from "@/components/marketing/Section";

export const metadata: Metadata = {
	title: "DMCA Policy | Cloverbloom Co-hosting",
	description: "Digital Millennium Copyright Act policy for Cloverbloom.",
};

export default function DmcaPolicyPage() {
	return (
		<>
			<AnnouncementBar />
			<Navbar />
			<main>
				<Section>
					<Container className="space-y-8 text-foreground">
						<p className="text-center text-sm font-semibold uppercase tracking-[0.2em]">
							Last Updated: January 23, 2026
						</p>
						<div className="space-y-3">
							<h1 className="text-xl font-semibold uppercase tracking-[0.18em] sm:text-2xl">
								A. DMCA POLICY
							</h1>
						</div>
						<div className="space-y-4 text-base sm:text-lg">
							<p>
								Cloverbloom Wyoming LLC (&ldquo;Cloverbloom,&rdquo; &ldquo;we,&rdquo;{" "}
								&ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects the intellectual
								property rights of others and expects users of our website and
								client dashboards to do the same. This policy outlines our
								procedures for handling claims of copyright infringement in
								accordance with the Digital Millennium Copyright Act
								(&ldquo;DMCA&rdquo;).
							</p>
							<p>
								More information about the DMCA can be found on the U.S.
								Copyright Office&rsquo;s official website.
							</p>
							<p>
								Nothing in this policy constitutes legal advice. If you have
								questions regarding your rights or obligations under the DMCA,
								you should consult qualified legal counsel.
							</p>
						</div>
						<div className="space-y-4">
							<h2 className="text-lg font-semibold uppercase tracking-[0.18em] sm:text-xl">
								B. TAKEDOWN NOTICE
							</h2>
							<div className="space-y-4 text-base sm:text-lg">
								<p>
									If you believe that copyrighted material you own is being used
									without authorization on{" "}
									<span className="font-semibold">cloverbloom.co</span>{" "}
									or within Cloverbloom-managed client dashboards, you may submit
									a written DMCA takedown notice to us.
								</p>
								<p>
									DMCA notices must be submitted in good faith and under penalty
									of perjury. Providing false or misleading information may
									result in civil or criminal liability.
								</p>
								<p>
									Before submitting a notice, we encourage you to confirm that
									the use is not permitted by law and, where appropriate, to
									attempt to resolve the matter directly with the involved party.
								</p>
							</div>
						</div>
						<div className="space-y-4">
							<h3 className="text-lg font-semibold uppercase tracking-[0.18em] sm:text-xl">
								C. REQUIRED INFORMATION
							</h3>
							<ul className="list-disc space-y-2 pl-5 text-base sm:text-lg">
								<li>
									A physical or electronic signature of the copyright owner or an
									authorized representative
								</li>
								<li>
									Identification of the copyrighted work claimed to have been
									infringed
								</li>
								<li>
									Identification of the allegedly infringing material and
									information reasonably sufficient to locate it
								</li>
								<li>
									Your contact information, including address, telephone number,
									and email address
								</li>
								<li>
									A statement that you have a good-faith belief that the
									disputed use is not authorized by the copyright owner, its
									agent, or the law
								</li>
								<li>
									A statement that the information provided is accurate and, under
									penalty of perjury, that you are authorized to act on behalf of
									the copyright owner
								</li>
							</ul>
						</div>
						<div className="space-y-4">
							<h3 className="text-lg font-semibold uppercase tracking-[0.18em] sm:text-xl">
								D. SUBMISSION METHOD
							</h3>
							<div className="space-y-4 text-base sm:text-lg">
								<p>DMCA notices should be sent by email to:</p>
								<p>
									<a href="mailto:garrett@cloverbloom.co" className="font-semibold">
										garrett@cloverbloom.co
									</a>
								</p>
								<p>
									Email submissions are preferred and will receive the fastest
									response. Physical mail is accepted but may result in delays.
								</p>
								<div className="card-soft p-4 text-sm sm:text-base">
									<div className="font-semibold">
										Attention: Legal &ndash; DMCA Notice
									</div>
									<div>Cloverbloom Wyoming LLC</div>
									<div>32 N Gould St</div>
									<div>Sheridan, WY 82801</div>
								</div>
								<p>
									By submitting a DMCA notice, you acknowledge that a copy of your
									submission, including all provided information, may be shared
									with the party alleged to have infringed the content.
								</p>
							</div>
						</div>
						<div className="space-y-4">
							<h2 className="text-lg font-semibold uppercase tracking-[0.18em] sm:text-xl">
								E. COUNTER-NOTICE
							</h2>
							<div className="space-y-4 text-base sm:text-lg">
								<p>
									If you believe content you submitted or control was removed or
									disabled in error as a result of a DMCA takedown notice, you may
									submit a counter-notification.
								</p>
								<p>
									A valid counter-notification must include the information
									required under the DMCA. Upon receipt of a valid counter-notice,
									Cloverbloom may restore the removed material within fourteen
									(14) days unless we receive notice that the original complaining
									party has filed a legal action seeking a court order to restrain
									the alleged infringement.
								</p>
								<p>
									Counter-notifications should be submitted using the same contact
									information listed above.
								</p>
							</div>
						</div>
						<div className="space-y-4">
							<h2 className="text-lg font-semibold uppercase tracking-[0.18em] sm:text-xl">
								F. OUR ROLE
							</h2>
							<p className="text-base sm:text-lg">
								Cloverbloom&rsquo;s role in the DMCA process is limited to
								determining whether submitted notices meet the formal
								requirements of the DMCA. We do not adjudicate disputes or
								determine ownership. Parties are responsible for asserting and
								defending their rights through appropriate legal channels.
							</p>
						</div>
						<div className="space-y-4">
							<h2 className="text-lg font-semibold uppercase tracking-[0.18em] sm:text-xl">
								G. JURISDICTION
							</h2>
							<p className="text-base sm:text-lg">
								This DMCA Policy is governed by the laws of the State of Wyoming,
								without regard to conflict-of-law principles.
							</p>
						</div>
						<p className="text-center text-sm font-semibold uppercase tracking-[0.2em]">
							© 2026 Cloverbloom Wyoming LLC. All rights reserved.
						</p>
					</Container>
				</Section>
			</main>
			<Footer />
		</>
	);
}
