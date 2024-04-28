

const SignUp = () => {
  return (
    <div>
        <label className="flex flex-col  items-start gap-2 m-8 text-2xl font-black">
  Number
  <input type="tel" className="grow input input-bordered input-info bg-slate-100" placeholder="" />
</label>
<label className="flex flex-col items-start gap-2 m-8 text-2xl font-black">
  Password
  <input type="password" className="grow input input-bordered input-info bg-slate-100" placeholder="" />
</label>
    </div>
    
  )
}

export default SignUp;