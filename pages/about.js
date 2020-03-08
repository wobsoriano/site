import CoreSkills from '../components/CoreSkills';

const about = () => {
  return (
    <>
      <div className="container">
        <div className="w-full px-4 md:px-6 text-xl leading-normal">
          <h1 className="text-app-lightestSlate font-bold font-sans break-normal mb-6 mt-2 text-3xl md:text-4xl">
            Core Skills
          </h1>
          <CoreSkills />
          <h1 className="text-app-lightestSlate font-bold font-sans break-normal mb-6 mt-4 text-3xl md:text-4xl">
            Where I've worked
          </h1>
          <p className="text-app-slate">Under Construction.</p>
        </div>
      </div>
    </>
  );
};

export default about;
