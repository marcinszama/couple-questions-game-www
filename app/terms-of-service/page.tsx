import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://couplequestionsgame.com'

export const metadata: Metadata = {
  title: 'Terms of Service | The Couple Questions',
  description: 'Read the terms and conditions for using The Couple Questions app. Understand your rights, responsibilities, and our service policies.',
  alternates: {
    canonical: '/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": `${SITE_URL}/terms-of-service` }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-bold mb-2">TERMS AND CONDITIONS</h1>
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> November 15, 2025
            </p>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. GENERAL INFORMATION</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Service Provider</h3>
              <p>
                <strong>Marcin Szamatowicz</strong>
                <br />
                Kamionkowska 9 lok. 117
                <br />
                03-805 Warsaw, Poland
                <br />
                Tax ID (NIP): 1133126261
                <br />
                Business Registry (REGON): 527928004
                <br />
                Email: support@couplequestionsgame.com
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Web Application</h3>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) govern your use of our web application &quot;The Couple Questions&quot;
                (&quot;App&quot; or &quot;Service&quot;) accessible at https://couplequestionsgame.com/.
              </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. ACCEPTANCE OF TERMS</h2>
              <p>
                By accessing, browsing, or using our web App, you agree to be bound by these Terms. If you do not
                agree to these Terms, do not use the App.
              </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. DESCRIPTION OF SERVICE</h2>
              <p>
                Our web App &quot;The Couple Questions&quot; provides relationship communication tools and conversation prompts
                designed to help couples and partners strengthen their connections through meaningful discussions.
                <strong> We are not a counseling service, therapy provider, or professional relationship advice company.</strong>
                The App provides conversation tools only.
              </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. USER ACCOUNTS</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Registration</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must be at least 16 years old to use this App</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Account Responsibility</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are solely responsible for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>We are not liable for losses resulting from unauthorized account use</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. ACCEPTABLE USE</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">You May:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the App for its intended purpose of improving communication</li>
                <li>Access the App through standard web browsers</li>
                <li>Share content generated through the App with your consent</li>
                <li>Provide feedback and suggestions for improvement</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">You May NOT:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the App for illegal or harmful activities</li>
                <li>Attempt to reverse engineer, hack, or compromise the App</li>
                <li>Share inappropriate, offensive, or harmful content</li>
                <li>Impersonate others or provide false information</li>
                <li>Interfere with other users&apos; experience or App functionality</li>
                <li>Use automated tools to access the App without permission</li>
                <li>Use the App for commercial purposes without permission</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. INTELLECTUAL PROPERTY</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Our Rights</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All App content, features, and functionality are owned by Marcin Szamatowicz</li>
                <li>The App is protected by copyright, trademark, and other intellectual property laws</li>
                <li>Our trademarks and logos may not be used without written permission</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Your Rights</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You retain ownership of any personal content you create using the App</li>
                <li>You grant us a limited license to use your feedback for App improvement</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. PRIVACY AND DATA PROTECTION</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which explains how we collect,
                use, and protect your information. By using the App, you consent to our data practices as described
                in the Privacy Policy.
              </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. PAID FEATURES AND PAYMENTS</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Premium Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Some functionalities within the App require payment (&quot;Premium Features&quot;)</li>
                <li>Payments are one-time purchases unless otherwise specified</li>
                <li>Premium Features are activated immediately upon successful payment</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Payment Processing</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payments are processed through secure third-party payment processors</li>
                <li>We do not store or process payment card information directly</li>
                <li>All payment transactions are encrypted and secure</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Refunds</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refund requests will be evaluated on a case-by-case basis</li>
                <li>Refunds may be provided within 14 days of purchase for valid reasons</li>
                <li>Contact us at support@couplequestionsgame.com for refund requests</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Price Changes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We reserve the right to modify prices for Premium Features with reasonable notice</li>
                <li>Price changes will not affect purchases already completed</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. NOT A COUNSELING SERVICE</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Important Disclaimer</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>We are NOT licensed therapists, counselors, or relationship professionals</strong></li>
                <li>The App provides conversation tools and prompts only</li>
                <li>Our content is for informational and communication purposes only</li>
                <li><strong>We do not provide professional relationship, mental health, or therapeutic advice</strong></li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Professional Help</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>If you are experiencing serious relationship problems, mental health issues, or crisis situations, please seek help from qualified professionals</li>
                <li>In case of emergency, contact local emergency services</li>
                <li>We encourage consulting licensed therapists or counselors for professional guidance</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. TERMINATION</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">By You</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may terminate your account at any time through the App settings or by contacting us</li>
                <li>Termination does not entitle you to a refund of paid features</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">By Us</h3>
              <p>We may terminate or suspend your account if you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate these Terms</li>
                <li>Engage in harmful or illegal activities</li>
                <li>Upon reasonable notice for operational reasons</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. SERVICE DISCONTINUATION</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Right to Discontinue</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We reserve the right to discontinue the App or any of its features at any time</li>
                <li>We will provide reasonable notice (minimum 30 days) before permanent service discontinuation</li>
                <li>Upon discontinuation, you may lose access to Premium Features without refund</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Data Export</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Before service discontinuation, we will provide reasonable opportunity to export your data</li>
                <li>Data export availability is subject to technical limitations</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">No Obligation to Continue</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We have no obligation to maintain the App indefinitely</li>
                <li>Business closure, technical issues, or other circumstances may require service termination</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. DISCLAIMERS</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Service Availability</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The App is provided &quot;as is&quot; without warranties of any kind</li>
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>Web browser compatibility may vary; we support modern browsers only</li>
                <li>We may perform maintenance that temporarily affects availability</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Relationship Outcomes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>We make no guarantees about relationship outcomes or improvements</strong></li>
                <li>Individual results may vary significantly</li>
                <li>The App is a tool only; success depends on user effort and circumstances</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. LIMITATION OF LIABILITY</h2>
              <p>To the maximum extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Our total liability is limited to the amount you paid for Premium Features in the past 12 months</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>We are not liable for relationship problems, breakups, or personal disputes</li>
                <li><strong>We are not liable for any damages arising from service discontinuation</strong></li>
                <li>We are not liable for technical issues beyond our reasonable control</li>
                <li>Some jurisdictions do not allow these limitations, so they may not apply to you</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. INDEMNIFICATION</h2>
              <p>You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of the App</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any relationship issues or disputes</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">15. GOVERNING LAW</h2>
              <p>
                These Terms are governed by the laws of Poland. Any disputes will be resolved in the courts of Warsaw, Poland.
              </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">16. CHANGES TO TERMS</h2>
              <p>We may update these Terms from time to time. We will notify you of material changes through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website notifications</li>
                <li>Email notifications</li>
                <li>Updates posted on the App</li>
              </ul>
              <p className="mt-4">
                Continued use of the App after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">17. SEVERABILITY</h2>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions
                will continue in full force and effect.
              </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">18. ENTIRE AGREEMENT</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and us
                regarding the App.
              </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">19. CONTACT US</h2>
              <p>For questions about these Terms and Conditions:</p>
              <p>
                <strong>Email:</strong> support@couplequestionsgame.com
                <br />
                <strong>Address:</strong> Kamionkowska 9 lok. 117, 03-805 Warsaw, Poland
              </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Related Links</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/" className="text-primary hover:underline">
                  Home
                </Link>
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/resources" className="text-primary hover:underline">
                  Resources
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
