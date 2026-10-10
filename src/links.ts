import type { ImageMetadata } from "astro";
import { appIcon } from "./icons";

export type IconName = "apps" | "game" | "map" | "code" | "link";
export type SocialIcon = "github" | "linkedin" | "instagram" | "mail";

interface NodeBase {
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
  bio: "I'm Federico, a software developer based in Italy. I make Quits, small Mac apps you pay for once, and mobile apps for teams like Rendi and Carrefour.",
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
    href: "https://apps.apple.com/app/rottenpdf/id6796244459",
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
  {
    title: "Side projects",
    icon: "code",
    children: [
      {
        title: "NERVE",
        description: "A one-thumb arcade game",
        icon: appIcon("nerve"),
        href: "https://fedeinfe.github.io/nerve-game/",
      },
      {
        title: "Aste Tribunale Arezzo",
        description: "Arezzo court auctions on a map",
        icon: "map",
        href: "https://fedeinfe.github.io/aste-tribunale-arezzo/",
      },
    ],
  },
];
