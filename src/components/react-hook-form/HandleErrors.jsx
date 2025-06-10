import { useForm } from "react-hook-form";

export default function HandleErrors() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  
  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          id="firstName"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.firstName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
          }`}
          {...register("firstName", { required: true })} 
          aria-invalid={errors.firstName ? "true" : "false"} 
        />
        {errors.firstName?.type === 'required' && (
          <p className="mt-1 text-sm text-red-600" role="alert">First name is required</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="mail" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          id="mail"
          type="email"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.mail ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
          }`}
          {...register("mail", { required: "Email Address is required" })} 
          aria-invalid={errors.mail ? "true" : "false"} 
        />
        {errors.mail && (
          <p className="mt-1 text-sm text-red-600" role="alert">{errors.mail?.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
}