import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container/Container";
import FormInput from "@/components/common/FormInput/FormInput";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Link from "next/link";
import React from "react";

const CreateStore = () => {
  return (
    <Container>
      <PageHeader headText="Create store" />
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-auto w-[90%]">
          <div className="w-full space-y-6 rounded-md bg-white px-4 py-10 shadow-md">
            <form action="">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-5">
                  <FormInput
                    label="store name"
                    type="text"
                    name="storename"
                    placeholder="Enter store name"
                  />
                  <FormInput
                    label="store owner name"
                    type="text"
                    name="ownername"
                    placeholder="Enter store owner name"
                  />
                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter store email address"
                  />
                  <FormInput
                    label="phone number"
                    type="number"
                    name="number"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="space-y-5">
                  <FormInput
                    label="Website URL (optional)"
                    type="text"
                    name="weburl"
                    placeholder="Enter website url"
                  />
                  <FormInput
                    label="Address"
                    type="text"
                    name="address"
                    placeholder="Enter store address"
                  />
                  <FormInput
                    label="password"
                    type="password"
                    name="password"
                    placeholder="Enter store password"
                  />
                  <FormInput
                    label="confirm password"
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter store confirm password"
                  />
                  <Button className="w-full">Create</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateStore;
