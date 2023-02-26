function Categories({ category, handleCategory }) {
  return (
    <div className="flex flex-wrap my-3 gap-3">
      <button
        className={`tag rounded-full ${
          category === "all" ? "bg-secondary text-neutral" : ""
        }`}
        value="all"
        onClick={handleCategory}
      >
        All
      </button>
      <button
        className={`tag rounded-full ${
          category === "fullstack" ? "bg-secondary text-neutral" : ""
        }`}
        value="fullstack"
        onClick={handleCategory}
      >
        Fullstack
      </button>
      <button
        className={`tag rounded-full ${
          category === "frontend" ? "bg-secondary text-neutral" : ""
        }`}
        value="frontend"
        onClick={handleCategory}
      >
        Frontend
      </button>
      <button
        className={`tag rounded-full ${
          category === "backend" ? "bg-secondary text-neutral" : ""
        }`}
        value="backend"
        onClick={handleCategory}
      >
        Backend
      </button>
    </div>
  );
}

export default Categories;
