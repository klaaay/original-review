import React from "react";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

const menuList = [
  {
    name: "基础应用",
    arr: [
      {
        name: "文件管理",
        itemUrl: "",
        itemIcon: "",
        urlType: ""
      },
      {
        name: "信息检索",
        itemUrl: "",
        itemIcon: "",
        urlType: ""
      }
    ]
  },
  {
    name: "研判战场",
    arr: [
      {
        name: "快速办案",
        itemUrl: "",
        itemIcon: "",
        urlType: "",
        arr: [
          {
            name: "haha",
            arr: [{ name: "xixi" }]
          }
        ]
      },
      {
        name: "关系网络分析",
        itemUrl: "",
        itemIcon: "",
        urlType: ""
      }
    ]
  }
];

class Navaigation extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  renderMenuItem = arr => {
    return arr.map(({ name, arr }) => {
      return arr && arr.length ? (
        this.renderSubMenu(name, arr)
      ) : (
        <Menu.Item key={name}>
          <Icon type="mail" />
          {name}
        </Menu.Item>
      );
    });
  };

  renderSubMenu = (name, arr) => {
    return (
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            {name}
          </span>
        }
      >
        {this.renderMenuItem(arr)}
      </SubMenu>
    );
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        {this.renderMenuItem(menuList)}
      </Menu>
    );
  }
}

export default Navaigation;
