import React from "react";
import { ErrorMessage, Formik, Form } from "formik";
import Heading from "../../../ui/Typography/Heading/Heading.jsx";
import FilledButton from "../../../ui/Buttons/FilledButton.jsx";
import MyTextArea from "../../../ui/Inputs/MyTextArea.jsx";
import NumberInputFormik from "../../../ui/Inputs/NumberInput.jsx";
import { MyCheckboxInput } from "../../../ui/Inputs/MyCheckboxInput.jsx";
import { reviewSchema } from "../../../schemas/reviewSchema.js";
import { addOrganizationReview } from "../../../services/firestore_service.js";
import { auth } from "../../../firebaseConfig";
import { useParams, useNavigate } from "react-router-dom";
import { StaticStarIcon } from "../../../ui/Icons/StaticIcons.jsx";
import DropdownFormik from "../../../ui/Inputs/Dropdown.jsx";

export default function AddReview() {
  // Get org/shelter ID from the URL
  const { shelterId } = useParams();
  const navigate = useNavigate();
  // Allowed rating values (used in the dropdown)
  const ratingOptions = ["1", "2", "3", "4", "5"];
  const initialValues = { review: "", rating: "", petType: [] };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" border border-primary-color rounded-xl p-6">
        <Formik
          initialValues={initialValues}
          validationSchema={reviewSchema}
          onSubmit={async (values, { setSubmitting }) => {
            // Ensure the user is logged in
            const user = auth.currentUser;
            if (!user) return alert("Please log in");
            // Persist the review in Firestore
            await addOrganizationReview(shelterId, {
              authorId: user.uid,
              authorName: user.displayName || "Anonymous",
              authorAvatar: user.photoURL || "",
              rating: values.rating,
              petType: values.petType[0],
              comment: values.review,
            });

            setSubmitting(false);

            navigate(-1);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6 flex flex-col items-center">
              <Heading className="text-center text-2xl block mb-3">
                Add Your Review
              </Heading>

              <MyTextArea
                label="Review"
                name="review"
                placeholder="Share your experience..."
                className="font-medium block mb-2"
              />

              <div className="flex justify-around mt-0">
                <div>
                  <label className="font-medium block mb-2">Rating</label>
                  <div>
                    {/* <NumberInputFormik
                      name="rating"
                      min={1}
                      max={5}
                      icon={<StaticStarIcon color="#F7C457" fill="#F7C457" />}
                    /> */}
                    <DropdownFormik
                      name="rating"
                      options={ratingOptions}
                      icon={<StaticStarIcon color="#F7C457" fill="#F7C457" />}
                    />
                    <ErrorMessage
                      name="rating"
                      component="div"
                      className="text-error text-sm mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium block mb-4 ">Pet Type</label>
                  <div className="flex gap-4 flex-wrap">
                    <MyCheckboxInput name="petType" value="cat" label="Cat" />
                    <MyCheckboxInput name="petType" value="dog" label="Dog" />
                  </div>
                  <ErrorMessage
                    name="petType"
                    component="div"
                    className="text-error text-sm mt-1"
                  />
                </div>
              </div>

              <FilledButton
                type="submit"
                disabled={isSubmitting}
                className="bg-primary-color rounded-xl text-white w-[50%]"
              >
                {isSubmitting ? "Saving..." : "Add Review"}
              </FilledButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
