import { Button } from "./ui/button";

const Form = () => {
  return (
    <div className="sm:w-[50%] mx-auto flex flex-col justify-center items-center">
      <h2 className="py-4 text-center text-red-800">Devis / Contact</h2>
      <form className="flex flex-col gap-2 w-full">
        <div>
          <label
            hidden
            htmlFor="service">
            Service:
          </label>
          <select
            className="pl-2 h-8 w-full bg-white "
            id="service"
            required>
            <option
              selected
              value="devis">
              Demande de devis / tarifs
            </option>
            <option value="questions">Questions sur les services</option>
            <option value="autres">Autres</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label
            hidden
            htmlFor="name">
            Nom:
          </label>
          <input
            className="pl-2 h-8 w-full "
            type="text"
            id="name"
            placeholder="Votre nom complet..."
            required
          />
        </div>
        <div>
          <label
            hidden
            htmlFor="societe">
            Société:
          </label>
          <input
            className="pl-2 h-8 w-full "
            type="text"
            id="societe"
            placeholder="Votre société..."
            required
          />
        </div>
        <div>
          <label
            hidden
            htmlFor="email">
            Email:
          </label>
          <input
            className="pl-2 h-8 w-full "
            type="email"
            id="email"
            placeholder="Votre adresse e-mail"
            required
          />
        </div>
        <div>
          <label
            hidden
            htmlFor="phone">
            Téléphone:
          </label>
          <input
            className="pl-2 h-8 w-full "
            type="tel"
            id="phone"
            placeholder="Votre numéro de téléphone..."
            required
          />
        </div>
        {/* <div>
          <label
            hidden
            htmlFor="service">
            Service:
          </label>
          <select
            className="pl-2 h-8 w-full "
            id="service"
            required>
            <option value="">Sélectionner un service</option>
            <option value="incendie">Incendie</option>
            <option value="securite">Sécurité</option>
          </select>
        </div> */}
        <div>
          <label
            hidden
            htmlFor="message">
            Message:
          </label>
          <textarea
            className="pl-2 w-full"
            rows={5}
            id="message"
            placeholder="Votre message..."
            required></textarea>
        </div>
        <Button className="text-xl mb-8">Envoyer</Button>
      </form>
    </div>
  );
};
export default Form;
