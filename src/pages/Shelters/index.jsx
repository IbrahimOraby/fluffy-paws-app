import { useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import ShelterCard from "./components/ShelterCard";
import FiltersMenu from "./components/FiltersMenu";
import Heading from "../../ui/Typography/Heading/Heading";
import sheltersDataStore from "../../store/sheltersData";
import LoadingSpinner from "../../ui/loading/LoadingSpinner";
import EmptyShelters from "../../ui/empty/EmptyShelters";

const Shelters = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const location = queryParams.get("location")?.toLowerCase();
  const animal = queryParams.get("animal")?.toLowerCase();
  const shelterType = queryParams.get("provider")?.toLowerCase();

  const {
    organizations,
    personalSitters,
    fetchOrganizations,
    fetchPersonalSitters,
    loading,
    error,
  } = sheltersDataStore();

  useEffect(() => {
    fetchOrganizations();
    fetchPersonalSitters();
  }, [fetchOrganizations, fetchPersonalSitters]);

  const filteredShelters = useMemo(() => {
    if (loading || (!organizations.length && !personalSitters.length))
      return [];

    const allShelters = [...organizations, ...personalSitters];

    return allShelters.filter((shelter) => {
      const matchesLocation =
        !location || location === "all"
          ? true
          : shelter.contact?.city?.toLowerCase().includes(location);

      const matchesShelterType =
        !shelterType || shelterType === "all"
          ? true
          : (shelterType === "organization" && shelter.info) ||
            (shelterType === "personal sitter" && shelter.petPreferences);

      let matchesAnimal = true;
      if (animal && animal !== "all") {
        if (shelter.info) {
          matchesAnimal = shelter.info.petTypes
            ?.map((pet) => pet.toLowerCase())
            .includes(animal);
        } else if (shelter.petPreferences) {
          matchesAnimal = shelter.petPreferences.petTypes
            ?.map((pet) => pet.toLowerCase())
            .includes(animal);
        } else {
          matchesAnimal = false;
        }
      }

      return matchesLocation && matchesAnimal && matchesShelterType;
    });
  }, [organizations, personalSitters, location, animal, shelterType, loading]);
  console.log(filteredShelters);
  return (
    <>
      <FiltersMenu />
      {error && (
        <p className="text-red-500 text-lg mt-6 text-center">Error: {error}</p>
      )}
      {!loading && (
        <div className="grid grid-cols-12 gap-y-7">
          <div className="col-start-2 col-span-full md:col-start-4">
            <Heading className="text-header-md text-header-color">
              Pet sitters in{" "}
              <span className="capitalize">
                {location && location !== "all" ? location : "Egypt"}
              </span>
            </Heading>
            <Heading className="text-header-sm text-header-color">
              {filteredShelters.length} Pet Sitters
            </Heading>
          </div>

          <div className="col-start-2 md:col-start-4">
            {filteredShelters.map((shelter) => {
              const isOrganization = Boolean(shelter.info);
              const data = isOrganization
                ? {
                    id: shelter.id,
                    type: "organization",
                    name: shelter.info.name,
                    image: shelter.branding?.organizationLogo?.cdnUrl || "",
                    city: shelter.contact?.city,
                    petTypes: shelter.info.petTypes || [],
                    description: shelter.branding?.description || "",
                    price: shelter.info.price || "",
                    website: shelter.info.website || "",
                  }
                : {
                    id: shelter.uid,
                    type: "personalSitter",
                    name: shelter.userName,
                    image: shelter.profileSetup.profilePicture.cdnUrl,
                    price: shelter.experience.price || "",
                    city: shelter.contact?.city,
                    petTypes: shelter.petPreferences?.petTypes || [],
                    description: shelter.aboutMe?.bio || "",
                    experience: shelter.experience?.yearsExperience || "N/A",
                  };

              return <ShelterCard key={data.id} {...data} />;
            })}
          </div>
        </div>
      )}
      {loading && <LoadingSpinner />}
      {!loading && filteredShelters.length === 0 && <EmptyShelters />}
    </>
  );
};

export default Shelters;
