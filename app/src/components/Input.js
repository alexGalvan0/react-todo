function Input() {
  return (
    <div className="container pb-5" style={{width:'15rem'}}>
      <div className="row">
      <h1 className='text-center'>TO DO!</h1>
        <div className="col d-flex justify-content-center flex-row gap-2" >
        <input type="text" />
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  );
}
export default Input;
