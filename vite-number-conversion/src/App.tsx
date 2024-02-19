import { ChangeEvent, useState } from 'react'
import styles from './home.module.css'
import { IData } from './interfaces'
import { data } from './constants'
const App = ():JSX.Element => {

   const [title, setTitle] = useState<string>()
   const [arr, setArr] = useState<IData[]>(data)

   const changeHandler = (evt: ChangeEvent<HTMLInputElement>): void=>{
    setTitle(evt.target.value)
   }
   const handlerSubmit = ():void =>{
    if(!title?.length) return 
    const newData = {
      title: title,
      id: new Date().getTime(),
      description: 'description'
    }

    setArr([...arr, newData])
    setTitle(" ")
       console.log(title);
       
   }

   const deletItem = ( id:number ):void=>{
    const newData = arr.filter(c=>c.id !=id)
    setArr(newData)
   }
  return (
      <div className={styles.todo}>
        <h1 className={styles.title}>App Todo</h1>
            <input type="text" placeholder='Enter todo' className={styles.input} value={title} onChange={changeHandler} />
            <button onClick={handlerSubmit} className={styles.button}>Add Todo</button>
            <div className={styles.card}>
            {arr.map(c=>(
              <div key={c.id } className={styles.cardItem}> 
                <p>{c.title}</p>
                <div className={styles.delBtn}>
                  <button onClick={()=>deletItem(c.id)}>Del</button>
                </div>
              </div>
            ))}
            </div>
      </div>
    )
}

export default App