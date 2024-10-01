"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";

const Form = () => {
  const [state, handleSubmit] = useForm("xanwnodq");

  const [textColor, setTextColor] = useState<
    "text-muted-foreground" | "text-gray-100"
  >("text-gray-100");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTextColor("text-muted-foreground");
      } else {
        setTextColor("text-gray-100");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the initial text color

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>("form");
    if (form && state.succeeded) {
      toast.success("Nous vous contacterons dans les plus bref délais.");
      form.reset();
    }
  }, [state.succeeded]);

  let buttonText;
  if (state.succeeded) {
    buttonText = "Message envoyé";
  } else if (state.submitting) {
    buttonText = "En cours...";
  } else {
    buttonText = "Envoyer";
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xanwnodq"
      method="POST"
      id="form"
      className="flex flex-col gap-2 w-full"
    >
      <div>
        <Select name="service">
          <SelectTrigger>
            <SelectValue placeholder="Que pouvons-nous faire pour vous?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem defaultChecked value="Demande de devis/tarifs">
              Demande de devis/tarifs
            </SelectItem>
            <SelectItem value="Questions sur nos services">
              Questions sur nos services
            </SelectItem>
            <SelectItem value="Autres">Autres</SelectItem>
          </SelectContent>
        </Select>
        <ValidationError
          prefix="Service"
          field="service"
          errors={state.errors}
        />
      </div>
      <div>
        <Label hidden htmlFor="name">
          Nom Complet:
        </Label>
        <Input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Votre nom complet..."
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <Label hidden htmlFor="societe">
          Société:
        </Label>
        <Input
          className="pl-2 h-8 w-full "
          type="text"
          id="societe"
          name="societe"
          placeholder="Votre société..."
          required
        />
        <ValidationError
          prefix="Société"
          field="societe"
          errors={state.errors}
        />
      </div>
      <div>
        <Label hidden htmlFor="email">
          Email:
        </Label>
        <Input
          className="pl-2 h-8 w-full "
          type="email"
          id="email"
          name="email"
          placeholder="Votre adresse e-mail"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <Label hidden htmlFor="phone">
          Téléphone:
        </Label>
        <Input
          className="pl-2 h-8 w-full "
          type="tel"
          id="phone"
          name="phone"
          placeholder="Votre numéro de téléphone..."
          required
        />
        <ValidationError
          prefix="Téléphone"
          field="phone"
          errors={state.errors}
        />
      </div>

      <div>
        <Label hidden htmlFor="message">
          Message:
        </Label>
        <Textarea
          className="pl-2 w-full"
          rows={5}
          id="message"
          name="message"
          placeholder="Votre message..."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <Button
        type="submit"
        disabled={state.submitting}
        className="text-sm my-8"
      >
        {buttonText}
      </Button>
    </form>
  );
};
export default Form;
