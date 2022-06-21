import { ItemCount } from "../../itemcount/ItemCount"


export const ItemListContainer = ({ greeting }) => {

    const onAdd = () => true; 

    return (
        <div className='container'>
            <h6>{greeting}</h6>

            <ItemCount
                initialValue={1}
                stock={5}
                onAdd={onAdd}
            >
            </ItemCount>
        </div>
    )
}
