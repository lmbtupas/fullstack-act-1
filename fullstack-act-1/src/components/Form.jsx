/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const GradeForm = ({form, onChange, handleSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div className='flex flex-col text-xl text-[#f7f6f3] mb-2'>
          <label className='text-left font-semibold' htmlFor='courseNo'>Course No.</label>
          <input className='placeholder-gray-700::placeholder text-[#2A2B2E] p-2 text-[1rem] rounded-md mt-2' placeholder='Enter Course Number' type="text" name="courseNo" id='courseNo' value={form.courseNo} onChange={onChange} required/>
        </div>
        <div className='flex flex-col text-xl text-[#f7f6f3] my-2'>
          <label className='text-left font-semibold' htmlFor='courseName'>Course Name</label>
          <input className='placeholder-gray-700::placeholder text-[#2A2B2E] p-2 text-[1rem] rounded-md mt-2' placeholder='Enter Course Name' type="text" name="courseName" id='courseName' value={form.courseName} onChange={onChange} required/>
        </div>
        <div className='flex flex-col text-xl text-[#f7f6f3] my-2'>
          <label className='text-left font-semibold' htmlFor='courseUnits'>Units</label>
          <input className='placeholder-gray-700::placeholder text-[#2A2B2E] p-2 text-[1rem] rounded-md mt-2' type="number" name="courseUnits" id='courseUnits' value={form.courseUnits} onChange={onChange} required/>
        </div>

        <div className='flex flex-col text-xl text-[#f7f6f3] my-2'>
          <label className='text-left font-semibold' htmlFor='letterGrade'>Grade</label>
          <div className='grid grid-cols-1'>
              <div className='flex gap-2'>
                  <input className='accent-[#6a5c8a]' type="radio" name="letterGrade" id='letterGrade' value="A" onChange={onChange}/>
                  <label htmlFor='letterGrade'>A</label>
              </div>

              <div className='flex gap-2'>
                  <input className='accent-[#6a5c8a]' type="radio" name="letterGrade" id='letterGrade' value="B+" onChange={onChange}/>
                  <label htmlFor='letterGrade'>B+</label>
              </div>

              <div className='flex gap-2'>
                  <input className='accent-[#6a5c8a]' type="radio" name="letterGrade" id='letterGrade' value="B" onChange={onChange} />
                  <label htmlFor='letterGrade'>B</label>
              </div>

              <div className='flex gap-2'>
                  <input className='accent-[#6a5c8a]' type="radio" name="letterGrade" id='letterGrade' value="C+" onChange={onChange} />
                  <label htmlFor='letterGrade'>C+</label>
              </div>

              <div className='flex gap-2'>
                  <input className='accent-[#6a5c8a]' type="radio" name="letterGrade" id='letterGrade' value="C" onChange={onChange} />
                  <label htmlFor='letterGrade'>C</label>
              </div>

              <div className='flex gap-2'>
                  <input className='accent-[#6a5c8a]' type="radio" name="letterGrade" id='letterGrade' value="D" onChange={onChange} />
                  <label htmlFor='letterGrade'>D</label>
              </div>
              
              <div className='flex gap-2'>
                  <input className='accent-[#6a5c8a]' type="radio" name="letterGrade" id='letterGrade' value="F" onChange={onChange}  />
                  <label htmlFor='letterGrade'>F</label>
              </div>
          </div>   

          <button className='bg-[#6a5c8a] hover:bg-[#6a5c8a] rounded-[10px] hover:opacity-80 text-[#f7f6f3] font-bold p-1 mt-3' type="submit">Submit</button>
          </div>
      </form>
    </div>
  )
}

export default GradeForm