const __checkpoint = {
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
};
function CheckpointTimeLine({ isLeft, checkpoint }) {
  const { title, place, year, classes } = checkpoint;
  return (
    <div className={`containerTime   ${isLeft ? 'right' : 'left'}`}>
      <div className='contentTimeLine'>
        <h3 className='text-xl'>{title.en}</h3>
        <p className='font-semibold'>{place}</p>
        <p className='text-sm'>{year}</p>
        <p className='font/semibold'>Classes:</p>
        <ul className='list-disc pl-4'>
          {classes.en.map((value, idx) => (
            <li key={idx}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CheckpointTimeLine;
