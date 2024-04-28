

const SignIn = () => {
    return (
      <>
      <div className="flex items-center h-screen justify-center ">
      <form className="w-96 border-solid border-2 border-sky-500 rounded-md">
   <label className="flex flex-col items-start gap-2 m-8 text-2xl font-black">
    Name
    <input type="text" className="grow input input-bordered input-info  bg-slate-100" placeholder="" />
  </label>
  <label className="flex flex-col  items-start gap-2 m-8 text-2xl font-black">
    Number
    <input type="tel" className="grow input input-bordered input-info bg-slate-100" placeholder="" />
  </label>
  <label className="flex flex-col items-start gap-2 m-8 text-2xl font-black">
    Age
    <input type="number" className="grow input input-bordered input-info bg-slate-100" placeholder="" />
  </label>
  <label className="flex flex-col items-start gap-2 m-8 text-2xl font-black">
    Address
    <input type="text" className="grow input input-bordered input-info bg-slate-100" placeholder="" />
  </label>
  <label className="flex flex-col items-start gap-2 m-8 text-2xl font-black">
    Password
    <input type="password" className="grow input input-bordered input-info bg-slate-100" placeholder="" />
  </label>
  
  
  </form>
  </div>
      </>
    )
  }
  
  export default SignIn;