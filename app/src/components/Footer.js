function Footer() {
  return (
    <>
    <div className="btn-group d-flex gap-2 mt-5 justify-content-bwtween">
      <button type="button rounded" className="btn btn-primary">
        ALL
      </button>
      <button type="button rounded" className="btn btn-primary">
        ACTIVE
      </button>
      <button type="button rounded" className="btn btn-primary">
        COMPLETED
      </button>
    </div>
    </>
  );
}
export default Footer;