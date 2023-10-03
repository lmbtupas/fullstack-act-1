/* eslint-disable react/prop-types */

const SearchBar = ({value, onChange}) => {
  return (
    <div>
        <input className='placeholder-gray-500::placeholder text-[#2A2B2E] p-2 rounded-md' type="text" placeholder="Search" value={value} onChange={onChange} />
    </div>
  )
}

export default SearchBar