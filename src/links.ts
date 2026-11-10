import type { ImageMetadata } from "astro";
import { appIcon } from "./icons";

export type IconName = "apps" | "game" | "map" | "code" | "link" | "work";
export type SocialIcon = "github" | "linkedin" | "instagram" | "mail";

export interface NodeBase {
  title: string;
  description?: string;
  /** A built-in glyph, or an app's own icon through appIcon(). */
  icon?: IconName | ImageMetadata;
}

export interface LinkNode extends NodeBase {
  href: string;
}

export interface GroupNode extends NodeBase {
  children: TreeNode[];
}

export type TreeNode = LinkNode | GroupNode;

export const isGroup = (node: TreeNode): node is GroupNode => "children" in node;

export interface Social {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const profile = {
  name: "Federico Infelici",
  bio: "I'm Federico Infelici, a software developer since 2014, now a product engineer and consultant specializing in mobile apps and AI-driven development.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fedeinfe/", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/fede.dmg/", icon: "instagram" },
    { label: "GitHub", href: "https://github.com/fedeinfe", icon: "github" },
    { label: "Email", href: "mailto:fede.infe@icloud.com", icon: "mail" },
  ] satisfies Social[],
};

const quitsApp = (slug: string, title: string, description: string): LinkNode => ({
  title,
  description,
  icon: appIcon(slug),
  href: `https://getquits.app/apps/${slug}/`,
});

export const links: TreeNode[] = [
  {
    title: "Quits",
    description: "Mac apps you pay for once",
    icon: appIcon("quits"),
    children: [
      {
        title: "Quits store",
        description: "All 15 apps, with interactive demos",
        href: "https://getquits.app/",
      },
      {
        title: "System",
        children: [
          quitsApp("revs", "Revs", "Your Mac's vital signs"),
          quitsApp("eighty", "Eighty", "Keep your battery away from 100%"),
          quitsApp("vigil", "Vigil", "Keeps your Mac awake"),
          quitsApp("unwind", "Unwind", "Clears what coding with AI agents leaves behind"),
          quitsApp("freshen", "Freshen", "Find the apps that need an update"),
        ],
      },
      {
        title: "Focus",
        children: [
          quitsApp("stow", "Stow", "Menu bar icons, out of sight until you need them"),
          quitsApp("dusk", "Dusk", "The window in front stays bright"),
          quitsApp("orario", "Orario", "A calendar with a Join button"),
          quitsApp("pausa", "Pausa", "Every 20 minutes, look into the distance"),
        ],
      },
      {
        title: "Writing",
        children: [
          quitsApp("quickmd", "QuickMD", "A Markdown note in 2 keystrokes"),
          quitsApp("scrap", "Scrap", "Everything you've copied, on a shelf"),
        ],
      },
      {
        title: "Files & Web",
        children: [
          quitsApp("squish", "Squish", "Smaller images and videos, as soon as they arrive"),
          quitsApp("twofold", "Twofold", "Duplicate and look-alike photos, found and cleared"),
        ],
      },
      {
        title: "Audio & Video",
        children: [
          quitsApp("tone", "Tone", "Every app gets its own volume"),
          quitsApp("onda", "Onda", "A video link becomes a file on your Mac"),
        ],
      },
    ],
  },
  {
    title: "RottenPDF",
    description: "PDFs read aloud, karaoke-style",
    icon: appIcon("rottenpdf"),
    children: [
      { title: "App Store", href: "https://apps.apple.com/app/rottenpdf/id6796244459" },
      { title: "Google Play", href: "https://play.google.com/store/apps/details?id=com.fedeinfe.rottenpdf" },
    ],
  },
  {
    title: "eTuner",
    description: "A tuner that shows how to move each saddle",
    icon: appIcon("etuner"),
    href: "https://play.google.com/store/apps/details?id=com.fedeinfe.etuner",
  },
  {
    title: "Scratchy",
    description: "Show your partner exactly where to scratch",
    icon: appIcon("scratchy"),
    children: [
      { title: "App Store", href: "https://apps.apple.com/it/app/scratchy-the-perfect-spot/id6477536545" },
      { title: "Google Play", href: "https://play.google.com/store/apps/details?id=com.fedeinfe.scratchy" },
    ],
  },
  {
    title: "Rapp",
    description: "The freestyle rap app, #18 on the App Store",
    icon: appIcon("rapp"),
    children: [
      { title: "Instagram", href: "https://www.instagram.com/rappmobile/" },
      { title: "TikTok", href: "https://www.tiktok.com/@rappmobile" },
      { title: "The launch on Freestyle Rap Italiano", href: "https://freestylerapitaliano.it/rapp-app-freestyle.htm" },
    ],
  },
  {
    title: "Rendi",
    description: "Kids' clothes with a buy-back",
    icon: appIcon("rendi"),
    href: "https://rendi.it/",
  },
  {
    title: "Carrefour Italia",
    description: "Led the mobile app team, 2023–26",
    icon: appIcon("carrefour"),
    href: "https://apps.apple.com/it/app/carrefour-italia/id1496016087",
  },
];

export interface Experience {
  role: string;
  company: string;
  /** Years as shown, e.g. "2023–26" or "2026–now". */
  period: string;
  summary: string;
  icon: IconName | ImageMetadata;
  href?: string;
}

/** From LinkedIn, newest first. */
export const experience: Experience[] = [
  {
    role: "Product Engineer",
    company: "Rendi",
    period: "2026–now",
    summary: "Turning ideas into shipped products, from the first sketch to every iteration after launch.",
    icon: appIcon("rendi"),
  },
  {
    role: "Lead Mobile Developer",
    company: "Carrefour Italia",
    period: "2023–26",
    summary: "Tech lead of the omnichannel app (loyalty, shopping and in-store services): the team, code reviews, releases and third-party partners.",
    icon: appIcon("carrefour"),
  },
  {
    role: "Senior Software Engineer",
    company: "Freelance",
    period: "2022–now",
    summary: "Web and mobile products end to end: React Native apps, Node.js APIs, an LLM Telegram bot and sites for small businesses.",
    icon: "work",
  },
  {
    role: "Full Stack Developer & UI/UX Designer",
    company: "Hetalab",
    period: "2022–23",
    summary: "Backends and APIs for custom B2B software, including a 3D store-layout platform used by Guess.",
    icon: "work",
  },
  {
    role: "Co-founder & Mobile Developer",
    company: "Rapp",
    period: "2020–25",
    summary: "Built a consumer app from idea to market: #18 on the App Store, 30,000+ downloads and 2,500 monthly users at its peak.",
    icon: appIcon("rapp"),
  },
  {
    role: "Mobile App Developer",
    company: "Livemote",
    period: "2019–21",
    summary: "The whole mobile front end of a remote field-assistance platform, with chat and augmented-reality video calls.",
    icon: appIcon("livemote"),
    href: "https://www.livemote.com/enterprise/it/",
  },
];
