import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type Blog = {
    description?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    blog?: Blog;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'SDG',
    description: 'A minimal NoSQL-inspired personal blog template built with Astro.js and Tailwind CSS, by sonam',
    image: {
        src: '/space-ahead-preview.jpeg',
        alt: 'Space Ahead ✨ - A minimal space-inspired personal blog template, created by Siddhesh Thadeshwar.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: withBase('/')
        },
        {
            text: 'Blog',
            href: withBase('/blog')
        },
        {
            text: 'Tags',
            href: withBase('/tags')
        },
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        },
        // {
        //     text: 'RSS Feed',
        //     href: withBase('/rss.xml')
        // },
        //         {
        //     text: 'Sitemap',
        //     href: withBase('/sitemap-index.xml')
        // }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/SDGV2734'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        eyebrowText: 'Join the Adventures',
        title: 'SDG ✨',
        text: "Written by Sonam Dorji Ghalley, join my journey.",
        image: {
            src: '/assets/images/pixeltrue-space-discovery.svg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Read Now',
                href: withBase('/blog')
            },
            
        ]
    },
    about: {
        title: 'About',
        text: "Hi there! I’m Sonam Dorji, a undergradute software engineer and data enthusiast who spent a little too much time trying to force unstructured data into rigid tables before finally seeing the light.I created this blog because, while SQL is the reliable old guard of the data world, NoSQL is where things get fast, flexible, and—let’s be honest—a little bit wild. Whether you're scaling a massive application or just trying to figure out why your document store isn't behaving, I’m here to help you navigate the world of 'Not Only SQL.' ",
    },
    contactInfo: {
        title: 'Contact',
        text: "Hi! Whether you have a question, a suggestion, or just want to share your thoughts, I'm all ears. Feel free to get in touch through any of the methods below:",
        email: {
            text: "Drop me an email and I’ll do my best to respond as soon as possible.",
            href: "mailto:example@example.com",
            email: "sonamdorjighalley2002@gmail.com"
        },
        socialProfiles: [
            {
                text: "LinkedIn",
                href: "https://www.linkedin.com/"
            },
            {
                text: "Peerlist",
                href: "https://www.peerlist.io/"
            },
            {
                text: "GitHub",
                href: "https://github.com/SDGV2734.git"
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Space Ahead',
    //     text: 'One update per week. All the latest stories in your inbox.',
    //     formUrl: '#'
    // },
    // blog: {
    //     description: "Read about my space adventures, explorations and the aliens I've met on my journeys."
    // },
    postsPerPage: 2,
    recentPostLimit: 3
};

export default siteConfig;
