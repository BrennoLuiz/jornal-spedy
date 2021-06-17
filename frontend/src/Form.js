import logo from './logo.svg';
import './App.css';

function Form() {
  return (
    <div className="Form">
      <div class="container-header" style={{ marginTop: "30px" }}>
        <h1 id="title">Cadastro</h1>
      </div>
      <div class="container-form">
        <form>
          <div class="form-group">
            <label for="inputTitle">Título</label>
            <input type="text" class="form-control" id="inputTitle" aria-describedby="titleInput" placeholder="Insira um título"></input>
          </div>
          <div class="form-group">
            <label for="inputDesc">Descrição</label>
            <textarea class="form-control" id="inputDesc" rows="3" placeholder="Descrição da vaga"></textarea>
          </div>
        </form>
        <div class="text-right">
            <a type="submit" class="btn btn-secondary" href="/">Submit</a></div>
      </div>
    </div>
  );
}

export default Form;