import './App.css'

function App() {
  return (
    <>
    <meta charSet="UTF-8" />
    <title>Мой музыкальный плеер</title>
  <body>
    <div className="music-player">
      <h4>1. Классы</h4>
      <h1 className={"player-title"} id="title">
        Мой музыкальный плеер
      </h1>
      <hr />
 
      <h4>2. maxlength</h4>
      <input disabled={false} className={"form-control"}
        type="search"
        id={"search"}
        placeholder="Поиск музыки"
        maxLength={50}
        value="Начните печатать..."
      />
      <hr />
 
      <h4>3. rows, cols, maxLength, readonly</h4>
      <textarea disabled={false} className={"form-control"}
        placeholder="Оставьте комментарий к треку..."
        rows={3}
        cols={40}
        maxLength={200}
        readOnly
      ></textarea>
      <hr />
 
      <h4>4. tabindex</h4>
      <button tabIndex={0}>Click</button>
      <hr />
 
      <h4>5. colspan, rowspan</h4>
      <table border={1}>
        <tbody>
          <tr>
            <td colSpan={2}>1</td>
            <td rowSpan={3}>2</td>
          </tr>
        </tbody>
      </table>
      <hr />
 
      <h4>6. for</h4>
      <input type="radio" id="repeat-off" name="repeat" />
      <label htmlFor="repeat-off">Без повтора</label>
      <hr />
    </div>
  </body>
    </>
  )
}

export default App
