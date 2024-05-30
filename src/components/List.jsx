import { memo } from "react";

// TODO: input 타이핑할 때 리스트 컴포넌트가 불필요하게 렌더링되지 않게 해보세요.
// memo: 컴포넌트의 props 가 변경되지 않은 경우 리렌더링을 건너뛸 수 있다.
const List = memo(({ items }) => {
  console.log("List component rendered");
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

export default List;
