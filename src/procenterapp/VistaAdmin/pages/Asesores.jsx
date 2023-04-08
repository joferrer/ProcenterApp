import { ProcenterAppLayout } from "./../layout/ProcenterAppLayout";
import CardList from "../../../ui/components/CardList";
import { CardContextProvider } from "../../../ui/context/CardContext";
import CardForm from "../../../ui/components/CardForm";

export const Asesores = () => {
  return (
    <ProcenterAppLayout>
      <div>
        <h1>Asesores Comerciales</h1>
      </div>
      <CardContextProvider>
        <CardList />
        <br />
        <CardForm />
      </CardContextProvider>
    </ProcenterAppLayout>
  );
};
