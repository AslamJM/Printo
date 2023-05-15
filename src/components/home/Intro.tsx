import Button from "../ui/Button";
import Heading from "../ui/Heading";

const Intro = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full md:w-1/2">
        <Heading className=" ml-0 md:ml-2 my-2">We Print</Heading>
        <Heading className="ml-4 md:ml-14 my-2 ">Whatever</Heading>
        <Heading className="ml-8 md:ml-28 my-2">Wherever</Heading>
        <p className="mt-6 text-xl  text-slate-600">
          Make your first order now. Enjoy the amazing quality of our work.
        </p>
        <div className="mt-6 flex items-center">
          <Button variant="default" className="mr-2">
            Samples
          </Button>
          <Button variant="default" className="ml-2">
            Order
          </Button>
        </div>
      </div>
      <div className="w-1/2 hidden md:flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-slate-200"></div>
      </div>
    </div>
  );
};

export default Intro;
