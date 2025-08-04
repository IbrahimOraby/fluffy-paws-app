import DogPaw from '../../assets/images/Dog paw-bro.png';
import Heading from './../Typography/Heading/Heading';

const EmptyShelters = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={DogPaw}
        className="w-[200px] md:w-[400px]"
        alt="Empty shelters"
      />
    </div>
  );
};

export default EmptyShelters;
