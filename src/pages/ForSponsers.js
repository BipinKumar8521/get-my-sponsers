import React from "react";
import Input from "../Shared/FormElements/Input";
import "./ForSponsers.css";
import {
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../Shared/util/validators";
import { useForm } from "../Shared/hooks/form-hook";
import Button from "../Shared/FormElements/Button";
import Card from "../Shared/UIElements/Card";

export default function ForSponsers() {
  const [formState, InputHandler] = useForm(
    {
      companyName: {
        value: "",
        isValid: false,
      },
      companyDescription: {
        value: "",
        isValid: false,
      },
      companyWebsite: {
        value: "",
        isValid: false,
      },
      poc1Name: {
        value: "",
        isValid: false,
      },
      poc1Phone: {
        value: "",
        isValid: false,
      },
      poc2Name: {
        value: "",
        isValid: false,
      },
      poc2Phone: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <div className="for-sponsers">
      <Card className="sponsers-card">
        <h1>Fill details of sponser</h1>
        <form action="" onSubmit={submitHandler}>
          <Input
            id="companyName"
            element="input"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid company name."
            label="Company Name"
            onInput={InputHandler}
          />
          <Input
            id="companyDescription"
            element="textarea"
            validators={[VALIDATOR_MINLENGTH(10)]}
            errorText="Please enter at least 10 characters."
            label="Brief description about company"
            onInput={InputHandler}
          />
          <Input
            id="companyWebsite"
            element="input"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid website."
            label="Company Website"
            onInput={InputHandler}
          />
          <h2>POC 1</h2>
          <Input
            id="poc1Name"
            element="input"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name."
            label="Name"
            onInput={InputHandler}
          />
          <Input
            id="poc1Phone"
            element="input"
            type="number"
            validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MIN(999999999)]}
            errorText="Please enter a valid phone number."
            label="Phone Number"
            onWheel={(e) => e.target.blur()}
            onInput={InputHandler}
          />
          <h2>POC 2</h2>
          <Input
            id="poc2Name"
            element="input"
            type="text"
            validators={[]}
            label="Name"
            onInput={InputHandler}
          />
          <Input
            id="poc2Phone"
            element="input"
            type="number"
            validators={[]}
            label="Phone Number"
            onInput={InputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}
