
interface ExperienceCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
}

function ExperienceCard({
  imageSrc,
  title,
  subtitle,
  description,
  bulletPoints,
}: ExperienceCardProps) {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <img src={imageSrc} alt={title} className="w-16 h-16 mx-auto mb-4 rounded-full" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <h3 className="text-gray-500 mb-2">{subtitle}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="list-disc list-inside">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

const ExperienceCardList: React.FC = () => {
  const ExperienceCards = [
    {
      imageSrc: 'image-url-1',
      title: 'ExperienceCard Title 1',
      subtitle: 'Subtitle 1',
      description: 'ExperienceCard description goes here.',
      bulletPoints: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
    },
    // Add more ExperienceCard objects here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ExperienceCards.map((experienceCard, index) => (
        <ExperienceCard key={index} {...experienceCard} />
      ))}
    </div>
  );
};

export default ExperienceCardList;
