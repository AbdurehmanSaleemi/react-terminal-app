import React from 'react'

const TerminalText = ({ terminalStart, handleChange, handleSubmit }) => {
    return (
        <>
            <h1 className='text-2xl text-green-200 font-bold'>{terminalStart}</h1>
            <form onSubmit={handleSubmit} autoComplete={'off'} className="min-w-fit w-9/12">
                <input autoCorrect='false' placeholder='Type "saleemi --help" to see available commands' onChange={(e) => handleChange(e)} autoComplete='off' autoFocus={true} type="text" className='h-8 p-2 text-white text-xl font-light border-none focus:border-none focus:outline-none caret-white/90 w-full bg-transparent placeholder:text-green-100/30' />
            </form>
        </>
    )
}

export default TerminalText