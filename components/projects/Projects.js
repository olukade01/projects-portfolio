import Project from './Project';
import LeftArrow from '../../public/assets/vectors/LeftArrow';
import RightArrow from '../../public/assets/vectors/RightArrow';
import lawparlance from '../../public/assets/images/lawparlance.png';
import Karasey from '../../public/assets/images/karasey.png';
import Hayak from '../../public/assets/images/Hayak1.png';
import Away from '../../public/assets/images/Frame 8.png';
import Appreciate from '../../public/assets/images/NAppreciate.png';
import Finbus from '../../public/assets/images/Finbus1.png';
import ECommerce from '../../public/assets/images/e-commerce.png';
import Hulupic from '../../public/assets/images/hulu.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

const projectArray = [
  {
    img: Away,
    alt: 'project-pic',
    title: 'Away Naija',
    desc: 'A social app specifically for the Nigerian diaspora community around the world to connect and help each other grow.',
    techStack: [
      'ReactNative',
      'TypeScript',
      'Expo',
      'Eas',
      'Rest Api',
      'StyledComponent',
    ],
    link: 'https://apps.apple.com/us/app/away-naija/id6446809515',
    link1:
      'https://play.google.com/store/apps/details?id=com.awaynaijaOrg.awaynaija',
  },
  {
    img: Hayak,
    alt: 'project-pic',
    title: 'Hayak',
    desc: 'Explore the beauty of Saudi Arabia through Hayak. Explore experiences, destinations and Saudi Arabian culture.',
    techStack: [
      'ReactNative',
      'TypeScript',
      'StyledComponent',
      'Expo',
      'Eas',
      'Firebase',
    ],
    link: 'https://apps.apple.com/us/app/hayak-tourists-app/id1617651141',
    link1:
      'https://play.google.com/store/apps/details?id=com.starthub.hayakuserapp&pli=1',
  },
  {
    img: lawparlance,
    alt: 'project-pic',
    title: 'Law Parlance',
    desc: 'Law Parlance is an all-in-one legal management tool for law practices',
    techStack: ['ReactJs', 'TypeScript', 'TailwindCss'],
    href: 'https://www.lawparlance.com/',
  },
  {
    img: ECommerce,
    alt: 'project-pic',
    title: 'Muzz Store',
    desc: 'An E-Commerce platform for ordering and paying for goods and sellers can list goods',
    techStack: [
      'NextJs',
      'MUI',
      'TailwindCss',
      'Sanity',
      'PayPal',
      'Redux',
      'ContextAPI',
      'Git',
    ],
    href: 'https://muz-store.vercel.app/',
  },
  {
    img: Appreciate,
    alt: 'project-pic',
    title: 'Appreciate MVP',
    desc: 'Appreciate is a Nigerian company that offers real estate investment services to clients',
    techStack: ['NextJs', 'TailwindCss', 'Typescript', 'Mailchimp', 'Git'],
    href: 'https://appreciate-mvp.vercel.app',
  },
  {
    img: Finbus,
    alt: 'project-pic',
    title: 'Global Finbus',
    desc: 'Global-Finbus is a website for accessing the skills and expertise of Bookkeepers, Controllers, and CPAs.',
    techStack: [
      'NextJs',
      'TypeScript',
      'TailwindCss',
      'Sanity',
      'Simpler-state',
    ],
    href: 'https://finbus-global.vercel.app',
  },
  {
    img: Hulupic,
    alt: 'Movie App',
    title: 'Movie App',
    desc: 'Movie app is a site for searching any movie, watching its trailer, viewing its details and seeing related movies.',
    techStack: ['NextJs', 'TailwindCss'],
    href: 'https://movie-app-dun-kappa.vercel.app/',
  },
  {
    img: Karasey,
    alt: 'project-pic',
    title: 'Karasey web app',
    desc: '',
    techStack: [
      'NextJs',
      'TailwindCss',
      'Node',
      'Firebase',
      'Express',
      'MongoDB',
      'Trello',
      'AWS',
      'Git',
    ],
    href: 'https://karasey.com/en',
  },
];

const Projects = ({ theme }) => {
  const ref = useRef();
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="projects"
      className="bg-projects dark:bg-dark-projects bg-no-repeat bg-cover bg-center py-[2rem] md:h-[60rem]"
    >
      <div className="md:ml-40 ml-10">
        <p className="text-lg mb-4 dark:text-[#B9B9B9]">FEATURED PROJECTS</p>
        <div className="flex justify-between pr-6 md:pr-10 items-center">
          <p className="text-4xl md:text-4xl font-bold">
            Stuff I&#39;ve Worked On 📁
          </p>
          <div className="flex">
            <div
              className="cursor-pointer w-10 h-10 rounded-md flex justify-center items-center border border-gray-300 dark:border-[#4F4F4F]"
              onClick={() => ref.current.slickPrev()}
            >
              {theme === 'light' ? <LeftArrow /> : <LeftArrow color="white" />}
            </div>
            <div
              className="cursor-pointer w-10 h-10 rounded-md  justify-center items-center flex border border-gray-300 dark:border-[#4F4F4F] ml-4"
              onClick={() => ref.current.slickNext()}
            >
              {theme === 'light' ? (
                <RightArrow />
              ) : (
                <RightArrow color="white" />
              )}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Slider ref={ref} {...settings}>
            {projectArray.map(
              (
                { title, desc, alt, img, techStack, href, link, link1 },
                index
              ) => (
                <Project
                  key={index}
                  alt={alt}
                  src={img}
                  text1={title}
                  text2={desc}
                  technologyArray={techStack}
                  href={href}
                  mobile={index === 0 || index === 1}
                  link={link}
                  link1={link1}
                />
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
