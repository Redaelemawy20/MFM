// import React, { useEffect, useState } from "react";

import SelectInputI from "./interfaces/SelectInputI";
// import HasId from "../../../ts/common/HasId";
export interface SelectWithSearchI<T> extends SelectInputI<T> {
  descriptonValue?: keyof T;
}
// export default function SelectWithSearch<T extends HasId>({
//   name,
//   label,
//   value,
//   error,
//   onChange,
//   descriptonValue,
//   options,
//   optionValue,
// }: SelectWithSearchI<T>) {
//   const [visible, setVisible] = useState(false);

//   const [searchedItems, setSearchedItems] = useState(options);
//   const [term, setTerm] = useState("");
//   let selected = options.find((option) => String(option.id) == value);

//   const handleChange = (e: React.FocusEvent, id: number) => {
//     onChange(e, id);
//     setTerm("");
//   };
//   useEffect(() => {
//     let searchedItems = [...options];
//     searchedItems = searchedItems.filter(
//       (item, index) =>
//         (item[optionValue] as string)
//           .toLowerCase()
//           .includes(term.toLowerCase()) && String(item.id) !== value
//     );
//     setSearchedItems(searchedItems);
//   }, [term, value]);
//   return (
//     <div className="m-3">
//       <label className="form-label">{label}</label>
//       <select
//         className="form-select tomselected ts-hidden-accessible"
//         id="select-users"
//         value={value}
//         name={name}
//         placeholder={label}
//         onClick={() => setVisible(!visible)}
//       >
//         {options.map((item, index) => (
//           <option key={index} value={item.id}>
//             {item[optionValue] as string}
//           </option>
//         ))}
//       </select>
//       <div
//         className={`ts-wrapper form-select single ${
//           visible ? "focus input-active dropdown-active" : ""
//         } full has-items `}
//       >
//         <div className="ts-control" onClick={() => setVisible(!visible)}>
//           <div data-value="2" className="item" data-ts-item="">
//             {selected && (selected[optionValue] as string)}
//           </div>
//           <input
//             value={term}
//             onChange={(e) => {
//               setTerm(e.target.value);
//               setVisible(true);
//             }}
//             onClick={() => setVisible(true)}
//             tabIndex={0}
//             aria-haspopup="listbox"
//             id="select-users-ts-control"
//             type="select-one"
//             aria-activedescendant="select-users-opt-2"
//           />
//         </div>
//         {visible ? (
//           <div
//             className="dropdown-menu ts-dropdown single"
//             style={{ display: "block", visibility: "visible" }}
//           >
//             <div className="ts-dropdown-content" role="listbox">
//               {searchedItems.map((item, index) => (
//                 <div
//                   className="dropdown-item d-flex flex-wrap mx-2"
//                   key={index}
//                   onClick={(e) => handleChange(e as any, item.id as number)}
//                 >
//                   <div style={{ marginRight: "2px" }}>
//                     {item[optionValue] as string}
//                   </div>

//                   <span className="text-muted">
//                     {descriptonValue ? String(item[descriptonValue]) : ""}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   );
// }
