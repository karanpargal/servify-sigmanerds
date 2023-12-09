import { LogInWithAnonAadhaar, useAnonAadhaar } from 'anon-aadhaar-react';

import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import Button from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Switch } from '../ui/switch';

const UserDetailsSchema = Yup.object().shape({
  name: Yup.string().trim().max(150, 'Too Long!').required('Name is required'),

  email: Yup.string().trim().email().required('Email is required'),

  age: Yup.number()
    .required('Age is Required')
    .min(15, 'Minimmun Age should be 15'),

  bio: Yup.string().trim(),
  sex: Yup.string()
    .oneOf(['male', 'female', 'non-binary', 'undisclosed'])
    .required('Specify Your gender'),
  address: Yup.string().trim().required('Address is required'),
  anonAadhaarLoggedIn: Yup.boolean()
    .required('Anon Aadhaar verification is required!')
    .oneOf([true], 'Anon Aadhaar verification is required!'),
});

export default function UserDetailsForm() {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    if (anonAadhaar.status === 'logged-in') {
      formik.setFieldValue('anonAadhaarLoggedIn', true);
    }
  }, [anonAadhaar]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: '',
      sex: '',
      bio: '',
      providerPreference: false,
      address: '',
      anonAadhaarLoggedIn: false,
    },
    validationSchema: UserDetailsSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.touched);
  console.log(formik.errors);

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-1">
        <Label>Verify your identity with Anon Aadhaar</Label>
        <LogInWithAnonAadhaar />
        {formik.errors.anonAadhaarLoggedIn &&
          formik.touched.anonAadhaarLoggedIn && (
            <div className="text-xs text-red-500">
              {formik.errors.anonAadhaarLoggedIn}
            </div>
          )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-xs text-red-500">{formik.errors.name}</div>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="text-xs text-red-500">{formik.errors.email}</div>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="age">Age</Label>
        <Input
          type="age"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.errors.age && formik.touched.age && (
          <div className="text-xs text-red-500">{formik.errors.age}</div>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="sex">Gender</Label>
        <Select onValueChange={(value) => formik.setFieldValue('sex', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Define your sex" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>I am</SelectLabel>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="non-binary">Non-Binary</SelectItem>
              <SelectItem value="undisclosed">Prefer not to say</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {formik.errors.sex && formik.touched.sex && (
          <div className="text-xs text-red-500">{formik.errors.sex}</div>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="bio">
          Bio <em className="font-light">(optional)</em>
        </Label>
        <Input
          type="bio"
          name="bio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bio}
        />
        {formik.errors.bio && formik.touched.bio && (
          <div className="text-xs text-red-500">{formik.errors.bio}</div>
        )}
      </div>
      <div className="space-y-1">
        <div className="flex items-center space-x-3">
          <Switch
            onCheckedChange={(checked) =>
              formik.setFieldValue('providerPreference', checked)
            }
            checked={formik.values.providerPreference}
            id="providerPreference"
            name="providerPreference"
          />
          <Label htmlFor="providerPreference">Want to offer services?</Label>
        </div>
        {formik.errors.providerPreference &&
          formik.touched.providerPreference && (
            <div className="text-xs text-red-500">
              {formik.errors.providerPreference}
            </div>
          )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="address">Address</Label>
        <Input
          required
          type="address"
          name="address"
          className="flex"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.errors.address && formik.touched.address && (
          <div className="text-xs text-red-500">{formik.errors.address}</div>
        )}
      </div>
      <Button
        disabled={formik.isSubmitting}
        type="submit"
        className="w-full rounded-md"
        onClick={() => formik.handleSubmit()}
      >
        Submit
      </Button>
    </form>
  );
}
