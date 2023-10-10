function SortButton({title,setTitle}) {
    return (
        <button onClick={ () => {
            let copy = [...title];
            copy.sort();
            setTitle(copy);
        }}>정렬</button>
    )
}

export default SortButton;