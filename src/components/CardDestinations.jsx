import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export function CardDestinations() {
  return (
    <Card
      shadow={false}
      className=" mt-5 relative grid h-[30rem] w-[20rem] max-w-[28rem] items-end justify-center overflow-hidden"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative flex lg:flex-row flex-col p-3">
        <div className="flex flex-row border-white border rounded-full bg-white px-4 py-2 mb-2 lg:mb-0 lg:mr-2">
          <FaLocationDot className="mt-1 mr-2 text-red-500" />
          <p className="text-black font-bold">Indonesia</p>
        </div>
        <div className="flex flex-row border-white border rounded-full bg-white px-2 py-2">
          <FaStar className="mt-1 mr-2 text-yellow-500" />
          <p className="text-black font-bold">5.0</p>
        </div>
      </CardBody>
    </Card>
  );
}
