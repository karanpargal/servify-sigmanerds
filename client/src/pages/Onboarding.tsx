// TODO: Add onboarding form with formik
// name: string; text field
// email: string; text field type="email"
// age: number; text field type="number"
// sex: string; drop down 🤦🏽‍♂️
// bio: string; textarea
// preference: "provider" | "consumer"; radio group

import Button from '@/components/ui/button';
import useWallet from '@/hooks/useWallet';

// addresses: string[]; accept first address
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Onboarding() {
  const { disconnect, address: walletAddress } = useWallet();

  const SignInSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required'),

    email: Yup.string().email().required('Email is required'),

    age: Yup.number()
      .required('Age is Required')
      .min(15, 'Minimmun Age should be 15'),

    bio: Yup.string().min(10, 'Too short!'),
    sex: Yup.boolean().required('Specify Your gender'),

    address: Yup.string()
      .min(10, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Address is required'),
  });
  return (
    <main>
      <Formik
        initialValues={{
          name: '',
          email: '',
          age: '',
          sex: '',
          bio: '',
          preference: '',
          address: [],
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Hey');
          axios
            .post(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
              name: values.name,
              email: values.email,
              age: values.age,
              sex: values.sex,
              bio: values.bio,
              preference: values.preference,
              address: values.address,
              walletAddress: walletAddress,
            })
            .then(() => {
              alert('Details Submitted');
            })
            .catch((error) => {
              console.error('Error submitting form:', error);
            })
            .finally(() => {
              setSubmitting(false);
            });
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
                <Label htmlFor="name">Name</Label>
                <Input
                  type="name"
                  name="name"
                  className=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  className="flex"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <Label htmlFor="sex">Sex</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Define your sex" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>I am</SelectLabel>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Non-binary">Non-Binary</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.sex && touched.sex && errors.sex}

              <div className="flex flex-col gap-3">
                <Label htmlFor="bio">Bio</Label>
                <Input
                  type="bio"
                  name="bio"
                  className="flex"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bio}
                />
                {errors.bio && touched.bio && errors.bio}
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="offer-services">Want to offer services?</Label>

                <Switch id="offer-services" />
                {errors.preference && touched.preference && errors.preference}
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="address">Address</Label>
                <Input
                  type="address"
                  name="address"
                  className="flex"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                {errors.address && touched.address && errors.address}
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
      <footer>
        <Button onClick={() => disconnect()}>Log out</Button>
      </footer>
    </main>
  );
}
