"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

const Form = () => {
  const [textColor, setTextColor] = useState<"text-muted-foreground" | "text-gray-100">(
    "text-gray-100"
  );

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

  return (
    <form
      id="form"
      className="flex flex-col gap-2 w-full">
      <div>
        {/* <label hidden htmlFor="service">
            Service:
          </label>
          <select className="pl-2 h-8 w-full bg-white " id="service" required>
            <option selected value="devis">
              Demande de devis / tarifs
            </option>
            <option value="questions">Questions sur les services</option>
            <option value="autres">Autres</option>
          </select> */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Que pouvons-nous faire pour vous?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              defaultChecked
              value="devis">
              Demande de devis/tarifs
            </SelectItem>
            <SelectItem value="services">Questions sur nos services</SelectItem>
            <SelectItem value="autres">Autres</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label
          hidden
          htmlFor="name">
          Nom Complet:
        </Label>
        <Input
          id="name"
          type="text"
          required
          placeholder="Votre nom complet..."
        />
      </div>
      <div>
        <Label
          hidden
          htmlFor="societe">
          Société:
        </Label>
        <Input
          className="pl-2 h-8 w-full "
          type="text"
          id="societe"
          placeholder="Votre société..."
          required
        />
      </div>
      <div>
        <Label
          hidden
          htmlFor="email">
          Email:
        </Label>
        <Input
          className="pl-2 h-8 w-full "
          type="email"
          id="email"
          placeholder="Votre adresse e-mail"
          required
        />
      </div>
      <div>
        <Label
          hidden
          htmlFor="phone">
          Téléphone:
        </Label>
        <Input
          className="pl-2 h-8 w-full "
          type="tel"
          id="phone"
          placeholder="Votre numéro de téléphone..."
          required
        />
      </div>

      <div>
        <Label
          hidden
          htmlFor="message">
          Message:
        </Label>
        <Textarea
          className="pl-2 w-full"
          rows={5}
          id="message"
          placeholder="Votre message..."
          required
        />
      </div>
      <div>
        <p className={`text-sm ${textColor} pl-2`}>
          {
            "En soumettant ce formulaire, j'accepte que les informations saisies soient stockées et utilisées pour permettre la bonne prise en charge de ma demande."
          }
        </p>
      </div>
      <Button className="text-sm mb-8">Envoyer</Button>
    </form>
  );
};
export default Form;
