import React, { useEffect, useState } from "react";
import Reviews from "../../ui/Reviews/Reviews";
import ShelterInfo from "./components/ShelterInfo";
import Booking from "./components/Booking";
import AboutShelter from "./components/AboutShelter";
import { useParams } from "react-router-dom";
import {
  getOrginzationDoc,
  getPersonalSitterDoc,
} from "../../services/firestore_service";
import LoadingSpinner from "./../../ui/loading/LoadingSpinner";

const Shelter = () => {
  const { id: shelterId } = useParams();
  const [shelterData, setShelterData] = useState();
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchShelterData = async (shelterId) => {
      setLoading(true);

      const orgDoc = await getOrginzationDoc(shelterId);
      if (orgDoc) {
        setShelterData(orgDoc);
        setRole("organization");
      } else {
        const personalDoc = await getPersonalSitterDoc(shelterId);
        setShelterData(personalDoc);
        setRole("personal");
      }

      setLoading(false);
    };
    fetchShelterData(shelterId);
  }, [shelterId]);
  console.log(shelterData);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-12 mb-12 px-8 md:px-0 mt-12">
        <div className=" col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
          <ShelterInfo role={role} shelterData={shelterData} />
        </div>

        <div
          className="flex flex-col lg:flex-row justify-center items-start gap-8 mt-10
          col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8"
        >
          <div className="flex-1 max-w-xl">
            <AboutShelter role={role} shelterData={shelterData} />
          </div>

          <div className="w-full  mx-auto max-w-sm">
            {role === "organization" && (
              <Booking role={role} shelterData={shelterData} />
            )}
          </div>
        </div>
      </div>

      <Reviews />
    </>
  );
};

export default Shelter;
