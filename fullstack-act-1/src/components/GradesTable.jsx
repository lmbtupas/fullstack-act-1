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
      return total + (data.courseUnits * letterGrade[data.courseGrade])
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
                  item.courseGrade.toLowerCase().includes(props.query.toLowerCase()) ||
                  item.courseUnits.includes(props.query) 
                )
            )

                .map((item, index) => (
                    <tr key={item.id}>
                        {/* <th scope='row'>{index+1}</th> */}
                        <td className=''>{item.courseNo}</td>
                        <td className=''>{item.courseName}</td>
                        <td className=''>{item.courseUnits}</td>
                        <td className=''>{item.courseGrade}</td>
                    </tr>
                )
            )
        }

            <tr>
              <td></td>
              <td></td>
              <td className=''>Total QPI</td>
              <td className=''>{totQPI}</td>
           </tr>
  
      </>
    )
}

export default GradesTable