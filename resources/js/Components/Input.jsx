import React,{useState} from 'react'

const Input = React.forwardRef(({name,label,type,value,placeholder,error, onChange, onBlur},ref) => {

	// console.log(error)

	return (
	<>
		<div className="flex flex-col w-full my-2">

			<label>{label}</label>
			<input
				name={name}
				ref={ref}

				onChange={onChange} 
				onBlur={onBlur}
				className="border-b-2 py-1 px-2 border-skin-coffee bg-skin-transparent w-full mt-2 outline-none"
				placeholder={placeholder}
				type={type}
			/>
			{error && <p className="text-red-600 mt-2">{error}</p>}
		</div>
	</>
)})


export default Input;