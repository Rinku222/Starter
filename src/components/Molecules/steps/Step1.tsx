import React from "react";
import { z } from "zod";
import Layout from "../../../Layout/Layout";
import { Formik } from "formik";
import { toFormikValidate } from "zod-formik-adapter";
import RenderInput from "../../Atoms/RenderInput";
import Footer from "../Footer";

interface StepType {
  setCurrentStep: (value: number) => void;
}

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const Schema = z.object({
  name: z.string().min(1, "Cannot be empty").max(50, "too long"),
  phone: z
    .string()
    .regex(phoneRegex, "Invalid Number!")
    .min(10, "Invalid Number!")
    .max(10, "Invalid Number!"),
  email: z
    .string()
    .email("This is not a valid email.")
    .min(1, "This field has can't be empty."),
});

const Step1 = ({ setCurrentStep }: StepType) => {
  return (
    <Layout>
      <div className="flex flex-1">
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
          }}
          onSubmit={(values) => {
            setCurrentStep(2);
          }}
          validate={toFormikValidate(Schema)}
        >
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="flex flex-1 flex-col bg-background-shade sm:bg-white">
              <div className="flex flex-1 shadow-2xl sm:shadow-none flex-col m-4 p-6 rounded mt-[-100px] sm:mt-[-200px] md:mt-[-300px] lg:mt-[0px] xl:mt-[0px] bg-white">
                <div className="text-3xl font-bold text-purple-shade-1 mb-2">
                  Personal Information
                </div>
                <div className="text-base text-gray-shade-2 mb-6">
                  Please provide your name, email address, and phone number
                </div>
                <div className="mb-4">
                  <div className="mb-1">Name</div>
                  <RenderInput
                    name="name"
                    value={values.name}
                    error={errors.name}
                    touched={touched.name}
                    onChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-1">Email Address</div>
                  <RenderInput
                    name="email"
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                    onChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-1">Phone Number</div>
                  <RenderInput
                    name="phone"
                    value={values.phone}
                    error={errors.phone}
                    touched={touched.phone}
                    onChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <Footer onNextPress={handleSubmit} />
            </div>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default Step1;
