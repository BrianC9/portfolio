import CheckpointTimeLine from './CheckpointTimeLine';

const education = [
  {
    id: 'daw',
    title: {
      en: 'Web Application development',
      es: 'Desarrollo de aplicaciones web',
    },
    place: 'Clara del Rey',
    year: 2021,
    classes: {
      en: [
        'Fullstack development with Java and Javascript',
        'Relational databases and SQL',
        'CVS with Git',
      ],
      es: [{}, {}],
    },
  },
  {
    id: 'gesticodi',
    title: {
      en: 'Information and Media Content Management',
      es: 'Gestión de la infomación y contenidos digitales',
    },
    place: 'Carlos III University of Madrid',
    year: 2021,
    classes: {
      en: [
        'Statistics',
        'Relational databases and SQL',
        'OOP with Python',
        'Data categorization',
        'Digital marketing',
      ],
      es: [{}, {}],
    },
  },
  {
    id: 'gvec',
    title: {
      en: 'Marketing and Commerce',
      es: 'Marketing y comercio',
    },
    place: 'Pablo Neruda',
    year: 2021,
    classes: {
      en: [
        'Digital Marketing',
        'Product Management',
        'Economic and financial management',
      ],
      es: [{}, {}],
    },
  },
];

function Timeline() {
  return (
    <div className='timeline w-full'>
      {education.map((element, idx) =>
        idx % 2 == 0 ? (
          <CheckpointTimeLine
            key={element.id}
            isLeft={false}
            checkpoint={element}
          />
        ) : (
          <CheckpointTimeLine
            key={element.id}
            isLeft={true}
            checkpoint={element}
          />
        )
      )}
    </div>
  );
}

export default Timeline;
