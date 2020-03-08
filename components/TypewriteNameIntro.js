import Typewriter from 'typewriter-effect';

const TypewriteNameIntro = () => {
  return (
    <Typewriter
      onInit={typewriter => {
        typewriter.typeString("Hi, I'm Robert Soriano.").start();
      }}
    />
  );
};

export default TypewriteNameIntro;
