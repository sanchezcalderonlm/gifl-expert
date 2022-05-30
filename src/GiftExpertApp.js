import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory.js";
import {GiftGrid} from "./components/GiftGrid.js";

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Goku']);

    //const handleApp = () => {
        //setCategories([...categories, 'Example']);
    //    setCategories(cat => [...cat, 'Example'] );
    //}

    return (
      <>
          <h2>GiftExpertApp</h2>
          <AddCategory setCategories={setCategories}/>
          <hr/>
          <ol>
              {
                  categories.map(
                    (v, i) =>
                    <GiftGrid
                        key={v}
                        category={v}/>
                  )
              }
          </ol>
      </>
    );
}

export {
    GiftExpertApp as default
}