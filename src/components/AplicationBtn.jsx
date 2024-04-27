import React from 'react'

const AplicationBtn = (props) => {
  return (
    <button onClick={() => props.setShowApplicationModal(true)} className='w-48 py-6 bg-lightBlue text-white rounded-xl border-2 border-lightBlue font-semibold transition-colors  hover:bg-white hover:text-lightBlue'>Ariza yuborish</button>
  )
}

export default AplicationBtn