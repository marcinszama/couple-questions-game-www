import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://couplequestionsgame.com'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Couple Questions',
  description: 'Learn how The Couple Questions collects, uses, and protects your personal data. GDPR-compliant privacy policy for our relationship communication app.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": `${SITE_URL}/privacy-policy` }
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
            <h1 className="text-4xl font-bold mb-2">PRIVACY POLICY</h1>
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> November 15, 2025
            </p>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. DATA CONTROLLER</h2>
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
              </p>
              <p>Email: support@couplequestionsgame.com</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. INFORMATION WE COLLECT</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Information You Provide:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email address and username during registration</li>
                <li>Profile information (if you choose to provide it)</li>
                <li>Communication preferences and settings</li>
                <li>Messages sent through contact forms</li>
                <li>Feedback and support requests</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Information Collected Automatically:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>App usage patterns and features accessed</li>
                <li>Device information (type, operating system, version)</li>
                <li>IP address and timestamps</li>
                <li>Log data and analytics</li>
                <li>Cookies (in accordance with our Cookie Policy)</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. PURPOSES AND LEGAL BASIS FOR PROCESSING</h2>
              <p>We process your personal data for the following purposes:</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Based on contract performance (Art. 6(1)(b) GDPR):</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing app services and functionality</li>
                <li>Managing user accounts</li>
                <li>Communication related to our services</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Based on legitimate interest (Art. 6(1)(f) GDPR):</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analyzing and improving app functionality</li>
                <li>Ensuring service security and preventing fraud</li>
                <li>Internal business operations</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Based on consent (Art. 6(1)(a) GDPR):</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sending marketing newsletters</li>
                <li>Marketing notifications</li>
                <li>Advanced analytics and personalization</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. DATA SHARING</h2>
              <p className="font-semibold mb-4">We do NOT sell your personal data.</p>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IT service providers who support our app operations</li>
                <li>Public authorities when legally required</li>
                <li>Third parties with your explicit consent for specific purposes</li>
                <li>Business partners for legitimate business purposes (with appropriate safeguards)</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. INTERNATIONAL DATA TRANSFERS</h2>
              <p>
                Some of our service providers may be located outside the European Economic Area. We ensure
                appropriate safeguards are in place in accordance with GDPR requirements, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adequacy decisions by the European Commission</li>
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Other legally recognized transfer mechanisms</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. DATA RETENTION</h2>
              <p>We retain your personal data for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The duration of service provision</li>
                <li>Until account deletion is requested</li>
                <li>As required by law (e.g., tax regulations - 5 years)</li>
                <li>Until consent is withdrawn (for consent-based processing)</li>
                <li>As long as necessary for legitimate business purposes</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. YOUR RIGHTS UNDER GDPR</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right of Access</strong> - request information about processing of your data</li>
                <li><strong>Right to Rectification</strong> - correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure</strong> - request deletion of your data (&quot;right to be forgotten&quot;)</li>
                <li><strong>Right to Restrict Processing</strong> - limit how we process your data</li>
                <li><strong>Right to Data Portability</strong> - receive your data in a structured format</li>
                <li><strong>Right to Object</strong> - object to processing based on legitimate interest</li>
                <li><strong>Right to Withdraw Consent</strong> - withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                <strong>To exercise your rights, contact us at:</strong> support@couplequestionsgame.com
              </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. DATA SECURITY</h2>
              <p>We implement appropriate technical and organizational measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure data transmission protocols</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Staff training on data protection</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. COOKIES AND TRACKING</h2>
              <p>Our app may use cookies and similar technologies. For detailed information, please refer to our Cookie Policy.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. CHILDREN&apos;S PRIVACY</h2>
              <p>Our app is not intended for individuals under 16 years of age. We do not knowingly collect personal data from children under 16.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. CHANGES TO THIS PRIVACY POLICY</h2>
              <p>We may update this privacy policy from time to time. We will notify you of material changes through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In-app notifications</li>
                <li>Email notifications</li>
                <li>Updates posted on our website</li>
              </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. RIGHT TO LODGE A COMPLAINT</h2>
              <p>You have the right to lodge a complaint with the supervisory authority:</p>
              <p>
                <strong>President of the Personal Data Protection Office (UODO)</strong>
                <br />
                ul. Stawki 2
                <br />
                00-193 Warsaw, Poland
                <br />
                Phone: +48 22 531 03 00
                <br />
                Email: kancelaria@uodo.gov.pl
                <br />
                Website: uodo.gov.pl
              </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. CONTACT US</h2>
              <p>For any questions regarding this privacy policy or data protection matters:</p>
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
                <Link href="/terms-of-service" className="text-primary hover:underline">
                  Terms of Service
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
