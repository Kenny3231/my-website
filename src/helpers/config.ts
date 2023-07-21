import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
  title: 'DD',
  source: 'https://github.com/Kenny3231/my-website',
  baseUrl: 'https://as93.net',
  initialFeeds: [{ label: 'Notes', url: 'https://notes.aliciasykes.com/feed' }],
  additionalFeeds: [
    { label: 'Notes', url: 'https://notes.aliciasykes.com/feed' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/david-%F0%9F%94%B4%E2%9A%AB-dehos-2b51a088/',
    },
    //{label: 'BlogSpot',url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/blogger.atom', },
   
    // { label: 'Twitter', url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/twitter.atom' },
  ],

  routeLinks: [
    { label: 'Home', route: '/', color: 'var(--accent-1, #ff0099)' },
    {
      label: 'Blog',
      route: '/blog',
      color: 'var(--accent-2, #b45eff)',
      description: 'Articles publiés, notes, tutoriels et mises à jour',
    },
    {
      label: 'Projects',
      route: '/projects',
      color: 'var(--accent-3, #01c0f0)',
      description: 'Projet Personnel',
    },
    {
      label: 'Contact',
      route: '/contact',
      color: 'var(--accent-1, #ff0099)',
      description: 'Liens de profil social, formulaire de contact',
    },
    {
      label: 'About',
      route: '/about',
      color: 'var(--accent-4, #1de691)',
      description: 'Expérience professionnelle',
    },
  ],
  footerInfo: {
    author: 'DD',
    authorSite: 'https://github.com/Kenny3231',
    license: 'MIT',
    licenseLink: '',
    copyright: true,
  },
  githubUser: 'Kenny3231',
  defaultTheme: 'dark',
  defaultLanguage: 'fr',
  colorSchemes: {
    dark: {
      background: '#101010',
      foreground: '#fafafa',
      'dimmed-text': '#808080',
      'card-background': '#1b1b1b',
      'card-border': '1px solid #2a2a2a',
      'code-background': '#333',
      accent: '#01c0f0',
      'accent-1': '#ff0099',
      'accent-2': '#b45eff',
      'accent-3': '#01c0f0',
      'accent-4': '#1de691',
      'home-accent-background': '#2a3367',
      'home-accent-foreground': 'var(--foreground)',
    },
    light: {
      background: '#ededed',
      foreground: '#2a3367',
      'card-background': '#F8F8FF',
      'card-border': '1px solid #0000001a',
      'home-accent-background': '#2a3367',
      'home-accent-foreground': 'var(--background)',
    },
    callisto: {
      background: '#0a192f',
      foreground: '#dcdcdc',
      'dimmed-text': '#8892b0',
      'card-background': '#0b1021ba',
      'card-border': '1px solid #ffffff1a',
      'accent-1': '#00ccb4',
      'accent-2': '#00ccb4',
      'accent-3': '#00ccb4',
      'accent-4': '#00ccb4',
    },
  },
  workExperience: [
    {
      company: 'Ici',
      companyUrl: 'https://and.digital/',
      companyLogo: 'https://and.digital/favicon.ico',
      jobTitle: 'Le Poste',
      datesWorked: 'Janvier 2021 - Present',
      projectType: 'Muti-Clients',
      projects: [
        { name: 'Frasers Group', logo: 'https://i.ibb.co/sQcvxmG/Frasers.png', description: '', },
        { name: 'Lloyds Bank', logo: 'https://i.ibb.co/GCSDPCq/Lloyds-bank.jpg', description: '', },
      ],
      technologies: [ 'TypeScript', 'React Native', 'Azure' ],
    },
    {
      company: 'Armée',
      companyUrl: 'https://www.army.mod.uk/',
      companyLogo: 'https://i.ibb.co/gv6mbKw/Army.jpg',
      jobTitle: 'Soldier',
      datesWorked: '',
      responsibilities: '',
      projectType: 'Regiments',
      projects: [
        { name: 'Signals', logo: 'https://i.ibb.co/F5mhzkr/Signals.png', description: '', },
        { name: 'Oxford UOTC', logo: 'https://i.ibb.co/ZMH1TWq/ouotc.jpg', description: '', },
        { name: 'Intelligence Corps', logo: 'https://i.ibb.co/svn2XLq/mi.jpg', description: '', },
      ],
    },
  ],
  projectComplimentaryData: [
    {
      name: 'quick-example-of-testing-in-nodejs',
      thumbnail: 'https://i.ibb.co/WDpBStz/better-test3.png',
    },
    { name: 'personal-security-checklist', thumbnail: 'https://i.ibb.co/mTvmYGJ/personal-security-checklist.png' },
    { name: 'dotfiles', thumbnail: 'https://i.ibb.co/rH30RbM/Dotfiles.png' },
    { name: 'brewfile', thumbnail: 'https://i.ibb.co/N9c30xT/lissy93-brewfile-banner.png', },
    {
      name: 'dashy',
      featured: true,
      thumbnail:
        'https://repository-images.githubusercontent.com/343078060/82f850a2-b1af-4e9f-9245-c92700d74856',
    },
    {
      name: 'AdGuardian-Term',
      // featured: true,
      thumbnail: 'https://i.ibb.co/wgJDXs2/adguardian-banner-2.png',
    },
    {
      name: 'web-check',
      thumbnail: 'https://i.ibb.co/mSz2H3n/web-check-banner.png',
    },
    {
      name: 'portainer-templates',
      thumbnail: 'https://i.ibb.co/J2g5Czy/portainer-templates-banner.png',
    },
    {
      name: 'awesome-privacy',
      thumbnail:
        'https://repository-images.githubusercontent.com/512269935/6b38d78e-6e4d-484e-bbc8-e0dd81c97e0a',
    },
    {
      name: 'email-comparison',
      thumbnail: 'https://i.ibb.co/f8ZfxmW/email-comparison-screenshot.png',
    },
    {
      name: 'twitter-sentiment-visualisation',
      thumbnail: 'https://i.ibb.co/W0f10Vv/sentiment-sweep-grid.png',
    },
    {
      name: 'espanso-config',
      thumbnail:
        'https://repository-images.githubusercontent.com/362820466/b1ef9380-a909-11eb-9d34-2aaf94ed5d95',
    },
    { name: '', thumbnail: '' },
    { name: '', thumbnail: '' },
  ],
  postComplimentaryData: [
    {
      postRef: 'CLI tools you cant live without',
      thumbnail: 'https://i.ibb.co/F4THZ2T/cli-tools-banner.png',
    },
    {
      postRef: '20 git commands',
      thumbnail: 'https://i.ibb.co/yqtrTTS/git-commands-banner.png',
    },
    {
      postRef: 'useful css resources',
      thumbnail: 'https://i.ibb.co/CMxy3tz/css-resources-2.png',
    },
    {
      postRef: 'my top 50 windows apps',
      thumbnail: 'https://i.ibb.co/nmPRGgp/open-source-windows-apps.png',
    },
    {
      postRef: 'my top 50 android apps',
      thumbnail: 'https://i.ibb.co/cc8WP4K/App-icons-banner-medium.png',
    },
    {
      postRef: 'pimping up your duckduckgo',
      thumbnail: 'https://i.ibb.co/6XYydtq/Duck-Duck-Go-Themes.png',
    },
    {
      postRef: 'custom styling for listed',
      thumbnail: 'https://i.ibb.co/dMh1y13/listed-dark.png',
    },
    {
      postRef: 'fun with realtime data',
      thumbnail: 'https://i.ibb.co/HqJ77Mf/Fun-with-live-data-banner.png',
    },
    {
      postRef: 'fave youtube chanels',
      thumbnail: 'https://i.ibb.co/185MLZq/youtube-channels-banner.png',
    },
    {
      postRef: 'top 25 raspberry pi projects',
      thumbnail: 'https://i.ibb.co/LP1wZtc/Top-Raspberry-Pi-Projects.png',
    },
    {
      postRef: 'using espanso to boost efficiency',
      thumbnail: 'https://i.ibb.co/6W1Bqyz/espanso-config-banner.png',
    },
    {
      postRef: 'hello world',
      thumbnail: 'https://i.ibb.co/0rfWV1f/DSCN0566-1.jpg',
    },
    {
      postRef: 'dashy a selfhosted homelab dashboard',
      thumbnail: 'https://i.ibb.co/c6kTRch/dashy-theme.png',
    },
    { postRef: '', thumbnail: '' },
  ],
  contact: {
    name: 'DD',
    email: 'dd@gmail.com',
    website: 'https://aliciasykes.com',
    socials: {
      LinkedIn: 'in/david-%F0%9F%94%B4%E2%9A%AB-dehos-2b51a088/',
    },
    socialButtonLimit: 2,
    mailerConfig: {
      service_id: 'gmail',
      template_id: 'website-contact-form',
      user_id: 'user_K6F041q1dQvz8SJLSOZCR',
      template_params: {},
    },
  },
  about: {
    intro: 'Just your average dev...',
    bio: [
      "I'm Alicia, a London-based software engineer.",

      `I have a particular interest in privacy-respecting software, as well as security.
      I've carried out a few audits, and authored the initial versions of
      <a href="https://github.com/Lissy93/personal-security-checklist">Personal Security Checklist</a>
      and <a href="https://github.com/Lissy93/awesome-privacy">Awesome Privacy</a>.`,

      `I enjoy going to (<a href="https://notes.aliciasykes.com/p/0s5s3uOtKj">and sometimes winning!</a>) hackathons.
      And if you're London-based, you'll probably have bumped into me at a tech meetup.`,

      `I love Linux, and (imo) have a neat
      <a href="https://github.com/lissy93/dotfiles">dotfiles setup</a> which I'm always tweaking.
      And I have a small homelab, that I'm using to learn more about system administration,
      and host my own services to (attempt to) escape big tech.
      I made <a href="https://github.com/Lissy93/dashy">dashboard app</a> for it.
      `,

      `For work, I'm a principal software engineer at <a href="https://and.digital/">AND.Digital</a>,
      where I work across various client projects, help to upskill and mentor junior and mid-level
      developers and ensure that the code we're delivering is the best it can be.`,

      `Away from the keyboard, I like sports, hanging out with friends, and going to Church.`,
    ],
    picture: 'https://i.ibb.co/svxHFMD/alicia-sykes-3.jpg',
  },
  techStack: {
    backend: [
      {
        language: 'Rust',
        projects: ['AdGuardian-Term'],
      },
      {
        language: 'Go',
        projects: ['go-apod', 'OLD_AdGuardian-Term'],
      },
      {
        language: 'Node',
        projects: [' twitter-sentiment-visualisation', 'quick-example-of-testing-in-nodejs'],
      },
      {
        language: 'Python',
        projects: ['portainer-templates', 'gh-trending-no-cors', 'tfl-lift-availability-dash', 'pax'],
      },
      {
        language: 'Java',
        projects: ['Minesweper', 'AlternativeVoteSystem', 'TuneSender', 'TreasureHunt'],
      },
      {
        language: 'PHP',
        projects: [ 'revision-quizzes', 'intern-magnet', 'usermonkey' ],
      },
    ],
    frontend: [
      {
        language: 'Vue',
        projects: ['dashy', 'all-the-countries', 'alicia-sykes-website', 'tfl-lift-availability-dash'],
      },
      {
        language: 'React',
        projects: ['web-check'],
      },
      {
        language: 'Angular',
        projects: ['happy-app', 'realtime-speech-analytics'],
      },
      {
        language: 'Svelte',
        projects: ['my-website', 'cheat-code'],
      },
      {
        language: 'D3',
        projects: ['twitter-sentiment-visualisation', 'voronoi-site-template', 'happy-app', 'realtime-speech-analytics'],
      },
      {
        language: 'HTML',
        projects: ['md-cv-maker', 'email-extractor', 'bullet-convertor', 'cyber-defence-presentation', 'voronoi-site-template', 'web-dev-school'],
      },
      {
        language: 'CoffeeScript',
        projects: ['sentiment-analysis'],
      },
    ],
    mobile: [
      {
        language: 'Swift',
        projects: ['hasami-shogi', 'Spotter'],
      },
      {
        language: 'Kotlin',
        projects: ['anti-theft-charge'],
      },
      {
        language: 'Flutter',
        projects: ['nfu'],
      },
      {
        language: 'Android',
        projects: ['Minesweper', 'anti-theft-charge', 'TuneSender', 'TreasureHunt', 'got-home-safe', 'Study-Time'],
      },
      // {
      //   language: 'React Native',
      //   projects: [''],
      // },
    ],
    other: [
      {
        language: 'Bash',
        projects: ['minimal-terminal-prompt'],
      },
      {
        language: 'Docker',
        projects: ['docker-tcpdump', 'dashy'],
      },
      {
        language: 'Config',
        projects: ['dotfiles', 'espanso-config', 'conky-system-stats-widget', 'Brewfile'],
      },
      {
        language: 'Markdown',
        projects: ['personal-security-checklist', 'awesome-privacy'],
      },
    ],
  },
  techStackExtras: {
    devOps: [
      'Ansible', 'Kubernetes', 'Prometheus', 'GitHubActions', 'Grafana',
    ],
    cloud: [
      'Netlify', 'Vercel', 'CloudFlare', 'Azure', 'AWS', 'GCP',
    ],
    databases: [
      'MySQL', 'MongoDB', 'SQLite', 'Redis',
    ],
    testing: [
      'Jest', 'Puppeteer', 'Enzyme', 'Cypress',
    ],
    security: [
      'Nmap', 'OWASPZAP', 'BurpSuite', 'Wireshark',
    ],
  },
  plausible: {
    scriptSrc: 'https://no-track.as93.net/js/script.js',
    domain: 'as93.net',
  },
};

export default config;
