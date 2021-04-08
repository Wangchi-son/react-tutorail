import React from 'react';

class Hello extends React.Component {
  static defaultProps = {
    name: '이름없음'
  };
  render() {
    const { color, isSpecial, name } = this.props;
    return (
      <div style={color}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

// 함수형 컴포넌트
// function Hello({ color, name, isSpecial }) {
//   return (
//     <>
//       <div
//         style={{
//           color,
//         }}
//       >
//         <b>{isSpecial ? "스페셜하다!" : "낫스페셜"}</b>
//         안녕하세요 {name}
//       </div>
//     </>
//   );
// }

// Hello.defaultProps = {
//   name: '이름없음'
// };

export default Hello;
