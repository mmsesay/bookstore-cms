export const AddBookForm = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form onSubmit="#">
      <input 
        type="text"
        placeholder="Author title" 
        value=""
        name="author"
      />
      <br/>
      <input 
        type="text"
        placeholder="Book title" 
        value=""
        name="title"
      />
      <button >Submit</button>
    </form>
  </div>
);