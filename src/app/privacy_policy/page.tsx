import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import ContentComponent from "@/components/ContentComponent";
import PagerButton from "@/components/PagerButton";
import ScrollToTop from "@/components/ScrollToTop";
import SpanEmoji from "@/components/SpanEmoji";

function PrivacyPolicy() {
    return (
        <div>
            <ScrollToTop />
            <ContentComponent headline={
                <>
                    <ArticleTitleComponent emojiImg="emoji_u1f6e1.png" text="Privacy Policy" />
                </>
            }>
                <div className="flex flex-col items-stretch gap-4">
                    <div>
                        <p style={{ textIndent: '0' }}><b>Effective Date:</b> October 25, 2025</p>
                        <p style={{ textIndent: '0' }}><b>Website:</b> <a className="text-xs" href="https://fwdjonathanmendoza.com">https://fwdjonathanmendoza.com</a></p>
                        <p style={{ textIndent: '0' }}><b>Owner:</b> Jonathan Mendoza</p>
                    </div>

                    <hr />
                    <h2><b>1. Introduction</b></h2>
                    <p style={{ textAlign: 'left' }}>Welcome to <b>Sir Jo, Your Life Partner</b> (“we,” “our,” “us”).</p>
                    <p style={{ textAlign: 'left' }}>Your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, sign up for our newsletter, request a quote, or interact with our content and services.</p>
                    <p style={{ textAlign: 'left' }}>By using this website, you agree to the practices described in this Privacy Policy.</p>

                    <hr />
                    <h2><b>2. Information We Collect</b></h2>
                    <p style={{ textAlign: 'left' }}>We collect information that helps us serve you better, including:</p>
                    <ol>
                        <li>
                            <p style={{ textIndent: '0' }}><b>a. Personal Information</b></p>
                            <p style={{ textAlign: 'left' }}>When you submit a form, schedule a consultation, or subscribe to our mailing list, we may collect:</p>
                            <ul className="list-disc list-inside">
                                <li>First Name</li>
                                <li>Last Name</li>
                                <li>Age</li>
                                <li>Gender</li>
                                <li>Civil Status</li>
                                <li>Medical Condition</li>
                                <li>Income Details</li>
                                <li>Email Address</li>
                                <li>Mobile Number</li>
                                <li>Any other information you voluntarily provide</li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <p style={{ textIndent: '0' }}><b>b. Automatically Collected Information</b></p>
                            <p style={{ textAlign: 'left' }}>When you browse our website, we may collect:</p>
                            <ul className="list-disc list-inside">
                                <li>IP address and browser type</li>
                                <li>Device information (desktop, mobile, etc.)</li>
                                <li>Pages visited and duration of stay</li>
                                <li>Referral source (e.g., Facebook Ads, Google Search)</li>
                            </ul>
                            <br />
                            <p style={{ textIndent: '0', textAlign: 'left' }}>This helps us analyze traffic and improve user experience.</p>
                        </li>
                    </ol>

                    <hr />
                    <h2><b>3. How We Use Your Information</b></h2>
                    <p style={{ textIndent: '0', textAlign: 'left' }}>We use the information we collect to:</p>
                    <ul className="list-disc list-inside">
                        <li>Respond to your inquiries and provide insurance advice or product recommendations</li>
                        <li>Send updates, educational content, or promotional offers (only if you consent)</li>
                        <li>Improve our website and marketing performance</li>
                        <li>Conduct analytics or remarketing through Facebook Pixel, Google Analytics, or Brevo tracking</li>
                        <li>Comply with legal and regulatory requirements</li>
                    </ul>

                    <hr />
                    <h2 className="text-left"><b>4. Cookies and Tracking Technologies</b></h2>
                    <p style={{ textIndent: '0', textAlign: 'left' }}>Our website may use cookies and tracking technologies to:</p>
                    <ul className="list-disc list-inside">
                        <li>Remember your preferences</li>
                        <li>Improve navigation and page performance</li>
                        <li>Analyze visitor behavior</li>
                        <li>Serve relevant ads and retargeting campaigns</li>
                    </ul>
                    <p>You may choose to disable cookies through your browser settings, but some features of the website may not function properly.</p>

                    <hr />
                    <h2 className="text-left"><b>5. Third-Party Services</b></h2>
                    <p style={{ textIndent: '0', textAlign: 'left' }}>We may use trusted third-party tools for analytics, marketing, and communication, including:</p>
                    <ul className="list-disc list-inside">
                        <li><b>Facebook Pixel</b> (Meta Platforms, Inc.)</li>
                        <li><b>Google Analytics</b> (Google LLC)</li>
                        <li><b>Brevo (formerly Sendinblue)</b> for email campaigns</li>
                        <li><b>AWS SES / SNS</b> for email notifications</li>
                        <li><b>Twilio</b> for mobile OTP verification</li>
                    </ul>
                    <p style={{ textIndent: '0', textAlign: 'left' }}>These providers may collect and process data under their respective privacy policies.</p>

                    <hr />
                    <h2 className="text-left"><b>6. Data Protection and Security</b></h2>
                    <p>We take data protection seriously. Your personal information is stored securely, and access is restricted to authorized personnel only.</p>
                    <p>We use SSL encryption and follow industry best practices to protect your information from unauthorized access, alteration, disclosure, or destruction.</p>

                    <hr />
                    <h2 className="text-left"><b>7. Your Rights</b></h2>
                    <p style={{ textIndent: '0', textAlign: 'left' }}>You have the right to:</p>
                    <ul className="list-disc list-inside">
                        <li>Access the personal data we hold about you</li>
                        <li>Request correction of inaccurate or incomplete data</li>
                        <li>Withdraw consent from receiving marketing messages</li>
                        <li>Request deletion of your personal data (subject to legal retention requirements)</li>
                    </ul>
                    <p style={{ textIndent: '0', textAlign: 'left' }}>To exercise these rights, please contact us at <a href="mailto:sirjo@fwdjonathanmendoza.com">sirjo@fwdjonathanmendoza.com</a>.</p>

                    <hr />
                    <h2 className="text-left"><b>8. Data Retention</b></h2>
                    <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, or resolve disputes.</p>

                    <hr />
                    <h2 className="text-left"><b>9. Updates to This Policy</b></h2>
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.</p>
                    <p>The updated version will always be available on this page with a new “Effective Date.”</p>

                    <hr />
                    <h2 className="text-left"><b>10. Contact Us</b></h2>
                    <p>If you have any questions about this Privacy Policy or how we handle your personal data, please contact:</p>
                    <div>
                        <p style={{ textIndent: '0', textAlign: 'left' }}><b>Jonathan Mendoza</b></p>
                        <p style={{ textIndent: '0', textAlign: 'left' }}><SpanEmoji value="📧"/> Email: <a href="mailto:sirjo@fwdjonathanmendoza.com">sirjo@fwdjonathanmendoza.com</a></p>
                        <p style={{ textIndent: '0', textAlign: 'left' }}><SpanEmoji value="🌏"/> Website: <a className="text-[0.85em]" href="https://fwdjonathanmendoza.com">https://fwdjonathanmendoza.com</a></p>
                    </div>
                </div>
            </ContentComponent>
            <div className="w-full flex flex-row justify-between py-8">
                <div className="animate-gentlePulse"><PagerButton textLabel="Previous" textSubtext={<><SpanEmoji value="📝"/> Sign-up for a Free Consultation</>} to="/free_consultation" /></div>
                <PagerButton isHidden textLabel="Next" textSubtext={<><SpanEmoji value="📝"/> Sign-up for a Free Consultation</>} to="/free_consultation" />
            </div>
        </div>
    );
}

export default PrivacyPolicy;
