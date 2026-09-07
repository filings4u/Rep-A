// ============================================================================
// filings4u — Specialty Service Pricing
// Extends the shared CENTRAL_SERVICE_PLAN_DB used by website + admin portal.
// ============================================================================

(function () {
  "use strict";

  window.CENTRAL_SERVICE_PLAN_DB = window.CENTRAL_SERVICE_PLAN_DB || {};

  const specialtyPackagePayload = {
    "web-design-packages": {
      name: "Web Design Packages",
      category: "design",
      requiresJurisdiction: false,
      starter: 699.00,
      compliance: 1499.00,
      enterprise: 2999.00,
      tierLabels: {
        starter: "Launch",
        compliance: "Business",
        enterprise: "Growth"
      },
      tierDescriptions: {
        starter: "A professional website for getting online quickly",
        compliance: "A stronger business site built to convert",
        enterprise: "A complete growth-focused website experience"
      },
      bullets: {
        starter: [
          "1–3 page custom website",
          "Mobile-responsive design",
          "Contact / lead form",
          "Basic on-page SEO setup",
          "Social media links",
          "1 revision round",
          "Launch assistance"
        ],
        compliance: [
          "Everything in Launch",
          "Up to 7 custom pages",
          "Enhanced lead forms and calls-to-action",
          "Google Analytics / tracking setup",
          "Expanded on-page SEO structure",
          "Basic third-party integrations",
          "2 revision rounds",
          "30 days post-launch support"
        ],
        enterprise: [
          "Everything in Business",
          "Up to 12 custom pages",
          "CMS, blog, catalog or e-commerce setup",
          "Advanced forms and workflow integrations",
          "Conversion-focused page structure",
          "Performance and technical SEO review",
          "3 revision rounds",
          "60 days post-launch support"
        ]
      }
    },

    "logo-design-packages": {
      name: "Logo Design Packages",
      category: "design",
      requiresJurisdiction: false,
      starter: 149.00,
      compliance: 299.00,
      enterprise: 499.00,
      tierLabels: {
        starter: "Essential",
        compliance: "Brand",
        enterprise: "Signature"
      },
      tierDescriptions: {
        starter: "A clean professional identity for a new business",
        compliance: "More concepts, revisions and usable brand assets",
        enterprise: "A complete logo identity and mini brand system"
      },
      bullets: {
        starter: [
          "2 original logo concepts",
          "2 revision rounds",
          "Full-color logo",
          "Black and white version",
          "PNG and JPG delivery",
          "Transparent-background files"
        ],
        compliance: [
          "Everything in Essential",
          "3 original logo concepts",
          "4 revision rounds",
          "SVG and print-ready PDF files",
          "Primary and alternate logo layouts",
          "Social profile icon",
          "Basic color palette"
        ],
        enterprise: [
          "Everything in Brand",
          "5 original logo concepts",
          "6 revision rounds",
          "Complete vector and web file package",
          "Primary, alternate and icon marks",
          "Brand color specifications",
          "Typography recommendations",
          "Mini brand usage guide",
          "Social media brand kit"
        ]
      }
    },

    "shipper-packages": {
      name: "Shipper Setup Packages",
      category: "broker-operations",
      requiresJurisdiction: false,
      starter: 99.00,
      compliance: 199.00,
      enterprise: 349.00,
      tierLabels: {
        starter: "Shipper Basic",
        compliance: "Shipper Pro",
        enterprise: "Shipper Complete"
      },
      tierDescriptions: {
        starter: "Core documents for onboarding a new shipper",
        compliance: "A more complete broker-to-shipper setup packet",
        enterprise: "A full operational shipper onboarding system"
      },
      bullets: {
        starter: [
          "Shipper / customer information form",
          "Broker-shipper agreement template",
          "Credit application template",
          "Billing and accounts-payable information form",
          "Document checklist",
          "Editable digital delivery"
        ],
        compliance: [
          "Everything in Shipper Basic",
          "Shipper credit-reference form",
          "Claims and cargo instructions sheet",
          "Load tender / shipment information template",
          "Accessorial charge schedule template",
          "Broker credentials checklist",
          "Branded packet formatting"
        ],
        enterprise: [
          "Everything in Shipper Pro",
          "Custom shipper onboarding questionnaire",
          "Standard operating procedure intake form",
          "Billing dispute / exception process template",
          "Customer-specific rate / lane profile sheet",
          "Document naming and retention structure",
          "Editable master onboarding packet",
          "One customization session"
        ]
      }
    },

    "carrier-packages-brokers": {
      name: "Carrier Setup Packages for Brokers",
      category: "broker-operations",
      requiresJurisdiction: false,
      starter: 99.00,
      compliance: 199.00,
      enterprise: 349.00,
      tierLabels: {
        starter: "Carrier Basic",
        compliance: "Carrier Pro",
        enterprise: "Carrier Complete"
      },
      tierDescriptions: {
        starter: "Core documents brokers use to onboard motor carriers",
        compliance: "Expanded compliance and payment onboarding",
        enterprise: "A complete reusable broker carrier-onboarding system"
      },
      bullets: {
        starter: [
          "Carrier profile / setup form",
          "Broker-carrier agreement template",
          "W-9 request checklist",
          "MC / DOT authority information form",
          "Insurance certificate requirements checklist",
          "Editable digital delivery"
        ],
        compliance: [
          "Everything in Carrier Basic",
          "ACH / payment information form",
          "Factoring company notice form",
          "Equipment and operating-area profile",
          "Safety and compliance questionnaire",
          "Carrier document checklist",
          "Branded packet formatting"
        ],
        enterprise: [
          "Everything in Carrier Pro",
          "Carrier qualification review worksheet",
          "Insurance expiration tracking sheet",
          "Authority and safety-review checklist",
          "No-double-brokering acknowledgement",
          "Carrier performance scorecard template",
          "Reusable onboarding workflow checklist",
          "One customization session"
        ]
      }
    },

    "carrier-packages-truckers": {
      name: "Carrier Packages for Trucking Companies",
      category: "carrier-operations",
      requiresJurisdiction: false,
      starter: 79.00,
      compliance: 149.00,
      enterprise: 249.00,
      tierLabels: {
        starter: "Carrier Ready",
        compliance: "Carrier Pro",
        enterprise: "Fleet Ready"
      },
      tierDescriptions: {
        starter: "A clean carrier packet for getting set up with brokers",
        compliance: "A more complete packet with payment and fleet details",
        enterprise: "A polished reusable package for fleets and active carriers"
      },
      bullets: {
        starter: [
          "Carrier company profile sheet",
          "W-9 packet checklist",
          "MC / DOT authority document checklist",
          "Certificate of insurance checklist",
          "Primary contact and dispatch information sheet",
          "Editable digital delivery"
        ],
        compliance: [
          "Everything in Carrier Ready",
          "ACH / payment information sheet",
          "Factoring notice template",
          "Equipment profile",
          "Lane / operating-area profile",
          "Driver / dispatch contact sheet",
          "Broker submission checklist"
        ],
        enterprise: [
          "Everything in Carrier Pro",
          "Fleet profile and equipment schedule",
          "Safety / compliance summary sheet",
          "Insurance and authority expiration tracker",
          "Branded carrier capability statement",
          "Reusable broker onboarding cover sheet",
          "Organized digital carrier packet folder structure",
          "One customization session"
        ]
      }
    }
  };

  Object.assign(window.CENTRAL_SERVICE_PLAN_DB, specialtyPackagePayload);

  window.FILINGS4U_SPECIALTY_PRICING = {
    packages: specialtyPackagePayload
  };
})();
