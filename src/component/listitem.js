function ListItem(props) {
    return (
        <div className="box">
            <p classNmae="qwer">{props.item}</p>
        </div>
    )
}
export default ListItem;

// 비 구조와 할당을 사용 간단하게
// function ListItem({item}) {
//     return (
//         <div className="box">
//             <p classNmae="qwer">{item}</p>
//         </div>
//     )
// }
// export default ListItem;


// function ListItem(props) {
//     const {item} = props;
//     return (
//         <div className="box">
//             <p classNmae="qwer">{item}</p>
//         </div>
//     )
// }
// export default ListItem;