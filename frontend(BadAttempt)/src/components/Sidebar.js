const Sidebar = () => {
  return (
    <div className="col-3">
      <div className="card">
        <div className="card-header">Select Table to work on</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Book List Table</li>
          <li className="list-group-item">Book Lending Table</li>
          <li className="list-group-item">Book Copies Table</li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
