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

const Form = () => {
  return (
    <div className="w-full sm:w-[80%] mx-auto flex flex-col justify-center items-center">
      <h2 className="py-4 text-center text-red-800">Devis / Contact</h2>
      <form className="flex flex-col gap-2 w-full">
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
              <SelectItem defaultChecked value="devis">
                Demande de devis/tarifs
              </SelectItem>
              <SelectItem value="services">
                Questions sur nos services
              </SelectItem>
              <SelectItem value="autres">Autres</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label hidden htmlFor="name">
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
          <Label hidden htmlFor="societe">
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
          <Label hidden htmlFor="email">
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
          <Label hidden htmlFor="phone">
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
          <Label hidden htmlFor="message">
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
        <Button className="text-xl mb-8">Envoyer</Button>
      </form>
    </div>
  );
};
export default Form;
