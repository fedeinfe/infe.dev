export type IconName = "apps" | "game" | "map" | "code" | "link";
export type SocialIcon = "github" | "linkedin" | "mail";

interface NodeBase {
  title: string;
  description?: string;
  /** Shown only on top-level rows. */
  icon?: IconName;
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
  bio: "I'm Federico, a software developer based in Italy. I build Quits, small Mac apps you pay for once, and a handful of web projects on the side.",
  socials: [
    { label: "GitHub", href: "https://github.com/fedeinfe", icon: "github" },
  ] satisfies Social[],
};

const quits = (slug: string) => `https://getquits.app/apps/${slug}/`;

export const links: TreeNode[] = [
  {
    title: "Quits",
    description: "Mac apps you pay for once",
    icon: "apps",
    children: [
      {
        title: "Quits store",
        description: "All 15 apps, with interactive demos",
        href: "https://getquits.app/",
      },
      {
        title: "Menu bar",
        children: [
          { title: "Tone", description: "Every app gets its own volume", href: quits("tone") },
          { title: "Stow", description: "Menu bar icons, out of sight until you need them", href: quits("stow") },
          { title: "Vigil", description: "Keeps your Mac awake", href: quits("vigil") },
          { title: "Revs", description: "Your Mac's vital signs", href: quits("revs") },
          { title: "Orario", description: "A calendar with a Join button", href: quits("orario") },
          { title: "QuickMD", description: "A Markdown note in 2 keystrokes", href: quits("quickmd") },
        ],
      },
      {
        title: "Focus & care",
        children: [
          { title: "Dusk", description: "The window in front stays bright", href: quits("dusk") },
          { title: "Pausa", description: "Every 20 minutes, look into the distance", href: quits("pausa") },
          { title: "Eighty", description: "Keep your battery away from 100%", href: quits("eighty") },
        ],
      },
      {
        title: "Files & cleanup",
        children: [
          { title: "Onda", description: "A video link becomes a file on your Mac", href: quits("onda") },
          { title: "Squish", description: "Smaller images and videos, as soon as they arrive", href: quits("squish") },
          { title: "Twofold", description: "Duplicate and look-alike photos, found and cleared", href: quits("twofold") },
          { title: "Scrap", description: "Everything you've copied, on a shelf", href: quits("scrap") },
          { title: "Freshen", description: "Find the apps that need an update", href: quits("freshen") },
          { title: "Unwind", description: "Clears what coding with AI agents leaves behind", href: quits("unwind") },
        ],
      },
    ],
  },
  {
    title: "NERVE",
    description: "A one-thumb arcade game",
    icon: "game",
    href: "https://fedeinfe.github.io/nerve-game/",
  },
  {
    title: "Aste Tribunale Arezzo",
    description: "Arezzo court auctions on a map",
    icon: "map",
    href: "https://fedeinfe.github.io/aste-tribunale-arezzo/",
  },
];
