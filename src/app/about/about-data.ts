type AboutData = {
  title: string;
  descriptions: string[];
  images: { src: string; alt: string }[];
}[];

export const ABOUT_DATA: AboutData = [
  {
    title: 'A Little Bit About Me.',
    descriptions: [
      `I was born in Inverness and moved to Edinburgh in 2018. Previously an
  audio engineer, I moved into software because of the exploding tech
  industry in Scotland, and because computers had always come quite naturally to me, having built several PCs at that point and being
  relatively comfortable with a Windows Powershell.`,

      `After a period of self-learning and research into the landscape of modern software engineering, I attended CodeClan in Edinburgh, which allowed me to study the fundamentals of full-stack development and agile methodology that would prepare me for working within the dev team of a professional tech firm.`,
      `I was hired as a React developer at Astrosat in 2019 and spent the next 4 years working on enterprise applications, being trained by the seniors there, and eventually being promoted to mid-level, at which point I started to be assigned large features, and leading teams of up to three developers.`,
    ],
    images: [
      {
        src: '/face-cropped-2.jpg',
        alt: 'face-cropped-2',
      },
    ],
  },
  {
    title: 'Non-Work Coding.',
    descriptions: [
      `Outside of work, my main interest is actually software. I'm always
      working on some project, or have 10 MDN tabs open at any given time!
      I also enjoy a physical book, so over the last few years, I've cultivated
      a decent library of books on the subjects of everything from OOP design
      patterns to UX design philosophy. I consider myself very fortunate to have
      the opportunity to work in a field that genuinely interests me so much.`,
    ],
    images: [
      {
        src: '/rubber-duck.jpg',
        alt: 'rubber-duck',
      },
    ],
  },
  {
    title: 'Other Interests.',
    descriptions: [
      `I've been a musician for over 20 years, mainly with electric and acoustic
    guitars, but also with A cappella vocal music, and I performed for many years
    with one of Scotland's most successful wedding bands.`,
      `I'm a lifelong cyclist, mostly for general fitness and getting around
      the city, but I also enjoy competitive cycling, both in real life and with others from around
      the world via Peloton.`,
      `And for the last decade or so, I've been a big fan of speed-cubing, which is the pursuit
    of solving Rubik's cubes in the fastest times possible (28 seconds PB)!`,
    ],
    images: [
      {
        src: '/wedding-band.jpg',
        alt: 'wedding-band',
      },
    ],
  },
];
