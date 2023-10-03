/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const GradesTable = (props) => {
    let totQPI;

    const letterGrade = {
      'A': 4,
      'B+': 3.5,
      'B': 3, 
      'C+':2.5,
      'C': 2,
      'D': 1,
      'F': 0
    }
  
    const totGP =  props.items.reduce((total, data) => {
      return total + (data.courseUnits * letterGrade[data.letterGrade])
    } , 0)
  
    const totalUnits =  props.items.reduce((total, data) => {
      return total + Number(data.courseUnits)
    }, 0)
  
    totQPI = (totGP / totalUnits).toFixed(2);
  
    if (isNaN(totQPI)) {
      totQPI = 0; 
    } 
     
    return (
      <>
          {props.items
                .filter((item) => (
                  props.query.toLowerCase() === '' ||
                  item.courseNo.toLowerCase().includes(props.query.toLowerCase()) || 
                  item.courseName.toLowerCase().includes(props.query.toLowerCase()) ||
                  item.letterGrade.toLowerCase().includes(props.query.toLowerCase()) ||
                  item.courseUnits.includes(props.query) 
                )
            )

                .map((item, index) => (
                    <tr key={item.id}>
                        <td className='border-2	border-solid border-[#f7f6f3] bg-[#6a5c8a] border-spacing-1 p-2 w-20 font-semibold text-[#f7f6f3]'>{item.courseNo}</td>
                        <td className='border-2	border-solid border-[#f7f6f3] bg-[#6a5c8a] border-spacing-1 p-2 w-20 font-semibold text-[#f7f6f3]'>{item.courseName}</td>
                        <td className='border-2	border-solid border-[#f7f6f3] bg-[#6a5c8a] border-spacing-1 p-2 w-20 font-semibold text-[#f7f6f3]'>{item.courseUnits}</td>
                        <td className='border-2	border-solid border-[#f7f6f3] bg-[#6a5c8a] border-spacing-1 p-2 w-20 font-semibold text-[#f7f6f3]'>{item.letterGrade}</td>
                    </tr>
                )
            )
        }

            <tr>
              <td></td>
              <td></td>
              <td className='border-2	border-solid border-[#f7f6f3] bg-[#6a5c8a] border-spacing-1 p-2 w-20 font-semibold text-[#f7f6f3]'>Total QPI</td>
              <td className='border-2	border-solid border-[#f7f6f3] bg-[#6a5c8a] border-spacing-1 p-2 w-20 font-semibold text-[#f7f6f3]'>{totQPI}</td>
           </tr>
  
      </>
    )
}

export default GradesTable