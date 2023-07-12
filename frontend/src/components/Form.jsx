import Button from "./Button";
import Input from "./Input";
const Form = ({ title }) => {
  return (
    <div className="flex w-full justify-center p-20">
    <form className="flex flex-col items-center justify-around border w-2/4 h-96 px-2">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <Input
        className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md w-2/4 p-3 mb-6 focus:border-indigo-600"
        type="text"
        placeholder="Ruta transport"
        autoComplete="off"
        required
      />
      <textarea
        className="border-gray-400 border-2 text-gray-900 outline-none text-sm rounded-md w-2/4 p-3 mb-6 focus:border-indigo-600"
        rows="5"
        placeholder="Detalii"
      />
      <Button text="Scaneaza Factura" />
    </form>
    </div>
  );
};

export default Form;
