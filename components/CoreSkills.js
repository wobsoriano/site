import React from 'react';

const ListItem = ({ text }) => (
  <li className="pb-2 text-app-slate text-base">{text}</li>
);

const skills = [
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'Laravel', 'REST APIs'],
  },
  {
    title: 'Frontend',
    items: [
      'HTML and CSS',
      'Javascript',
      'Vue',
      'React',
      'Tailwind',
      'Materialize',
      'Ant Design',
    ],
  },
  {
    title: 'Datastores',
    items: ['MySQL', 'MongoDB', 'Cloud Firestore'],
  },
  {
    title: 'Infrastruture',
    items: ['Linux', 'AWS', 'Heroku', 'Digital Ocean'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Docker', 'GitHub', 'Bitbucket', 'VS Code', 'Postman'],
  },
  {
    title: 'Practices',
    items: ['Agile', 'DevOps', 'CI/CD', 'TDD'],
  },
];

const CoreSkills = () => {
  return (
    <div className="flex mx-auto  flex-wrap text-center justify-center">
      {skills.map(skill => (
        <div className="w-1/2 sm:w-1/3 md:w-1/6 mb-8" key={skill.title}>
          <h3 className="text-center text-app-lightestSlate mb-4">
            {skill.title}
          </h3>
          <ul>
            {skill.items.map(i => (
              <ListItem key={i} text={i} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CoreSkills;
