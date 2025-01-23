
interface CardProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    path:string;
    message:string;
    pageName:string;
    buttonName:string;

}
const Card = ({handleChange, handleSubmit, pageName, path, message, buttonName}:CardProps) => {
  return (
    <div >
        <div className='bg-white p-10 rounded-md drop-shadow-md'>
        <h1>{pageName}</h1>
        <form className="flex flex-col p-5" onSubmit={handleSubmit}>
            <input type='text' name='username' className='p-3 border border-black' placeholder='Username' onChange={handleChange} />
            <input type='password' name='password' className='p-3 mt-2 border border-black'  placeholder='Password' onChange={handleChange} />
            <button type='submit' className='border-purple-500 p-3 bg-cyan-500 text-white rounded-xl hover:bg-sky-700 mt-3'> {buttonName}</button>
        </form>
        <a href={path}className="text-blue-500 hover:text-sky-700" >{message} </a>
        </div>
    </div>
  )
}

export default Card