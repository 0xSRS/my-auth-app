interface InputProps{
    placeholder:string,
    reference:any,
    type?:"text" | "password" | "email"
}


const Input = (props:InputProps) => {
  return (
    <input type={props.type || "text"} placeholder={props.placeholder} ref={props.reference} className="m-4 px-6 py-4 outline-1 md:w-100 w-75 outline-slate-500 hover:outline-slate-800 rounded-2xl"/>
  )
}

export default Input