// app/privacy-policy/page.tsx
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-8 py-10">
            {/* Table of Contents */}

            {/* Policy Sections */}
            <div className="space-y-12">
              <section id="information-collected">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  1. Information We Collect
                </h2>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Information You Provide
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Account Information:</strong> When you create an
                        account, we collect your name, email address, password,
                        and profile information.
                      </li>
                      <li>
                        <strong>Scheduling Information:</strong> When you
                        schedule or are scheduled for meetings, we collect
                        meeting details, including date, time, participants, and
                        any custom questions or notes.
                      </li>
                      <li>
                        <strong>Calendar Data:</strong> With your permission, we
                        access and store calendar availability from connected
                        calendars (Google Calendar, etc.).
                      </li>
                      <li>
                        <strong>Communication:</strong> Information you provide
                        when contacting our support team or participating in
                        surveys.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Information Collected Automatically
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Usage Data:</strong> Information about how you
                        interact with our platform, including pages visited,
                        features used, and time spent.
                      </li>
                      <li>
                        <strong>Cookies and Tracking:</strong> Information
                        collected through cookies and similar technologies as
                        described below.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Information from Third Parties
                    </h3>
                    <p>
                      We may receive information about you from third-party
                      services when you connect them to our platform, such as
                      calendar providers or authentication services.
                    </p>
                  </div>
                </div>
              </section>

              <section id="information-use">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We use the information we collect for the following
                    purposes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      To provide, maintain, and improve our scheduling services
                    </li>
                    <li>
                      To facilitate meeting scheduling and calendar management
                    </li>
                    <li>
                      To send notifications, reminders, and confirmations
                      related to scheduled events
                    </li>
                    <li>
                      To communicate with you about updates, security alerts,
                      and support messages
                    </li>
                    <li>
                      To personalize your experience and provide relevant
                      features
                    </li>
                    <li>To process payments for premium subscriptions</li>
                    <li>
                      To detect, prevent, and address technical issues and
                      security vulnerabilities
                    </li>
                    <li>
                      To comply with legal obligations and enforce our terms of
                      service
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
