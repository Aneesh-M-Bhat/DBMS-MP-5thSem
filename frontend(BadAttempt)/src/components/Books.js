// import Sidebar from "./Sidebar";

import Sidebar from "./Sidebar";

// const Books = () => {
//   const row1 = [
//     { name: "Add Tuples to Books" },
//     { name: "Edit Tuples of Books" },
//     { name: "Delete Tuples of Books" },
//     { name: "Display Contents of Books" },
//   ];
//   const row2 = [
//     { name: "Add Tuples to BookCopies" },
//     { name: "Edit Tuples of BookCopies" },
//     { name: "Delete Tuples of BookCopies" },
//     { name: "Display Contents of BookCopies" },
//   ];
//   const row3 = [
//     { name: "Add Tuples to BookLending" },
//     { name: "Edit Tuples of BookLending" },
//     { name: "Delete Tuples of BookLending" },
//     { name: "Display Contents of BookLending" },
//   ];
//   const row4 = [
//     { name: "Add Tuples to Publishers" },
//     { name: "Edit Tuples of Publishers" },
//     { name: "Delete Tuples of Publishers" },
//     { name: "Display Contents of Publishers" },
//   ];
//   const row5 = [
//     { name: "Add Tuples to Authors" },
//     { name: "Edit Tuples of Authors" },
//     { name: "Delete Tuples of Authors" },
//     { name: "Display Contents of Authors" },
//   ];

//   const colRender = (name) => {
//     return (
//       <div className="column ">
//         <button className="button">{name}</button>
//       </div>
//     );
//   };
//   return (
//     <div className="is-warning container-fluid is-full" style={{ height: "100vh" }}>
//       <Sidebar />
//     </div>
//   );
// };
// export default Books;

// <div className="container" style={{ minHeight: "91vh", minWidth: "100%" }}>
//   <div className="columns">{row1.map((col) => colRender(col.name))}</div>
//   <div className="columns">{row2.map((col) => colRender(col.name))}</div>
//   <div className="columns">{row3.map((col) => colRender(col.name))}</div>
//   <div className="columns">{row4.map((col) => colRender(col.name))}</div>
//   <div className="columns">{row5.map((col) => colRender(col.name))}</div>
// </div>

const Books = () => {
  const row1 = [
    { name: "Add Tuples to Books" },
    { name: "Edit Tuples of Books" },
    { name: "Delete Tuples of Books" },
    { name: "Display Contents of Books" },
  ];
  const row2 = [
    { name: "Add Tuples to BookCopies" },
    { name: "Edit Tuples of BookCopies" },
    { name: "Delete Tuples of BookCopies" },
    { name: "Display Contents of BookCopies" },
  ];
  const row3 = [
    { name: "Add Tuples to BookLending" },
    { name: "Edit Tuples of BookLending" },
    { name: "Delete Tuples of BookLending" },
    { name: "Display Contents of BookLending" },
  ];
  const row4 = [
    { name: "Add Tuples to Publishers" },
    { name: "Edit Tuples of Publishers" },
    { name: "Delete Tuples of Publishers" },
    { name: "Display Contents of Publishers" },
  ];
  const row5 = [
    { name: "Add Tuples to Authors" },
    { name: "Edit Tuples of Authors" },
    { name: "Delete Tuples of Authors" },
    { name: "Display Contents of Authors" },
  ];

  const colRender = (name) => {
    return (
      <div className="col d-flex justify-content-center align-items-center">
        <button className="btn bg-primary m-3">
          <div className="m-2">{name}</div>
        </button>
      </div>
    );
  };
  return (
    <div
      className="container p-2 bg-warning"
      style={{ minHeight: "91vh", minWidth: "100%" }}
    >
      <Sidebar />
      {/* <div className="row ">{row1.map((col) => colRender(col.name))}</div>
      <div className="row">{row2.map((col) => colRender(col.name))}</div>
      <div className="row">{row3.map((col) => colRender(col.name))}</div>
      <div className="row">{row4.map((col) => colRender(col.name))}</div>
      <div className="row">{row5.map((col) => colRender(col.name))}</div> */}
    </div>
  );
};
export default Books;
