import React from 'react';

const ListItem = ({ text }) => (
  <li className="pb-2 text-app-slate text-base">{text}</li>
);

const CoreSkills = () => {
  return (
    <div className="flex mx-auto  flex-wrap text-center justify-center">
      <div className="w-1/2 sm:w-1/3 md:w-1/6 mb-8">
        <h3 className="text-center text-app-lightestSlate mb-4">Backend</h3>
        <ul>
          <ListItem text="Node.js" />
          <ListItem text="Express" />
          <ListItem text="PHP" />
          <ListItem text="Laravel" />
          <ListItem text="REST APIs" />
        </ul>
      </div>
      <div className="w-1/2 sm:w-1/3 md:w-1/6 mb-8">
        <h3 className="text-center text-app-lightestSlate mb-4">Frontend</h3>
        <ul>
          <ListItem text="HTML and CSS" />
          <ListItem text="Javascript" />
          <ListItem text="Vue" />
          <ListItem text="React" />
          <ListItem text="Tailwind" />
          <ListItem text="Materialize" />
        </ul>
      </div>
      <div className="w-1/2 sm:w-1/3 md:w-1/6 mb-8">
        <h3 className="text-center text-app-lightestSlate mb-4">Datastores</h3>
        <ul>
          <ListItem text="MySQL" />
          <ListItem text="MongoDB" />
          <ListItem text="Cloud Firestore" />
        </ul>
      </div>
      <div className="w-1/2 xs:w-1/2 sm:w-1/3 md:w-1/6 mb-8">
        <h3 className="text-center text-app-lightestSlate mb-4">
          Infrastruture
        </h3>
        <ul>
          <ListItem text="Linux" />
          <ListItem text="AWS" />
          <ListItem text="Heroku" />
          <ListItem text="DigitalOcean" />
        </ul>
      </div>
      <div className="w-1/2 sm:w-1/3 md:w-1/6">
        <h3 className="text-center text-app-lightestSlate mb-4">Tools</h3>
        <ul>
          <ListItem text="Git" />
          <ListItem text="Docker" />
          <ListItem text="GitHub" />
          <ListItem text="Bitbucket" />
          <ListItem text="VS Code" />
          <ListItem text="Postman" />
        </ul>
      </div>
      <div className="w-1/2 sm:w-1/3 md:w-1/6">
        <h3 className="text-center text-app-lightestSlate mb-4">Practices</h3>
        <ul>
          <ListItem text="Agile" />
          <ListItem text="DevOps" />
          <ListItem text="CI/CD" />
          <ListItem text="TDD" />
        </ul>
      </div>
    </div>
  );
};

export default CoreSkills;
