import '../ItemList/ItemList.jsx'
import { ItemList } from '../ItemList/ItemList.jsx';

export const ItemListContainer = ({greeting}) =>{
return(
        <main className="mainPage d-flex justify-content-center align-items-center">
        <p className="mainP">{/*greeting*/}</p>
        <div><ItemList/></div>
        </main>
        
);
}