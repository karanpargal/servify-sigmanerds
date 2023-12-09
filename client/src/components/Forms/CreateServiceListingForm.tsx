import { Label } from '@radix-ui/react-label';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const ListingSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Title is required'),

  thumbhnail: Yup.string().required('Thumbnail is Required'),

  duration: Yup.number().required('Task Duration is required '),

  pricing: Yup.number().required('pricing is required'),
});

export default function CreateServiceListingForm() {
  return (
    <Formik
      initialValues={{
        title: '',
        thumbnail: '',
        description: '',
        duration: '',
        pricing: '',
      }}
      validationSchema={ListingSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="m-auto flex max-w-md flex-col gap-y-5">
            <div className="flex flex-col gap-3">
              <Label htmlFor="title">Service Name</Label>
              <Input
                type="name"
                name="title"
                className=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && errors.title}
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="thumbnail">Thumbnail</Label>
              <Input
                id="picture"
                type="file"
                className="flex"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.thumbnail}
              />
              {errors.thumbnail && touched.thumbnail && errors.thumbnail}
            </div>
            <Label htmlFor="description">Description</Label>

            <Textarea placeholder="Type your description here." />
            {errors.description && touched.description && errors.description}

            <div className="flex flex-col gap-3">
              <Label htmlFor="duration">Duration (in hrs)</Label>
              <Input
                type="number"
                name="duration"
                className="flex"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.duration}
              />
              {errors.duration && touched.duration && errors.duration}
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="pricing">Pricing</Label>
              <Input
                type="number"
                name="pricing"
                className="flex"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pricing}
              />
              {errors.pricing && touched.pricing && errors.pricing}
            </div>
            <div className="">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md border px-4 py-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}
