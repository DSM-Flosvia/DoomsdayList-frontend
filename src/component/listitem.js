function ListItem(props) {
    return (
        <div className="box">
            <p className="qwer">{props.item}</p>
            <div>
            <button className="again">
            <i class="fas fa-pen"></i>
            </button>
            <button className="removal">
            <i class="fas fa-times"></i>
            </button>
            </div>
        </div>
    )
}
export default ListItem;

// 비 구조와 할당을 사용 더 간단하게
// function ListItem({item}) {
//     return (
//         <div className="box">
//             <p classNmae="qwer">{item}</p>
//         </div>
//     )
// }
// export default ListItem;

//비 구조와 할당을 사용
// function ListItem(props) {
//     const {item} = props;
//     return (
//         <div className="box">
//             <p classNmae="qwer">{item}</p>
//         </div>
//     )
// }
// export default ListItem;