import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "rxKU8jyzkxyCWqdqvjX6Ck",
      token: "7axkhbtt0OyMfSypAgGS6oTD1DG0NiBBGdcrZrGjKliqLJRyhSDImtRx3WiDQfr0f9nCbXFNqvWyFYt3TXw",
    },
  ],
  preview: process.env.NODE_ENV !== 'production',
});

// Import ALL your components
import CTASection from "./pages/com/CTASection";
import Banner from "./pages/com/Banner";        // Your CSS Banner
import Products from "./pages/com/Products";     // Products grid
import About from "./pages/com/About";          // About + stats
import SimpleButton from "./pages/com/Button";
import Services from "./pages/com/Services";
import Work from "./pages/com/Work";            // Portfolio grid
import BannerSection from "./pages/com/BannerSection"; // Plasmic Banner
import DateTimeStepStatic from "./pages/com/DateTimeStepStatic";
import ServiceSelectionStatic from "./pages/com/ServiceSelectionStatic";

// Register ALL components
PLASMIC.registerComponent(CTASection, {
  name: "CTASection",
  props: {
    heading: { type: "string", defaultValue: "Have a question? Contact us!" },
    headingColor: { type: "color", defaultValue: "#1a1a1a" },
    headingSize: { type: "string", defaultValue: "1.75rem" },
    subtext: { type: "string", defaultValue: "Call by clicking the button →" },
    subtextColor: { type: "color", defaultValue: "#666666" },
    buttonText: { type: "string", defaultValue: "Call us" },
    buttonHref: { type: "string", defaultValue: "tel:+14031234567" },
    buttonIcon: {
      type: "choice",
      options: ["phone", "mail", "message-circle", "headphones"],
      defaultValue: "phone"
    },
    buttonBgColor: { type: "color", defaultValue: "#D97639" },
    buttonTextColor: { type: "color", defaultValue: "white" },
  },
});
PLASMIC.registerComponent(Services, {
  name: "Services",
  props: {
    title: {
      type: "string",
      defaultValue: "Our Services"
    },
    activeFilter: {
      type: "choice",
      options: ["all", "Haircut", "Beard", "Kids"],
      defaultValue: "Haircut"
    }
  }
});

PLASMIC.registerComponent(DateTimeStepStatic, {
  name: "DateTimeStepStatic",
  props: {
    title: {
      type: "string",
      defaultValue: "Book Your Appointment"
    }

  }
});

PLASMIC.registerComponent(ServiceSelectionStatic, {
  name: "ServiceSelectionStatic",
  props: {
    title: {
      type: "string",
      defaultValue: "Book Your Appointment",
    },
    tabAlign: {
      type: "choice",
      options: ["left", "center", "right"], // Plasmic will show a dropdown
      defaultValue: "center",               // default alignment
      description: "Alignment of the department tabs",
    },
    servicesView: {
      type: "choice",
      options: ["grid", "list", "flex"], // Display style for services
      defaultValue: "grid",
      description: "Layout style for the services (grid, list, or horizontal flex)",
    },
  },
});
PLASMIC.registerComponent(Banner, {
  name: "Banner",
  description: "Pure CSS animated banner slider",
  props: {
    title: { type: "string", defaultValue: "Simple Web Solutions" },
    subtitle: { type: "string", defaultValue: "Responsive designs & SEO" },
    buttonText: { type: "string", defaultValue: "Get Started" },
    buttonLink: { type: "string", defaultValue: "#products" },
    slide1Bg: { type: "string", defaultValue: "linear-gradient(to br, #3b82f6, #9333ea)" },
    slide2Bg: { type: "string", defaultValue: "linear-gradient(to br, #10b981, #f59e0b)" },
    slideDuration: { type: "string", defaultValue: "20s" },
  },
});

PLASMIC.registerComponent(Products, {
  name: "Products",
  props: {
    title: {
      type: "string",
      defaultValue: "Our Products"
    },
    // Pass entire products array as ONE prop
    productsData: {
      type: "array",
      defaultValue: [
        {
          img: "https://via.placeholder.com/400x200/2563eb/ffffff",
          title: "Pro Slider Kit",
          description: "Responsive carousels"
        }
      ]
    }
  }
});

PLASMIC.registerComponent(SimpleButton, {
  name: "SimpleButton",
  props: {
    id: "string",
    title: "string"
  }
});

PLASMIC.registerComponent(About, {
  name: "About",
  props: {
    title: {
      type: "string",
      defaultValue: "About Us",
    },
    description: {
      type: "string",
      defaultValue:
        "Jaipur-based team creating pure CSS sites. Fast, responsive, and SEO-friendly—from concept to launch.",
    },
    stats: {
      type: "array",
      itemType: {
        type: "object",
        fields: {
          value: { type: "string" },
          label: { type: "string" },
        },
      },
      defaultValue: [
        { value: "10+", label: "Projects Live" },
        { value: "100%", label: "Mobile-First" },
      ],
    },
  },
});


PLASMIC.registerComponent(Work, {
  name: "Work",
  props: {
    title: {
      type: "string",
      defaultValue: "Our Work",
    },
    works: {
      type: "array",
      itemType: {
        type: "object",
        fields: {
          img: { type: "string" },
          title: { type: "string" },
          alt: { type: "string" },
          description: { type: "string" },
        },
      },
      defaultValue: [
        {
          img: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
          title: "Miami Restaurant",
          alt: "Miami Restaurant Site",
          description: "A vibrant website for a Miami-based restaurant.",
        },
        {
          img: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg",
          title: "Orlando Portfolio",
          alt: "Orlando Portfolio",
          description: "Creative portfolio for Orlando design agency.",
        },
      ],
    },
  },
});

PLASMIC.registerComponent(BannerSection, {
  name: "BannerSection",
  description: "Advanced hero banner with buttons",
  props: {
    title: { type: "string", defaultValue: "Build modern experiences" },
    subtitle: { type: "string", defaultValue: "Welcome" },
    description: { type: "string", defaultValue: "Fully customizable banner" },
    backgroundImage: { type: "imageUrl" },
    primaryButtonText: { type: "string", defaultValue: "Get Started" },
    primaryButtonHref: { type: "string", defaultValue: "/get-started" },
    secondaryButtonText: { type: "string", defaultValue: "Learn More" },
    secondaryButtonHref: { type: "string", defaultValue: "/about" },
  },
});
