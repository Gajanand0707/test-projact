import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "rxKU8jyzkxyCWqdqvjX6Ck",
      token: "7axkhbtt0OyMfSypAgGS6oTD1DG0NiBBGdcrZrGjKliqLJRyhSDImtRx3WiDQfr0f9nCbXFNqvWyFYt3TXw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: process.env.NODE_ENV !== 'production',

});
import CTASection from "./pages/com/CTASection";

PLASMIC.registerComponent(CTASection, {
  name: "CTASection",
  props: {
    heading: { type: "string", description: "Main heading", defaultValue: "Have a question? Contact us!" },
    headingColor: { type: "color", description: "Heading color", defaultValue: "#1a1a1a" },
    headingSize: { type: "string", description: "Heading font size", defaultValue: "1.75rem" },
    subtext: { type: "string", description: "Subtext/description", defaultValue: "Call by clicking the button on the right →" },
    subtextColor: { type: "color", description: "Subtext color", defaultValue: "#666666" },
    subtextSize: { type: "string", description: "Subtext font size", defaultValue: "1.125rem" },
    buttonText: { type: "string", description: "Button text", defaultValue: "Call us" },
    buttonHref: { type: "string", description: "Button link (tel: or URL)", defaultValue: "tel:+14031234567" },
    buttonIcon: {
      type: "choice",
      description: "Button icon",
      options: [
        "phone", "mail", "message-circle", "headphones", "help-circle",
        "arrow-right", "chevron-right", "external-link"
      ],
      defaultValue: "phone"
    },
    buttonBgColor: { type: "color", description: "Button background", defaultValue: "#D97639" },
    buttonTextColor: { type: "color", description: "Button text color", defaultValue: "white" },
    buttonHoverColor: { type: "color", description: "Button hover color", defaultValue: "#C06020" },
    bgColor: { type: "color", description: "Background color", defaultValue: "white" },
    borderColor: { type: "color", description: "Border color", defaultValue: "#e5e7eb" },
    padding: { type: "string", description: "Section padding", defaultValue: "2.5rem 3rem" },
    margin: { type: "string", description: "Section margin", defaultValue: "3rem 0" },
    maxWidth: { type: "string", description: "Maximum width", defaultValue: "1280px" },
  },
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
