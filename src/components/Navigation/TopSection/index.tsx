import { CheckOutlined, InfoCircleOutlined } from "@ant-design/icons";

import { VscChevronDown } from "react-icons/vsc";

export interface IAppProps {}

export default function TopSection(props: IAppProps) {
  return (
    <div className="top-container">
      <div className="top-wrapper">
        <div className="left-section">
          <CheckOutlined style={{ paddingRight: "10px" }} />
          <span>Free shipping on all orders over $50</span>
        </div>
        <div className="right-section">
          <ul>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <span>Eng</span>{" "}
              <span
                style={{
                  display: "flex",
                  alignContent: "center",
                  paddingLeft: "5px",
                }}
              >
                <VscChevronDown />
              </span>
            </li>
            <li>Faqs</li>
            <li>
              <InfoCircleOutlined style={{ paddingRight: "10px" }} />
              Need helps
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
