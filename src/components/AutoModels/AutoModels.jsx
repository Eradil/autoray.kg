import React from "react";
import "./AutoModels.css";
import { Button, Select } from "antd";

const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const AutoModels = () => {
  return (
    <div className="models container">
      <div className="models-1">
        <h1>SELECT YOUR VEHICAL</h1>
      </div>
      <div className="models-2">
        <Select
          className="select_model"
          defaultValue="Марка авто"
          style={{
            width: 200,
            height: 40,
          }}
          onChange={handleChange}
        >
          <Option value="BMW">BMW</Option>
          <Option value="Mercedes-Benz">Mercedes-Benz</Option>
          <Option value="Lexus">Lexus</Option>
          <Option value="Toyota">Toyota</Option>
          <Option value="Honda">Honda</Option>
        </Select>

        <Select
          className="select_model"
          defaultValue="Модель авто"
          style={{
            width: 200,
            height: 40,
          }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>

        <Select
          className="select_model"
          defaultValue="Объем"
          style={{
            width: 200,
            height: 40,
          }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>

        <Select
          className="select_model"
          defaultValue="Год выпуска"
          style={{
            width: 200,
            height: 40,
          }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>

        <Button
          style={{
            width: 200,
            //   height: 40
          }}
        >
          Find My Part
        </Button>
      </div>
    </div>
  );
};

export default AutoModels;
