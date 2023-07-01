type AboutData = {
  title: string;
  descriptions: string[];
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
      `I was hired as a React developer at Astrosat in 2019 and spent the next nearly 4 years working on enterprise applications, being trained by the seniors there, and eventually being promoted to mid-level, when I assigned large features, and leading teams of up to three developers.`,
    ],
  },
  {
    title: 'Non-Work Coding.',
    descriptions: [
      `Outside of work, my main interest is actually software. I'm always working on some project, or have 10 MDN tabs open at any given time! I also enjoy a physical book, so over the last few years, I've cultivated a decent library of books on the subjects of everything from OOP design patterns to UX design philosophy. I consider myself very fortunate to have the opportunity to work in a field that genuinely interests me so much.`,
    ],
  },
  {
    title: 'Music.',
    descriptions: [
      `I've been a musician for over 20 years, mainly with electric guitars. I started playing when I was about 12, and in my 20s, worked briefly as a session musician, then a private teacher, then eventually in a successful wedding band. I still play today, but I've shifted focus more online now as opposed to in-person, as evident in the Functional Player app.`,
    ],
  },
  {
    title: 'Cycling.',
    descriptions: [
      `I've been a lifelong cyclist, something I picked up from my Dad. As well as for general fitness and getting about the city, I also cycle competitively, appearing in the top 100 of many Peloton online tracks. Possibly next year, I hope to undertake the famous Four Countries of Lake Constance tour of Austria, Germany, Liechtenstein and Switzerland.`,
    ],
  },
];
