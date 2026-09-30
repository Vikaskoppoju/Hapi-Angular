// Policy text from hapiacademia.com (last revised on the live site 14 August 2026).
// Only mechanical fixes applied: section numbering, company-name spelling, and policy
// names in cross-references. See the Privacy intro / Refund section 9 notes in the summary.

export type PolicyBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'kv'; items: [string, string][] }
  | { type: 'link'; text: string; href: string };

export interface Policy {
  slug: string;
  title: string;
  summary: string;
  updated: string;
  intro: string[];
  sections: { heading: string; blocks: PolicyBlock[] }[];
}

export const POLICY_LIST: Policy[] = [
  {
    "slug": "privacy",
    "title": "Privacy Policy",
    "summary": "How we collect, use, share and protect personal information.",
    "updated": "2026-08-14",
    "intro": [],
    "sections": [
      {
        "heading": "Information we collect",
        "blocks": [
          {
            "type": "p",
            "text": "We may collect information that you voluntarily provide to us when you use our website, submit a manuscript, make a payment, contact us, or use our services."
          },
          {
            "type": "p",
            "text": "This information may include:"
          },
          {
            "type": "list",
            "items": [
              "Full name",
              "Email address",
              "Contact number",
              "Institutional affiliation",
              "University or organization",
              "Country and professional information",
              "Manuscript or article information",
              "Author and reviewer information",
              "Payment and billing information",
              "Information submitted through contact or application forms",
              "Communications and correspondence with us"
            ]
          }
        ]
      },
      {
        "heading": "How we use your information",
        "blocks": [
          {
            "type": "p",
            "text": "We may use the information we collect to:"
          },
          {
            "type": "list",
            "items": [
              "Process and manage manuscript submissions",
              "Communicate with authors, reviewers, editors, and users",
              "Provide publishing and academic services",
              "Process payments and transactions",
              "Respond to enquiries and requests",
              "Provide customer and technical support",
              "Manage conferences, memberships, and academic services",
              "Improve our website and services",
              "Send relevant announcements and service-related communications",
              "Maintain records and administrative information",
              "Detect and prevent fraudulent or unauthorized activities",
              "Comply with applicable legal and regulatory requirements"
            ]
          }
        ]
      },
      {
        "heading": "Information sharing",
        "blocks": [
          {
            "type": "p",
            "text": "Hikmah Academia Publishing Institute Pvt. Ltd. does not sell personal information to third parties."
          },
          {
            "type": "p",
            "text": "We may share information where necessary with trusted service providers and partners who assist us in operating our website and services."
          },
          {
            "type": "p",
            "text": "These may include:"
          },
          {
            "type": "list",
            "items": [
              "Payment processing providers",
              "Website hosting and technical service providers",
              "Email and communication service providers",
              "Analytics and security service providers",
              "Professional or administrative service providers"
            ]
          }
        ]
      },
      {
        "heading": "Data security",
        "blocks": [
          {
            "type": "p",
            "text": "We take reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, disclosure, alteration, loss, or misuse."
          },
          {
            "type": "p",
            "text": "However, no method of electronic transmission or storage can be guaranteed to be completely secure."
          },
          {
            "type": "p",
            "text": "Users should therefore understand that information transmitted over the internet may involve inherent security risks."
          }
        ]
      },
      {
        "heading": "Cookies and tracking technologies",
        "blocks": [
          {
            "type": "p",
            "text": "Our website may use cookies and similar technologies to improve functionality, understand website usage, remember preferences, and enhance the user experience."
          },
          {
            "type": "p",
            "text": "Cookies may help us:"
          },
          {
            "type": "list",
            "items": [
              "Maintain website functionality",
              "Understand visitor activity",
              "Improve website performance",
              "Analyze traffic and usage",
              "Remember user preferences"
            ]
          }
        ]
      },
      {
        "heading": "Your rights",
        "blocks": [
          {
            "type": "p",
            "text": "Depending on applicable law, you may have certain rights regarding your personal information."
          },
          {
            "type": "p",
            "text": "These may include the right to:"
          },
          {
            "type": "list",
            "items": [
              "Request access to personal information we hold about you",
              "Request correction or updating of inaccurate information",
              "Request deletion of personal information where legally applicable",
              "Withdraw consent where processing is based on consent",
              "Object to certain types of processing",
              "Request information about how your data is being used",
              "Opt out of certain communications"
            ]
          }
        ]
      },
      {
        "heading": "Third-party links",
        "blocks": [
          {
            "type": "p",
            "text": "Our website may contain links to external websites, platforms, journals, payment services, or other third-party resources."
          },
          {
            "type": "p",
            "text": "These third-party websites operate independently and may have their own privacy policies and terms of use."
          },
          {
            "type": "p",
            "text": "Hikmah Academia Publishing Institute Pvt. Ltd. is not responsible for the privacy practices, content, security, or policies of third-party websites."
          },
          {
            "type": "p",
            "text": "We recommend reviewing the privacy policy of any external website before providing personal information."
          }
        ]
      },
      {
        "heading": "Children's privacy",
        "blocks": [
          {
            "type": "p",
            "text": "Our website and services are not intentionally directed toward children."
          },
          {
            "type": "p",
            "text": "We do not knowingly collect personal information from children where such collection is prohibited by applicable law."
          },
          {
            "type": "p",
            "text": "If you believe that a child has provided personal information to us, please contact us so that we can take appropriate steps to review and, where appropriate, remove the information."
          }
        ]
      },
      {
        "heading": "Data retention",
        "blocks": [
          {
            "type": "p",
            "text": "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing services, maintaining business and publishing records, resolving disputes, complying with legal obligations, and enforcing agreements."
          },
          {
            "type": "p",
            "text": "The retention period may vary depending on the type and purpose of the information."
          }
        ]
      },
      {
        "heading": "Changes to this Privacy Policy",
        "blocks": [
          {
            "type": "p",
            "text": "Hikmah Academia Publishing Institute Pvt. Ltd. may update or modify this Privacy Policy from time to time."
          },
          {
            "type": "p",
            "text": "Any changes will be published on this page with an updated effective or revision date where appropriate."
          },
          {
            "type": "p",
            "text": "We encourage users to periodically review this page to remain informed about how we protect personal information."
          }
        ]
      },
      {
        "heading": "Contact us",
        "blocks": [
          {
            "type": "p",
            "text": "If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us."
          },
          {
            "type": "p",
            "text": "Hikmah Academia Publishing Institute Pvt. Ltd."
          },
          {
            "type": "link",
            "text": "info@hapiacademia.com",
            "href": "mailto:info@hapiacademia.com"
          },
          {
            "type": "link",
            "text": "hapiacademia.com",
            "href": "https://hapiacademia.com"
          }
        ]
      }
    ]
  },
  {
    "slug": "terms",
    "title": "Terms & Conditions",
    "summary": "The terms that apply when you use our website and services.",
    "updated": "2026-08-14",
    "intro": [
      "Welcome to the website of Hikmah Academia Publishing Institute Pvt. Ltd. By accessing or using our website and services, you agree to comply with and be bound by the following Terms & Conditions."
    ],
    "sections": [
      {
        "heading": "Acceptance of terms",
        "blocks": [
          {
            "type": "p",
            "text": "By using our website and services, you agree to these Terms & Conditions in full. If you do not agree, please do not use our website or services."
          }
        ]
      },
      {
        "heading": "About our services",
        "blocks": [
          {
            "type": "p",
            "text": "Hikmah Academia Publishing Institute Pvt. Ltd. provides academic publishing, editorial, author support, conference, training, and related scholarly services. The details of each service are provided on our website."
          }
        ]
      },
      {
        "heading": "User responsibilities",
        "blocks": [
          {
            "type": "p",
            "text": "Users agree to provide accurate, complete, and up-to-date information when using our services. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account."
          }
        ]
      },
      {
        "heading": "Submissions",
        "blocks": [
          {
            "type": "p",
            "text": "Authors are responsible for the originality and authenticity of their submissions. By submitting, you confirm that the work is your own, has not been published elsewhere, and does not infringe any third-party rights."
          }
        ]
      },
      {
        "heading": "Payments",
        "blocks": [
          {
            "type": "p",
            "text": "Payments for services (including APCs, registration fees, editing fees, and others) must be made as specified on our website. All payments are non-refundable except as stated in our Refund & Cancellation Policy."
          }
        ]
      },
      {
        "heading": "Intellectual property",
        "blocks": [
          {
            "type": "p",
            "text": "All content on this website, including text, graphics, logos, and images, is the property of Hikmah Academia Publishing Institute Pvt. Ltd. or its content providers and is protected by applicable copyright laws."
          }
        ]
      },
      {
        "heading": "Privacy",
        "blocks": [
          {
            "type": "p",
            "text": "Your use of our website and services is also governed by our Privacy Policy, which explains how we collect, use, and protect your information."
          }
        ]
      },
      {
        "heading": "Third-party services",
        "blocks": [
          {
            "type": "p",
            "text": "We may use third-party services for payment processing, analytics, communication, and other purposes. We are not responsible for the policies and practices of these third parties."
          }
        ]
      },
      {
        "heading": "Disclaimer of warranties",
        "blocks": [
          {
            "type": "p",
            "text": "Our website and services are provided on an “as is” and “as available” basis. We make no warranties, express or implied, regarding the accuracy, reliability, or availability of our services."
          }
        ]
      },
      {
        "heading": "Limitation of liability",
        "blocks": [
          {
            "type": "p",
            "text": "Hikmah Academia Publishing Institute Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services."
          }
        ]
      },
      {
        "heading": "Indemnification",
        "blocks": [
          {
            "type": "p",
            "text": "You agree to indemnify and hold harmless Hikmah Academia Publishing Institute Pvt. Ltd., its affiliates, directors, employees, and partners from any claims, damages, or expenses arising from your use of our services or violation of these Terms."
          }
        ]
      },
      {
        "heading": "Modifications",
        "blocks": [
          {
            "type": "p",
            "text": "We reserve the right to modify these Terms & Conditions at any time. Changes will be posted on this page with an updated “Effective Date”. Your continued use constitutes acceptance of the updated terms."
          }
        ]
      },
      {
        "heading": "Governing law",
        "blocks": [
          {
            "type": "p",
            "text": "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India."
          }
        ]
      }
    ]
  },
  {
    "slug": "refund",
    "title": "Refund & Cancellation Policy",
    "summary": "When payments may be cancelled, refunded, transferred or treated as non-refundable.",
    "updated": "2026-08-14",
    "intro": [
      "Hikmah Academia Publishing Institute Pvt. Ltd. is committed to providing transparent and professional academic publishing and related services. This Refund & Cancellation Policy explains the conditions under which payments may be cancelled, refunded, transferred, or considered non-refundable. By making a payment through our website or through any other authorized payment method, you acknowledge that you have read and understood this policy."
    ],
    "sections": [
      {
        "heading": "Scope of this policy",
        "blocks": [
          {
            "type": "p",
            "text": "This policy applies to payments made for services offered by Hikmah Academia Publishing Institute Pvt. Ltd., including but not limited to:"
          },
          {
            "type": "list",
            "items": [
              "Article Processing Charges (APC)",
              "Conference and event registration",
              "Book proposal and publishing-related services",
              "English editing and proofreading services",
              "Author coaching and writing support",
              "Membership services",
              "Academic and professional services",
              "Other paid services offered through our website"
            ]
          }
        ]
      },
      {
        "heading": "Article processing charges (APC)",
        "blocks": [
          {
            "type": "p",
            "text": "APC payments are generally associated with the publication and processing of an accepted manuscript."
          },
          {
            "type": "p",
            "text": "Once an APC payment has been received and the publication process has commenced, the payment may be non-refundable, except where a refund is expressly approved by Hikmah Academia Publishing Institute Pvt. Ltd."
          }
        ]
      },
      {
        "heading": "Manuscript withdrawal and cancellation",
        "blocks": [
          {
            "type": "p",
            "text": "Authors who wish to withdraw a manuscript should notify the relevant journal or the Institute as soon as possible."
          },
          {
            "type": "p",
            "text": "Withdrawal does not automatically create a right to an APC refund."
          },
          {
            "type": "p",
            "text": "Where significant editorial, peer-review, production, formatting, administrative, or publication work has already been completed, the payment may be considered non-refundable."
          },
          {
            "type": "p",
            "text": "If an author requests cancellation before substantial processing begins, the Institute may review the request and determine whether a full or partial refund is appropriate."
          }
        ]
      },
      {
        "heading": "Duplicate or erroneous payments",
        "blocks": [
          {
            "type": "p",
            "text": "If a customer accidentally makes the same payment more than once, the duplicate payment may be eligible for a refund after verification."
          },
          {
            "type": "p",
            "text": "The customer should provide:"
          },
          {
            "type": "list",
            "items": [
              "Name",
              "Email address",
              "Transaction/reference number",
              "Date of payment",
              "Amount paid",
              "Relevant manuscript, registration, or service details"
            ]
          },
          {
            "type": "p",
            "text": "Refunds for verified duplicate payments will normally be processed using the original payment method where technically possible."
          }
        ]
      },
      {
        "heading": "Conference registration",
        "blocks": [
          {
            "type": "p",
            "text": "Conference, symposium, workshop, or academic event registration payments are subject to the cancellation terms communicated for the specific event."
          },
          {
            "type": "p",
            "text": "Where cancellation is permitted, the applicable refund may depend on how far in advance the cancellation request is received."
          },
          {
            "type": "p",
            "text": "The Institute may deduct applicable administrative or processing charges where appropriate."
          },
          {
            "type": "p",
            "text": "If an event is cancelled or materially rescheduled by the Institute, registered participants will be informed regarding the available options, which may include transfer of registration or a refund, subject to the circumstances of the event."
          }
        ]
      },
      {
        "heading": "Book proposal and publishing services",
        "blocks": [
          {
            "type": "p",
            "text": "Payments for book proposals, publishing services, editorial services, production, design, or related services may become non-refundable once work has commenced."
          },
          {
            "type": "p",
            "text": "Where a cancellation request is received before work begins, the Institute may review the request for a refund."
          },
          {
            "type": "p",
            "text": "Where editorial, technical, design, formatting, production, or other professional work has already been performed, the amount refundable, if any, may be reduced to reflect work already completed."
          }
        ]
      },
      {
        "heading": "Bank transfer payments",
        "blocks": [
          {
            "type": "p",
            "text": "For payments made by bank transfer, customers should retain their payment receipt or transaction confirmation."
          },
          {
            "type": "p",
            "text": "For a refund request, the customer may be required to provide appropriate transaction details and information necessary to verify the payment."
          },
          {
            "type": "p",
            "text": "The Institute may request additional information before processing a refund."
          },
          {
            "type": "p",
            "text": "Refunds will generally be made through an appropriate banking channel after verification."
          }
        ]
      },
      {
        "heading": "International payments",
        "blocks": [
          {
            "type": "p",
            "text": "International payments may be subject to currency conversion, payment gateway fees, bank charges, intermediary bank charges, or other transaction costs."
          },
          {
            "type": "p",
            "text": "Where a refund is approved for an international payment, the amount returned may differ from the original amount received because of:"
          },
          {
            "type": "list",
            "items": [
              "Currency exchange-rate fluctuations",
              "Bank charges",
              "Payment processor charges",
              "Intermediary bank fees; or",
              "Other applicable transaction costs."
            ]
          },
          {
            "type": "p",
            "text": "Where permitted, refunds will normally be issued through the original payment method."
          }
        ]
      },
      {
        "heading": "Refund and processing time",
        "blocks": [
          {
            "type": "p",
            "text": "For payments made by bank transfer, customers should retain their payment receipt or transaction confirmation."
          },
          {
            "type": "p",
            "text": "For a refund request, the customer may be required to provide appropriate transaction details and information necessary to verify the payment."
          },
          {
            "type": "p",
            "text": "The Institute may request additional information before processing a refund."
          },
          {
            "type": "p",
            "text": "Refunds will generally be made through an appropriate banking channel after verification."
          }
        ]
      },
      {
        "heading": "Contact us",
        "blocks": [
          {
            "type": "p",
            "text": "If you have questions, concerns, or requests regarding this Refund & Cancellation Policy or a payment, please contact us."
          },
          {
            "type": "p",
            "text": "Hikmah Academia Publishing Institute Pvt. Ltd."
          },
          {
            "type": "link",
            "text": "info@hapiacademia.com",
            "href": "mailto:info@hapiacademia.com"
          },
          {
            "type": "link",
            "text": "hapiacademia.com",
            "href": "https://hapiacademia.com"
          }
        ]
      }
    ]
  },
  {
    "slug": "legal",
    "title": "Legal & Company Information",
    "summary": "Registration details and legal information about the company.",
    "updated": "2026-08-14",
    "intro": [
      "Hikmah Academia Publishing Institute Pvt. Ltd. is an academic publishing and research support organization committed to advancing scholarly communication and supporting the global research community."
    ],
    "sections": [
      {
        "heading": "Company and legal name",
        "blocks": [
          {
            "type": "kv",
            "items": [
              [
                "Legal Name",
                "Hikmah Academia Publishing Institute Pvt. Ltd."
              ],
              [
                "Trading / Brand Name",
                "HAPI / Hikmah Academia Publishing Institute"
              ]
            ]
          }
        ]
      },
      {
        "heading": "Nature of organization",
        "blocks": [
          {
            "type": "p",
            "text": "We provide academic publishing, editorial, and research support services including journal publishing, book publishing, author support, academic events, and professional development services."
          }
        ]
      },
      {
        "heading": "Registered address",
        "blocks": [
          {
            "type": "p",
            "text": "Hikmah Academia Publishing Institute Private Limited, 2A/3 Front Side, Kundan Mansion, Asaf Ali Road, Darya Ganj, New Delhi, Central Delhi 110002, Delhi, India"
          }
        ]
      },
      {
        "heading": "Registration details",
        "blocks": [
          {
            "type": "kv",
            "items": [
              [
                "Company Type",
                "Private Limited"
              ],
              [
                "Registration No.",
                "U82192DL2024PTC429348"
              ],
              [
                "PAN",
                "AAHCH2908J"
              ]
            ]
          }
        ]
      },
      {
        "heading": "Official website",
        "blocks": [
          {
            "type": "p",
            "text": "Our official website provides information about our journals, services, policies, and other activities."
          },
          {
            "type": "link",
            "text": "https://hapiacademia.com",
            "href": "https://hapiacademia.com"
          }
        ]
      },
      {
        "heading": "Official contact",
        "blocks": [
          {
            "type": "p",
            "text": "For any enquiries, please contact us:"
          },
          {
            "type": "link",
            "text": "info@hapiacademia.com",
            "href": "mailto:info@hapiacademia.com"
          },
          {
            "type": "p",
            "text": "We aim to respond to all enquiries in a timely manner."
          }
        ]
      },
      {
        "heading": "Payments",
        "blocks": [
          {
            "type": "p",
            "text": "Payments on our website may include APC, registration fees, book proposal payments, editing services, memberships, and other academic services."
          },
          {
            "type": "p",
            "text": "We accept secure online payments, UPI, bank transfers and international payment methods."
          }
        ]
      },
      {
        "heading": "Intellectual property",
        "blocks": [
          {
            "type": "p",
            "text": "All content on this website, including text, logos, graphics, images, and other materials, is owned by Hikmah Academia Publishing Institute Pvt. Ltd. or used under authorization."
          },
          {
            "type": "p",
            "text": "No part of this website may be reproduced or used for commercial purposes without prior written permission."
          }
        ]
      },
      {
        "heading": "Third-party services",
        "blocks": [
          {
            "type": "p",
            "text": "Our website may use trusted third-party services for payment processing, communications, analytics, and other operational purposes. Their use is subject to their respective terms and privacy policies."
          }
        ]
      },
      {
        "heading": "Accuracy of information",
        "blocks": [
          {
            "type": "p",
            "text": "We strive to keep the information on this website accurate and up to date. However, information, services, fees, and policies may be updated or changed as required."
          }
        ]
      },
      {
        "heading": "Governing information",
        "blocks": [
          {
            "type": "p",
            "text": "This website and our services are operated in accordance with the applicable laws and regulations."
          },
          {
            "type": "p",
            "text": "Any legal matters concerning the organization or its services shall be governed accordingly."
          }
        ]
      }
    ]
  }
];
