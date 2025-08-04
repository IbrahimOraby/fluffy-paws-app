import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import Heading from "../../../ui/Typography/Heading/Heading";
import {
  StaticAwardIcon,
  StaticBabyIcon,
  StaticBuildingIcon,
  StaticCalendarIcon,
  StaticInstagramIcon,
  StaticMapIcon,
  StaticPawIcon,
  StaticPhoneIcon,
} from "../../../ui/Icons/StaticIcons";

export default function AboutShelter({ shelterData, role }) {
  const contact = shelterData?.contact;

  const fullAddress = contact
    ? `${contact.street}, ${contact.district}, ${contact.city}, ${contact.postlCode}`
    : "";

  return (
    <>
      <div>
        {/* About Section */}
        <div className="bg-[#fef3f2] p-4 rounded-lg shadow-sm border border-[#fcd4d1] mb-4 space-y-4">
          <Heading className="text-lg font-semibold mb-2">About</Heading>

          {role === "organization" && (
            <Paragraph className="text-sm text-gray-700 leading-relaxed">
              {shelterData?.branding?.description}
            </Paragraph>
          )}
                    {role === "personal" && (
            <Paragraph className="text-sm text-gray-700 leading-relaxed">
                {shelterData.aboutMe.bio}
                </Paragraph>
          )}


        </div>

        {/* Info Section */}
        <div className="p-4 rounded-lg shadow-sm border border-gray-100 space-y-4">
          {/* Pet Types */}
          {shelterData?.info?.petTypes?.length > 0 && (
            <div>
              <Heading className="text-base font-semibold mb-2">
                Pet Types
              </Heading>
              <ul className="flex flex-wrap gap-2">
                {shelterData.info.petTypes.map((pet, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 bg-white px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700"
                  >
                    <StaticPawIcon className="w-4 h-4 text-[#BE5985]" />
                    {pet}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {role === "personal" && (
            <>
             

              {/* Availability Days */}
              {shelterData.availabilityFrequency?.availableDays?.length > 0 && (
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <StaticCalendarIcon size={20} />
                  <span className="font-bold">
                    Available Days:{" "}
                  </span>
                  <span>
                  {shelterData.availabilityFrequency.availableDays}
                  </span>
                </div>
              )}

              {/* Experience with pets */}
              {shelterData.experience?.yearsExperience && (
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <StaticAwardIcon size={20} />
                  <span className="font-bold">
                    Experience with pets:{" "}
                  </span>

                  <span>
                  {shelterData.experience.yearsExperience} years

                  </span>
                </div>
              )}

              {/* Home Info */}
              <div className="mt-4 space-y-2">

                {/* Kids at home */}
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <StaticBabyIcon size={20} />
                  <span className="font-bold">
                    Kids at home:{" "}
                  </span>
                  <span>
                  {shelterData.homeInfo?.hasKids ? "Yes" : "No"}

                  </span>
                </div>

                {/* Home Type */}
                {shelterData.homeInfo?.homeType && (
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <StaticBuildingIcon size={20} />
                    <span className="font-bold">Home type: </span>
                    <span>{shelterData.homeInfo.homeType}</span>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Instagram */}
          {shelterData?.branding?.instagramLink && (
            <div>
              <Paragraph className="inline-flex items-center gap-2 text-[#BE5985] hover:underline text-sm">
                <StaticInstagramIcon size={20} />
                {shelterData.branding.instagramLink}
              </Paragraph>
            </div>
          )}

          {/* Address */}
          {fullAddress && (
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <StaticMapIcon size={20} />
              <span>{fullAddress}</span>
            </div>
          )}

          {/* Phone Number */}
          {contact?.phoneNumber && (
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <StaticPhoneIcon size={20} />
              <span>{contact.phoneNumber}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
