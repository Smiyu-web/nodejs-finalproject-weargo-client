import React, { useState } from "react";
import { Drawer, Button, Space } from "antd";

const Hamburger = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        key="left"
        className="bg-red-500"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Hamburger;

// class App extends React.Component {
//   state = { visible: false, placement: "left" };

//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     const { placement, visible } = this.state;
//     return (
//       <>
//         <Space>
//           <Button type="primary" onClick={this.showDrawer}>
//             Open
//           </Button>
//         </Space>
//         <Drawer
//           title="Basic Drawer"
//           placement="left"
//           closable={false}
//           onClose={this.onClose}
//           visible={visible}
//           key="left"
//         >
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//         </Drawer>
//       </>
//     );
//   }
// }

// ReactDOM.render(<App />, mountNode);
