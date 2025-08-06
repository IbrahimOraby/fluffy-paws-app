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

export default function AddReview() {
  const { shelterId } = useParams();
  const navigate = useNavigate();

  const initialValues = { review: "", rating: 1, petType: [] };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="min-w-[50%] border border-primary-color rounded-xl p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={reviewSchema}
          onSubmit={async (vals, { setSubmitting }) => {
            const user = auth.currentUser;
            if (!user) return alert("Please log in");

            await addOrganizationReview(shelterId, {
              authorId: user.uid,
              authorName: user.displayName || "Anonymous",
              authorAvatar: user.photoURL || "",
              rating: vals.rating,
              petType: vals.petType[0],
              comment: vals.review,
            });

            setSubmitting(false);
            // navigate(`/shelters/${shelterId}`);
            navigate(-1);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6 flex flex-col items-center">
              <Heading className="text-center">Add Your Review</Heading>

              <MyTextArea
                label="Review"
                name="review"
                placeholder="Share your experience..."
              />

              <NumberInputFormik
                name="rating"
                min={1}
                max={5}
                icon={<StaticStarIcon color="#F7C457" fill="#F7C457" />}
              />

              <div>
                <label className="font-medium block mb-2">Pet Type</label>
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
