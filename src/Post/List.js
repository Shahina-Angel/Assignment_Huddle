import { withRouter } from "react-router-dom";

function List(props) {
  const openPreview = (item) => {
    props.history.push({pathname: "/preview", state: item});
  };

  return (
    <>
      {props.list &&
        props.list.length > 0 &&
        props.list.map(item => (
          <li key={item.id} onClick={() => openPreview(item)}>
            {item.title}
          </li>
        ))}
    </>
  );
}

export default withRouter(List);
