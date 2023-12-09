import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';

const categoryies = [
  'Software Development',
  'Plumbing',
  'Electrical',
  'Carpentry',
  'Cleaning',
];

const CreateServiceListingSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  imageUrl: Yup.string().required('Service image is Required'),
  description: Yup.string()
    .required('Description is required')
    .min(50, 'Description must be atleast 50 characters long'),
  duration: Yup.number().required('Task Duration is required '),
  pricing: Yup.number().required('pricing is required'),
  category: Yup.string().oneOf(categoryies).required('Category is required'),
});

export default function CreateServiceListingForm() {
  const formik = useFormik({
    initialValues: {
      title: '',
      imageUrl: '',
      description: '',
      duration: '',
      pricing: '',
      category: '',
    },
    validationSchema: CreateServiceListingSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="space-y-6">
      <div className="space-y-1">
        <Label htmlFor="name">Title</Label>
        <Input
          type="text"
          name="title"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title && (
          <div className="text-xs text-red-500">{formik.errors.title}</div>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.errors.description && formik.touched.description && (
          <div className="text-xs text-red-500">
            {formik.errors.description}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="duration">Duration</Label>
        <Input
          type="number"
          name="duration"
          id="duration"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.duration}
        />
        {formik.errors.duration && formik.touched.duration && (
          <div className="text-xs text-red-500">{formik.errors.duration}</div>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="pricing">Pricing</Label>
        <Input
          type="number"
          name="pricing"
          id="pricing"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pricing}
        />
        {formik.errors.pricing && formik.touched.pricing && (
          <div className="text-xs text-red-500">{formik.errors.pricing}</div>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="category">Category</Label>
        <Select
          onValueChange={(value) => formik.setFieldValue('category', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose your service category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categoryies.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {formik.errors.category && formik.touched.category && (
          <div className="text-xs text-red-500">{formik.errors.category}</div>
        )}
      </div>

      <Button
        disabled={formik.isSubmitting}
        type="button"
        className="w-full rounded-md"
        onClick={() => formik.handleSubmit()}
      >
        Submit
      </Button>
    </form>
  );
}
