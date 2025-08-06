import { Formik, Form } from "formik";
import * as Yup from "yup";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import MyTextArea from "../../ui/Inputs/MyTextArea";
import NumberInputFormik from "../../ui/Inputs/NumberInput";
import DropdownFormik from "../../ui/Inputs/Dropdown";  
import Heading from "../../ui/Typography/Heading/Heading";
import FilledButton from "../../ui/Buttons/FilledButton";

const schema = Yup.object({
  review: Yup.string().min(20).required("Review is required"),
  rating: Yup.number().min(1).max(5).required("Rating is required"),
  petType: Yup.string().oneOf(["Cat", "Dog"]).required("Pet type is required"),
});

export default function AddReview() {
  const { shelterId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[80%] border border-primary-color rounded-xl p-6">
        <Formik
          initialValues={{ review: "", rating: 0, petType: "" }}
          validationSchema={schema}
          onSubmit={async (vals, { setSubmitting }) => {
            const user = auth.currentUser;
            if (!user) {
              alert("Login first");
              return;
            }

            await addDoc(collection(db, "shelters", shelterId, "reviews"), {
              authorId: user.uid,
              authorName: user.displayName || "Anonymous",
              authorAvatar: user.photoURL || "",
              rating: vals.rating,
              petType: vals.petType.toLowerCase(),
              comment: vals.review,
              createdAt: serverTimestamp(),
            });

            setSubmitting(false);
            navigate(`/shelters/${shelterId}#reviews`);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <Heading className="text-center">Add Your Review</Heading>

              <MyTextArea
                label="Review"
                name="review"
                placeholder="Share your experience..."
              />

              <NumberInputFormik name="rating" min={1} max={5} />

              <DropdownFormik name="petType" options={["Cat", "Dog"]} />

              <FilledButton
                type="submit"
                className="bg-primary-color rounded-xl text-white w-[40%] mx-auto"
                disabled={isSubmitting}
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
