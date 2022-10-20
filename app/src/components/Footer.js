function Footer({setPage,page}) {
  let deletePage = () =>{
    setPage('deleted')
    
  }
  let home = () =>{
    setPage('home')
    
  }
  let completed = () =>{
    setPage('complete')
    
  }
  return (
    <>
      <div className="btn-group d-flex gap-2 mt-5 justify-content-bwtween">
        <button onClick={home} type="button rounded" className="btn btn-primary">
          TO DO
        </button>
        <button onClick={deletePage} type="button rounded" className="btn btn-primary">
          DELETED
        </button>
        <button onClick={completed} type="button rounded" className="btn btn-primary">
          COMPLETED
        </button>
      </div>
    </>
  );
}
export default Footer;
