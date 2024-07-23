// import React, { useState } from 'react';
// import dropdownOptions from '../../dropdownOptions.json';
// import FormGroup from './FormGroup';

// const PersonalInfoSection = ({ data, handleChange, toggleSection, isCollapsed }) => {
//   const [pictureError, setPictureError] = useState(false);
//   const { titlePrefix, firstName, middleName, lastName, title, years, months, picture } = data;

//   const handleFileChange = (e) => {
//     handleChange(e);
//     setPictureError(!e.target.files.length); 
//   };

//   return (
//     <div className="form-section">
//       <h2 
//         onClick={toggleSection}
//         aria-expanded={!isCollapsed}
//         aria-controls="personal-info-section"
//       >
//         Personal Information {isCollapsed ? '🔽' : '🔼'}
//       </h2>
//       <div 
//         id="personal-info-section"
//         className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
//       >
//         <FormGroup>
//           <label htmlFor="picture">Profile Picture</label>
//           <input
//             required
//             type="file"
//             name="picture"
//             id="picture"
//             onChange={handleFileChange}
//             className={!pictureError ? "input-error" : ""}
//           />
//           {/* {!pictureError && <span className="error-message">image file is required</span>} */}
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="titlePrefix">Title</label>
//           <select
//             name="titlePrefix"
//             id="titlePrefix"
//             value={titlePrefix}
//             onChange={handleChange}
//             className={!titlePrefix ? "input-error" : ""}
//             required
//           >
//             <option value="">Select Title</option>
//             {dropdownOptions.titles.map((title, index) => (
//               <option key={index} value={title}>{title}</option>
//             ))}
//           </select>
//           {!titlePrefix && <span className="error-message">This field is required</span>}
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             required
//             type="text"
//             name="firstName"
//             id="firstName"
//             placeholder="First Name"
//             value={firstName}
//             onChange={handleChange}
//             className={!firstName ? "input-error" : ""}
//           />
//           {!firstName && <span className="error-message">This field is required</span>}
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="middleName">Middle Name</label>
//           <input
//             type="text"
//             name="middleName"
//             id="middleName"
//             placeholder="Middle Name"
//             value={middleName}
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             required
//             type="text"
//             name="lastName"
//             id="lastName"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={handleChange}
//             className={!lastName ? "input-error" : ""}
//           />
//           {!lastName && <span className="error-message">This field is required</span>}
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="title">Job Title</label>
//           <select
//             name="title"
//             id="title"
//             value={title}
//             onChange={handleChange}
//             className={!title ? "input-error" : ""}
//             required
//           >
//             <option value="">Select Job Title</option>
//             {dropdownOptions.jobTitles.map((jobTitle, index) => (
//               <option key={index} value={jobTitle}>{jobTitle}</option>
//             ))}
//           </select>
//           {!title && <span className="error-message">This field is required</span>}
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="years">Years of Experience</label>
//           <select
//             name="years"
//             id="years"
//             value={years}
//             onChange={handleChange}
//             className={!years ? "input-error" : ""}
//             required
//           >
//             <option value="">Select Years</option>
//             {dropdownOptions.years.map((year, index) => (
//               <option key={index} value={year}>{year}</option>
//             ))}
//           </select>
//           {!years && <span className="error-message">This field is required</span>}
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="months">Months of Experience</label>
//           <select
//             name="months"
//             id="months"
//             value={months}
//             onChange={handleChange}
//             className={!months ? "input-error" : ""}
//             required
//           >
//             <option value="">Select Months</option>
//             {dropdownOptions.months.map((month, index) => (
//               <option key={index} value={month}>{month}</option>
//             ))}
//           </select>
//           {!months && <span className="error-message">This field is required</span>}
//         </FormGroup>
//       </div>
//     </div>
//   ); 
// };

// export default PersonalInfoSection;




import React, { useState } from 'react';
import dropdownOptions from '../../dropdownOptions.json';
import FormGroup from './FormGroup';

const PersonalInfoSection = ({ data, handleChange, toggleSection, isCollapsed }) => {
  const [titlePrefixError, setTitlePrefixError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [middleNameError, setMiddleNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [yearsError, setYearsError] = useState(false);
  const [monthsError, setMonthsError] = useState(false);

  const handleInputChange = (e) => {
    handleChange(e);

    const { name, value } = e.target;
    switch (name) {
      case 'titlePrefix':
        setTitlePrefixError(value.trim() === "");
        break;
      case 'firstName':
        setFirstNameError(value.trim() === "");
        break;
      case 'middleName':
        setMiddleNameError(value.trim() === "");
        break;
      case 'lastName':
        setLastNameError(value.trim() === "");
        break;
      case 'title':
        setTitleError(value.trim() === "");
        break;
      case 'years':
        setYearsError(value.trim() === "");
        break;
      case 'months':
        setMonthsError(value.trim() === "");
        break;
      default:
        break;
    }
  };

  return (
    <div className="form-section">
      <h2 
        onClick={toggleSection}
        aria-expanded={!isCollapsed}
        aria-controls="personal-info-section"
      >
        Personal Information {isCollapsed ? '🔽' : '🔼'}
      </h2>
      <div 
        id="personal-info-section"
        className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
      >

<FormGroup>
          <label htmlFor="picture">Profile Picture</label>
          
          <input
           type="file"
           name="picture"
           id="picture"
           required
               />

     </FormGroup>
        <FormGroup>
          <label htmlFor="titlePrefix">Title</label>
          <select
            name="titlePrefix"
            id="titlePrefix"
            value={data.titlePrefix}
            onChange={handleInputChange}
            className={titlePrefixError ? "input-error" : ""}
            required
          >
            <option value="">Select Title</option>
            {dropdownOptions.titles.map((title, index) => (
              <option key={index} value={title}>{title}</option>
            ))}
          </select>
          {titlePrefixError && <span className="error-message">This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="firstName">First Name</label>
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={data.firstName}
            onChange={handleInputChange}
            className={firstNameError ? "input-error" : ""}
          />
          {firstNameError && <span className="error-message">This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            name="middleName"
            id="middleName"
            placeholder="Middle Name"
            value={data.middleName}
            onChange={handleInputChange}
            className={middleNameError ? "input-error" : ""}
          />
          {middleNameError && <span className="error-message">This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={data.lastName}
            onChange={handleInputChange}
            className={lastNameError ? "input-error" : ""}
          />
          {lastNameError && <span className="error-message">This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Job Title</label>
          <select
            name="title"
            id="title"
            value={data.title}
            onChange={handleInputChange}
            className={titleError ? "input-error" : ""}
            required
          >
            <option value="">Select Job Title</option>
            {dropdownOptions.jobTitles.map((jobTitle, index) => (
              <option key={index} value={jobTitle}>{jobTitle}</option>
            ))}
          </select>
          {titleError && <span className="error-message">This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="years">Years of Experience</label>
          <select
            name="years"
            id="years"
            value={data.years}
            onChange={handleInputChange}
            className={yearsError ? "input-error" : ""}
            required
          >
            <option value="">Select Years</option>
            {dropdownOptions.years.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
          {yearsError && <span className="error-message">This field is required</span>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="months">Months of Experience</label>
          <select
            name="months"
            id="months"
            value={data.months}
            onChange={handleInputChange}
            className={monthsError ? "input-error" : ""}
            required
          >
            <option value="">Select Months</option>
            {dropdownOptions.months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
          {monthsError && <span className="error-message">This field is required</span>}
        </FormGroup>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
